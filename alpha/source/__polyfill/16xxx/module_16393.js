// Module ID: 16393
// Function ID: 16394
// Dependencies: [16368]

// Module 16393
import _mod16368 from "module_16368" /* 16368 */;

let fn;
if (_mod16368) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
