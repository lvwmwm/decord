// Module ID: 15475
// Function ID: 15476
// Dependencies: [15450]

// Module 15475
import _mod15450 from "module_15450" /* 15450 */;

let fn;
if (_mod15450) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;
