// Module ID: 15840
// Function ID: 15841
// Dependencies: [15815]

// Module 15840
import _mod15815 from "module_15815" /* 15815 */;

let fn;
if (_mod15815) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
