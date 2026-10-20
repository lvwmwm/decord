// Module ID: 15403
// Function ID: 15404
// Dependencies: [15378]

// Module 15403
import _mod15378 from "module_15378" /* 15378 */;

let fn;
if (_mod15378) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
