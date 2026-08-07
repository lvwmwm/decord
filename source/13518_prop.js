// Module ID: 13518
// Function ID: 13519
// Name: prop
// Dependencies: [13519]

// Module 13518 (prop)
import prop from "prop";

if (prop) {
  const _Symbol = Symbol;
  prop = !Symbol.sham;
}
if (prop) {
  const _Symbol2 = Symbol;
  prop = typeof Symbol.iterator === "symbol";
}

export default prop;
