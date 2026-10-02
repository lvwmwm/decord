// Module ID: 13823
// Function ID: 13824
// Dependencies: [13798]

// Module 13823
import _mod13798 from "module_13798" /* 13798 */;

let fn;
if (_mod13798) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
