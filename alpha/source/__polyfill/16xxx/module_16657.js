// Module ID: 16657
// Function ID: 16658
// Dependencies: [16632]

// Module 16657
import _mod16632 from "module_16632" /* 16632 */;

let fn;
if (_mod16632) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
