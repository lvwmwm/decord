// Module ID: 15239
// Function ID: 15240
// Dependencies: [15214]

// Module 15239
import _mod15214 from "module_15214" /* 15214 */;

let fn;
if (_mod15214) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
