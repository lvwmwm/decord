// Module ID: 14561
// Function ID: 14562
// Dependencies: [14536]

// Module 14561
import _mod14536 from "module_14536" /* 14536 */;

let fn;
if (_mod14536) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
