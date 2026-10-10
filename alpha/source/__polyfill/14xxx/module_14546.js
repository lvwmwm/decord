// Module ID: 14546
// Function ID: 14547
// Dependencies: [14547]

// Module 14546
import prop_mod from "module_14547" /* 14547 */;

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
