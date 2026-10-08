// Module ID: 14411
// Function ID: 14412
// Dependencies: [14386]

// Module 14411
import _mod14386 from "module_14386" /* 14386 */;

let fn;
if (_mod14386) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
