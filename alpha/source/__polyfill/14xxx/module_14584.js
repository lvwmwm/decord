// Module ID: 14584
// Function ID: 14585
// Dependencies: [14559]

// Module 14584
import _mod14559 from "module_14559" /* 14559 */;

let fn;
if (_mod14559) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
