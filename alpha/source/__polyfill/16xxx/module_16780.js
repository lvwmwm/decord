// Module ID: 16780
// Function ID: 16781
// Dependencies: [16755]

// Module 16780
import _mod16755 from "module_16755" /* 16755 */;

let fn;
if (_mod16755) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
