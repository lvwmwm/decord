// Module ID: 13588
// Function ID: 13589
// Name: prop
// Dependencies: [13589]

// Module 13588 (prop)
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
