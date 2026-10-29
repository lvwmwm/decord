// Module ID: 16076
// Function ID: 16077
// Dependencies: [16051]

// Module 16076
import _mod16051 from "module_16051" /* 16051 */;

let fn;
if (_mod16051) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
