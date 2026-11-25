// Module ID: 15714
// Function ID: 15715
// Dependencies: [15689]

// Module 15714
import _mod15689 from "module_15689" /* 15689 */;

let fn;
if (_mod15689) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
