// Module ID: 16406
// Function ID: 16407
// Dependencies: [16381]

// Module 16406
import _mod16381 from "module_16381" /* 16381 */;

let fn;
if (_mod16381) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
