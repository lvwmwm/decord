// Module ID: 13806
// Function ID: 13807
// Dependencies: [13807]

// Module 13806
import prop_mod from "module_13807" /* 13807 */;

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
