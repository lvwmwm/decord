// Module ID: 13316
// Function ID: 102046
// Name: call
// Dependencies: [13291]

// Module 13316 (call)
if (require("module_13291")) {
  let fn = call.bind(call);
} else {
  fn = () => call(...arguments);
}

export default fn;
