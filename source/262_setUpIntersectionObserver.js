// Module ID: 262
// Function ID: 263
// Name: setUpIntersectionObserver
// Dependencies: [123, 263]

// Module 262 (setUpIntersectionObserver)
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpIntersectionObserver() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty.polyfillGlobal("IntersectionObserver", () => callback(table[1]).default);
    const obj = polyfillObjectProperty;
  }
};
