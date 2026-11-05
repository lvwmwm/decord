// Module ID: 16419
// Function ID: 16420
// Dependencies: [16394]

// Module 16419
import _mod16394 from "module_16394" /* 16394 */;

let fn;
if (_mod16394) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
