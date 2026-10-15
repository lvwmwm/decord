// Module ID: 15224
// Function ID: 15225
// Dependencies: [15225]

// Module 15224
import prop_mod from "module_15225" /* 15225 */;

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
