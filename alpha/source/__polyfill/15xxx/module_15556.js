// Module ID: 15556
// Function ID: 15557
// Dependencies: [15557]

// Module 15556
import prop_mod from "module_15557" /* 15557 */;

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
