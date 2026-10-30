// Module ID: 16116
// Function ID: 16117
// Dependencies: [16091]

// Module 16116
import _mod16091 from "module_16091" /* 16091 */;

let fn;
if (_mod16091) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
