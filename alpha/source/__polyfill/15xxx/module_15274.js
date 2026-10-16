// Module ID: 15274
// Function ID: 15275
// Dependencies: [15249]

// Module 15274
import _mod15249 from "module_15249" /* 15249 */;

let fn;
if (_mod15249) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
