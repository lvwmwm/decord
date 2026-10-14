// Module ID: 14943
// Function ID: 14944
// Dependencies: [14918]

// Module 14943
import _mod14918 from "module_14918" /* 14918 */;

let fn;
if (_mod14918) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
