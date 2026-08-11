'use strict';

/**
 * Convert a space-separated list of CSS class names into a CSS selector.
 *
 * Copy the `class` attribute of a DOM element (e.g. from React/Instagram-style
 * minified markup) and turn it into something you can feed straight into
 * `document.querySelector()`.
 *
 * Works in three ways from a single file:
 *   - Browser console: paste this file, then call convertClassSelector("...").
 *   - Node module:      const convert = require('./classSelectorConverter');
 *   - Node CLI:         node classSelectorConverter.js "class1 class2 class3"
 *
 * @param {string} classString            Space-separated class names, e.g. "a b c".
 *                                         Leading dots (".a") are tolerated and stripped.
 * @param {object} [options]
 * @param {boolean} [options.call=true]    true  -> `document.querySelector(".a.b.c")`
 *                                         false -> the raw selector `.a.b.c`
 * @param {boolean} [options.unique=false] Remove duplicate class names (preserving order).
 * @param {boolean} [options.log=false]    Also print the result to the console.
 * @returns {string} The generated selector (or querySelector call).
 * @throws {TypeError} If `classString` is not a string.
 * @throws {Error}     If the input contains no usable class names.
 */
function convertClassSelector(classString, options) {
  if (typeof classString !== 'string') {
    throw new TypeError(
      `convertClassSelector: expected a string, received ${typeof classString}`
    );
  }

  const { call = true, unique = false, log = false } = options || {};

  // Single pass: trim once, split on any run of whitespace (spaces, tabs,
  // newlines), drop empty tokens, and strip any leading dots the user may have
  // pasted (".foo" -> "foo") so the output never contains "..foo".
  const classes = classString
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((cls) => cls.replace(/^\.+/, ''));

  if (classes.length === 0) {
    throw new Error('convertClassSelector: no class names found in the input string.');
  }

  // Optional de-duplication keeps the first occurrence order via Set insertion.
  const list = unique ? [...new Set(classes)] : classes;

  const selector = '.' + list.join('.');
  const result = call ? `document.querySelector("${selector}")` : selector;

  if (log) {
    console.log(result);
  }
  return result;
}

// --- Node CLI entry point --------------------------------------------------
// Runs only when the file is executed directly (`node classSelectorConverter.js`),
// never when it is imported as a module.
if (typeof require !== 'undefined' && typeof module !== 'undefined' && require.main === module) {
  const input = process.argv.slice(2).join(' ');
  if (!input.trim()) {
    console.error('Usage: node classSelectorConverter.js "class1 class2 class3"');
    process.exit(1);
  }
  console.log(convertClassSelector(input, { call: true }));
}

// --- Node module export ----------------------------------------------------
// Harmless in the browser, where `module` is undefined.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = convertClassSelector;
  module.exports.convertClassSelector = convertClassSelector;
}
