// Module ID: 15538
// Function ID: 15539
// Dependencies: [15539]

// Module 15538
import prop_mod from "module_15539" /* 15539 */;

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
