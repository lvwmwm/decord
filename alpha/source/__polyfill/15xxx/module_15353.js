// Module ID: 15353
// Function ID: 15354
// Dependencies: [15328]

// Module 15353
import _mod15328 from "module_15328" /* 15328 */;

let fn;
if (_mod15328) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
