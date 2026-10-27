// Module ID: 15578
// Function ID: 15579
// Dependencies: [15553]

// Module 15578
import _mod15553 from "module_15553" /* 15553 */;

let fn;
if (_mod15553) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
