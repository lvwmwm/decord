// Module ID: 15284
// Function ID: 15285
// Dependencies: [15259]

// Module 15284
import _mod15259 from "module_15259" /* 15259 */;

let fn;
if (_mod15259) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
