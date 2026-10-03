// Module ID: 14092
// Function ID: 14093
// Dependencies: [14067]

// Module 14092
import _mod14067 from "module_14067" /* 14067 */;

let fn;
if (_mod14067) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
