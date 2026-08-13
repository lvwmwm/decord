// Module ID: 13656
// Function ID: 13657
// Name: prop
// Dependencies: [13657]

// Module 13656 (prop)
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
