// Module ID: 13467
// Function ID: 13468
// Name: prop
// Dependencies: [13468]

// Module 13467 (prop)
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
