# classSelectorConverter

`classSelectorConverter` ist ein kleines, praktisches JavaScript-Tool, das eine Liste von CSS-Klassennamen in einen gültigen CSS-Selektor für `document.querySelector()` umwandelt. Es ist besonders nützlich beim Arbeiten mit automatisch generierten oder minifizierten Klassennamen, wie sie oft bei modernen Web-Frameworks (z. B. React, Instagram, usw.) vorkommen.

---

## 🔧 Funktionen

- Wandelt eine durch Leerzeichen getrennte Liste von CSS-Klassen in einen korrekten `querySelector`-String um.
- Gibt das Ergebnis als `document.querySelector(...)`-Aufruf in der Konsole aus.
- Praktisch für Entwickler:innen, die mit dynamisch generiertem HTML/CSS arbeiten.

---

## 📦 Beispiel

```javascript
function convertClassSelector(classString) {
  const cleaned = classString.trim().split(/\s+/).map(cls => `.${cls}`).join('');
  console.log(`document.querySelector("${cleaned}")`);
  return `document.querySelector("${cleaned}")`;
}

// Beispielnutzung:
convertClassSelector("x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x1cy8zhl x1277o0a");
```

🖨️ **Ausgabe:**

```javascript
document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl.x1277o0a")
```

---

## 📝 Verwendung

1. Kopiere die Funktion `convertClassSelector` in deine Konsole oder dein Script.
2. Übergib einen String mit Klassennamen, wie du ihn aus einem HTML-Element herauskopiert hast.
3. Verwende die ausgegebene `querySelector(...)`-Zeile direkt in deinem Code.

---

## ✅ Vorteile

* Spart Zeit beim Schreiben komplexer Selektoren.
* Vermeidet Fehler durch manuelles Setzen der Punkte (`.`) zwischen Klassennamen.
* Ideal für Debugging, Web-Scraping oder DOM-Manipulation in Frontend-Projekten.

---

## 🔒 Lizenz

Dieses Tool ist frei nutzbar und steht unter der [MIT-Lizenz](https://opensource.org/licenses/MIT).

---

## ✨ Autor

Dieses kleine Tool wurde entwickelt, um die Arbeit mit dynamischen Klassennamen im Browser zu erleichtern. Feedback und Verbesserungen sind willkommen!
