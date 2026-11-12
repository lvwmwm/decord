// Module ID: 16642
// Function ID: 16643
// Dependencies: [16643]

// Module 16642
import prop_mod from "module_16643" /* 16643 */;

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
