// Module ID: 16815
// Function ID: 16816
// Dependencies: [16790]

// Module 16815
import _mod16790 from "module_16790" /* 16790 */;

let fn;
if (_mod16790) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
