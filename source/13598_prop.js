// Module ID: 13598
// Function ID: 13599
// Name: prop
// Dependencies: [13599]

// Module 13598 (prop)
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
