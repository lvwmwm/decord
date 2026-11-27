// Module ID: 15772
// Function ID: 15773
// Dependencies: [15747]

// Module 15772
import _mod15747 from "module_15747" /* 15747 */;

let fn;
if (_mod15747) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
