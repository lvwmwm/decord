// Module ID: 13504
// Function ID: 13505
// Name: prop
// Dependencies: [13505]

// Module 13504 (prop)
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
