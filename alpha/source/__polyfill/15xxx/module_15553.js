// Module ID: 15553
// Function ID: 15554
// Dependencies: [15528]

// Module 15553
import _mod15528 from "module_15528" /* 15528 */;

let fn;
if (_mod15528) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
