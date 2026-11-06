// Module ID: 16416
// Function ID: 16417
// Dependencies: [16391]

// Module 16416
import _mod16391 from "module_16391" /* 16391 */;

let fn;
if (_mod16391) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
