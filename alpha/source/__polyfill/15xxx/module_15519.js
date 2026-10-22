// Module ID: 15519
// Function ID: 15520
// Dependencies: [15494]

// Module 15519
import _mod15494 from "module_15494" /* 15494 */;

let fn;
if (_mod15494) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
