// Module ID: 6483
// Function ID: 6484
// Name: getPolyfill
// Dependencies: [6484]

// Module 6483 (getPolyfill)
import trim6 from "trim" /* 6484 */;


export default function getPolyfill() {
  if (String.prototype.trim) {
    const trim = "\u200B".trim;
    if ("\u200B" === "\u200B".trim()) {
      const trim2 = "\u180E".trim;
      if ("\u180E" === "\u180E".trim()) {
        const trim3 = "_\u180E".trim;
        if ("_\u180E" === "_\u180E".trim()) {
          let trim5;
          const trim4 = "\u180E_".trim;
          if ("\u180E_" === "\u180E_".trim()) {
            const _String = String;
            trim5 = String.prototype.trim;
          }
          return trim5;
        }
      }
    }
  }
  trim5 = trim6;
};
