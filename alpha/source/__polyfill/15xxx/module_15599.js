// Module ID: 15599
// Function ID: 15600
// Dependencies: [15600]

// Module 15599
import prop_mod from "module_15600" /* 15600 */;

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
