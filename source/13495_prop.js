// Module ID: 13495
// Function ID: 13496
// Name: prop
// Dependencies: [13496]

// Module 13495 (prop)
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
