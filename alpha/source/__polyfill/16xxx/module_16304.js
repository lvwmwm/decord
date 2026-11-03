// Module ID: 16304
// Function ID: 16305
// Dependencies: [16279]

// Module 16304
import _mod16279 from "module_16279" /* 16279 */;

let fn;
if (_mod16279) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
