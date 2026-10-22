// Module ID: 15532
// Function ID: 15533
// Dependencies: [15507]

// Module 15532
import _mod15507 from "module_15507" /* 15507 */;

let fn;
if (_mod15507) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
