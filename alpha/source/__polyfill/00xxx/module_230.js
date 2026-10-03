// Module ID: 230
// Function ID: 231
// Dependencies: [231]

// Module 230
import _mod231 from "module_231" /* 231 */;

if (!global.alert) {
  global.alert = (arg0) => {
    const _default = _mod231.default;
    _default.alert("Alert", "" + arg0);
  };
}
