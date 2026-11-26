// Module ID: 15583
// Function ID: 15584
// Dependencies: [15558]

// Module 15583
import _mod15558 from "module_15558" /* 15558 */;

let fn;
if (_mod15558) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
