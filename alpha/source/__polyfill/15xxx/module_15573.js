// Module ID: 15573
// Function ID: 15574
// Dependencies: [15548]

// Module 15573
import _mod15548 from "module_15548" /* 15548 */;

let fn;
if (_mod15548) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
