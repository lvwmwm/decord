// Module ID: 15484
// Function ID: 15485
// Dependencies: [15459]

// Module 15484
import _mod15459 from "module_15459" /* 15459 */;

let fn;
if (_mod15459) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
