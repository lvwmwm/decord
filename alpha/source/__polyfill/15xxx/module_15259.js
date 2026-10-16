// Module ID: 15259
// Function ID: 15260
// Dependencies: [15260]

// Module 15259
import prop_mod from "module_15260" /* 15260 */;

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
