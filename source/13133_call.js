// Module ID: 13133
// Function ID: 99485
// Name: call
// Dependencies: [13143]

// Module 13133 (call)
if (require("module_13143")) {
  let fn = call.bind(call);
} else {
  fn = () => call(...arguments);
}

export default fn;
