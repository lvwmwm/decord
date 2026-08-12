// Module ID: 13655
// Function ID: 13656
// Name: prop
// Dependencies: [13656]

// Module 13655 (prop)
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
