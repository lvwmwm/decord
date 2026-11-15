// Module ID: 16504
// Function ID: 16505
// Dependencies: [16479]

// Module 16504
import _mod16479 from "module_16479" /* 16479 */;

let fn;
if (_mod16479) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
