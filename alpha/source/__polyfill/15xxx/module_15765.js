// Module ID: 15765
// Function ID: 15766
// Dependencies: [15740]

// Module 15765
import _mod15740 from "module_15740" /* 15740 */;

let fn;
if (_mod15740) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
