// Module ID: 13821
// Function ID: 13822
// Dependencies: [13796]

// Module 13821
import _mod13796 from "module_13796" /* 13796 */;

let fn;
if (_mod13796) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
