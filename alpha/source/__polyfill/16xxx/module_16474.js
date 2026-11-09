// Module ID: 16474
// Function ID: 16475
// Dependencies: [16449]

// Module 16474
import _mod16449 from "module_16449" /* 16449 */;

let fn;
if (_mod16449) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
