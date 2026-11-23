// Module ID: 15571
// Function ID: 15572
// Dependencies: [15546]

// Module 15571
import _mod15546 from "module_15546" /* 15546 */;

let fn;
if (_mod15546) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
