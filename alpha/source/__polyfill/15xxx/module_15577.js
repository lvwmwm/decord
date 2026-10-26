// Module ID: 15577
// Function ID: 15578
// Dependencies: [15552]

// Module 15577
import _mod15552 from "module_15552" /* 15552 */;

let fn;
if (_mod15552) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
