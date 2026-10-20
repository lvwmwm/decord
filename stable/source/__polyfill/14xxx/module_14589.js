// Module ID: 14589
// Function ID: 14590
// Dependencies: [14564]

// Module 14589
import _mod14564 from "module_14564" /* 14564 */;

let fn;
if (_mod14564) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
