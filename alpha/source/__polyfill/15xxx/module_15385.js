// Module ID: 15385
// Function ID: 15386
// Dependencies: [15360]

// Module 15385
import _mod15360 from "module_15360" /* 15360 */;

let fn;
if (_mod15360) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
