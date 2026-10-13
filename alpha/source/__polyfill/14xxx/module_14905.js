// Module ID: 14905
// Function ID: 14906
// Dependencies: [14880]

// Module 14905
import _mod14880 from "module_14880" /* 14880 */;

let fn;
if (_mod14880) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
