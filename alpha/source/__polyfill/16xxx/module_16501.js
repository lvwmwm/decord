// Module ID: 16501
// Function ID: 16502
// Dependencies: [16476]

// Module 16501
import _mod16476 from "module_16476" /* 16476 */;

let fn;
if (_mod16476) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
