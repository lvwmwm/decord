// Module ID: 15569
// Function ID: 15570
// Dependencies: [15544]

// Module 15569
import _mod15544 from "module_15544" /* 15544 */;

let fn;
if (_mod15544) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
