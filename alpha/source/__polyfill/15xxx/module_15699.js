// Module ID: 15699
// Function ID: 15700
// Dependencies: [15700]

// Module 15699
import prop_mod from "module_15700" /* 15700 */;

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
