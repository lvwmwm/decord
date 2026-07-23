// Module ID: 13263
// Function ID: 101719
// Name: call
// Dependencies: [13238]

// Module 13263 (call)
if (require("module_13238")) {
  let fn = call.bind(call);
} else {
  fn = () => call(...arguments);
}

export default fn;
