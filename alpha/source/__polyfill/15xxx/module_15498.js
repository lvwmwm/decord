// Module ID: 15498
// Function ID: 15499
// Dependencies: [15473]

// Module 15498
import _mod15473 from "module_15473" /* 15473 */;

let fn;
if (_mod15473) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
