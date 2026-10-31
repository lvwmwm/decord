// Module ID: 16157
// Function ID: 16158
// Dependencies: [16132]

// Module 16157
import _mod16132 from "module_16132" /* 16132 */;

let fn;
if (_mod16132) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
