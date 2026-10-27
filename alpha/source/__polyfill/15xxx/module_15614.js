// Module ID: 15614
// Function ID: 15615
// Dependencies: [15589]

// Module 15614
import _mod15589 from "module_15589" /* 15589 */;

let fn;
if (_mod15589) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
