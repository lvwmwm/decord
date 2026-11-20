// Module ID: 16782
// Function ID: 16783
// Dependencies: [16757]

// Module 16782
import _mod16757 from "module_16757" /* 16757 */;

let fn;
if (_mod16757) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
