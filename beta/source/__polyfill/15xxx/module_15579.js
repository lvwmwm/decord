// Module ID: 15579
// Function ID: 15580
// Dependencies: [15554]

// Module 15579
import _mod15554 from "module_15554" /* 15554 */;

let fn;
if (_mod15554) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
