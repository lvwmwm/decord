// Module ID: 13327
// Function ID: 102173
// Name: call
// Dependencies: [13302]

// Module 13327 (call)
if (require("module_13302")) {
  let fn = call.bind(call);
} else {
  fn = () => call(...arguments);
}

export default fn;
