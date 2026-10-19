// Module ID: 15357
// Function ID: 15358
// Dependencies: [15332]

// Module 15357
import _mod15332 from "module_15332" /* 15332 */;

let fn;
if (_mod15332) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
