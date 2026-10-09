// Module ID: 14507
// Function ID: 14508
// Dependencies: [14482]

// Module 14507
import _mod14482 from "module_14482" /* 14482 */;

let fn;
if (_mod14482) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
