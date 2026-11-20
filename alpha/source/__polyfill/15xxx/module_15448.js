// Module ID: 15448
// Function ID: 15449
// Dependencies: [15423]

// Module 15448
import _mod15423 from "module_15423" /* 15423 */;

let fn;
if (_mod15423) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
