// Module ID: 15612
// Function ID: 15613
// Dependencies: [15587]

// Module 15612
import _mod15587 from "module_15587" /* 15587 */;

let fn;
if (_mod15587) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
