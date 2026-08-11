# classSelectorConverter

![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A5%2012-339933?logo=node.js&logoColor=white)
![No dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

Turn a copied `class="..."` attribute into a ready-to-use `document.querySelector()` selector — instantly, without hand-editing dots.

---

## 🎯 Problem

Modern web apps (React, Instagram, Tailwind, etc.) render elements with long lists of **auto-generated, minified class names** separated by spaces:

```
x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5
```

To target that element with `document.querySelector()`, CSS requires every class to be prefixed with a `.` and joined with **no spaces** (`.x1c4vz4f.xs83m0k…`). Doing this by hand for a dozen cryptic classes is slow, and a single missing or misplaced dot silently breaks the selector.

## 💡 Solution

`classSelectorConverter` is a tiny, dependency-free JavaScript utility that takes the raw, space-separated class string and returns a valid `document.querySelector("...")` call. Paste it, run it, copy the result. It works in the **browser console**, as an **importable Node module**, and as a **command-line tool** — all from a single file.

## 🔎 Example

> [!NOTE]
> **This is the problem → this is what you run → this is what happens.**

**The problem** — you copied this from a DOM element and need a selector for it:

```
x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5
```

**What you run** (command line):

```bash
node classSelectorConverter.js "x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5"
```

**What happens** — a paste-ready selector is printed:

```javascript
document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5")
```

Same thing in the **browser console**:

```javascript
convertClassSelector("x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5");
// → 'document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5")'
```

## 📂 Scripts overview

| File | Description | How to run |
| --- | --- | --- |
| [`classSelectorConverter.js`](./classSelectorConverter.js) | The single utility: converts a space-separated class list into a `querySelector` selector. Usable in the browser, as a Node module, and as a CLI. | **CLI:** `node classSelectorConverter.js "a b c"` · **Console:** paste the file, then call `convertClassSelector("a b c")` · **Module:** `const convert = require('./classSelectorConverter')` |

## ⚙️ Setup / Usage

### Prerequisites

- A modern **web browser** with a JavaScript console, **or**
- **Node.js ≥ 12** for the CLI / module usage.
- No installation, no `npm install` — there are zero dependencies.

### 1. Browser console

1. Open DevTools → **Console**.
2. Paste the contents of `classSelectorConverter.js`.
3. Call it with your copied class string:

```javascript
convertClassSelector("x1c4vz4f xs83m0k xdl72j9");
// → 'document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9")'
```

### 2. Command line

```bash
node classSelectorConverter.js "x1c4vz4f xs83m0k xdl72j9"
```

### 3. Node module

```javascript
const convertClassSelector = require('./classSelectorConverter');

convertClassSelector("x1c4vz4f xs83m0k xdl72j9");
```

### Options

The function accepts an optional second argument:

| Option | Default | Effect |
| --- | --- | --- |
| `call` | `true` | `true` → full `document.querySelector(".a.b.c")` · `false` → raw selector `.a.b.c` |
| `unique` | `false` | Remove duplicate class names (order preserved) |
| `log` | `false` | Also print the result to the console |

```javascript
convertClassSelector("a b c", { call: false });   // → '.a.b.c'
convertClassSelector("a a b", { unique: true });   // → 'document.querySelector(".a.b")'
```

> [!TIP]
> Leading dots are tolerated — `".foo bar"` and `"foo bar"` both produce `.foo.bar`, so you can paste selector fragments without cleaning them up first.

> [!IMPORTANT]
> Input must be a string. Passing a non-string throws a `TypeError`, and an empty / whitespace-only string throws a clear `Error` — the tool never returns a silently broken selector.

## ✅ Benefits

- Saves time writing complex selectors by hand.
- Eliminates errors from manually placing dots (`.`) between class names.
- Ideal for debugging, web scraping, or DOM manipulation in frontend projects.

## 📝 License

Free to use under the [MIT License](./LICENSE).

## ✨ Author

Built to make working with dynamic, minified class names in the browser easier. Feedback and improvements are welcome!
