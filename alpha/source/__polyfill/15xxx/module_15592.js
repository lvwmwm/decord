// Module ID: 15592
// Function ID: 15593
// Dependencies: [15567]

// Module 15592
import _mod15567 from "module_15567" /* 15567 */;

let fn;
if (_mod15567) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
