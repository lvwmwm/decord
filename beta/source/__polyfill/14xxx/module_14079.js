// Module ID: 14079
// Function ID: 14080
// Dependencies: [14080]

// Module 14079
import prop_mod from "module_14080" /* 14080 */;

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
