// Module ID: 16401
// Function ID: 16402
// Dependencies: [16402]

// Module 16401
import prop_mod from "module_16402" /* 16402 */;

let prop = prop_mod;
if (prop) {
  const _Symbol = Symbol;
  prop = !Symbol.sham;
}
if (prop) {
  const _Symbol2 = Symbol;
  prop = typeof Symbol.iterator === "symbol";
}

export default prop;
