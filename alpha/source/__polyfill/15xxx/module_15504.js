// Module ID: 15504
// Function ID: 15505
// Dependencies: [15505]

// Module 15504
import prop_mod from "module_15505" /* 15505 */;

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
