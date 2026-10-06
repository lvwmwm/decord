// Module ID: 14112
// Function ID: 14113
// Dependencies: [14087]

// Module 14112
import _mod14087 from "module_14087" /* 14087 */;

let fn;
if (_mod14087) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
