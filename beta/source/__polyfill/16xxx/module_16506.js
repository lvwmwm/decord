// Module ID: 16506
// Function ID: 16507
// Dependencies: [16481]

// Module 16506
import _mod16481 from "module_16481" /* 16481 */;

let fn;
if (_mod16481) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
