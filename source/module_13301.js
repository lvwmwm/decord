// Module ID: 13301
// Function ID: 102018
// Dependencies: [13302]

// Module 13301
import module_13302 from "module_13302";

if (module_13302) {
  const _Symbol = Symbol;
  module_13302 = !Symbol.sham;
}
if (module_13302) {
  const _Symbol2 = Symbol;
  module_13302 = "symbol" === typeof Symbol.iterator;
}

export default module_13302;
