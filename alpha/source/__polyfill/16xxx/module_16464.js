// Module ID: 16464
// Function ID: 16465
// Dependencies: [16439]

// Module 16464
import _mod16439 from "module_16439" /* 16439 */;

let fn;
if (_mod16439) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
