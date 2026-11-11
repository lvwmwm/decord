// Module ID: 16662
// Function ID: 16663
// Dependencies: [16637]

// Module 16662
import _mod16637 from "module_16637" /* 16637 */;

let fn;
if (_mod16637) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
