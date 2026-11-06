// Module ID: 16156
// Function ID: 16157
// Dependencies: [16131]

// Module 16156
import _mod16131 from "module_16131" /* 16131 */;

let fn;
if (_mod16131) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
