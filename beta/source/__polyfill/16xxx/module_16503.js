// Module ID: 16503
// Function ID: 16504
// Dependencies: [16478]

// Module 16503
import _mod16478 from "module_16478" /* 16478 */;

let fn;
if (_mod16478) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
