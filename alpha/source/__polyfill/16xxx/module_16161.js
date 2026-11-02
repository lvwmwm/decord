// Module ID: 16161
// Function ID: 16162
// Dependencies: [16136]

// Module 16161
import _mod16136 from "module_16136" /* 16136 */;

let fn;
if (_mod16136) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
