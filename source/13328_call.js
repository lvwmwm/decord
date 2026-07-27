// Module ID: 13328
// Function ID: 102178
// Name: call
// Dependencies: [13303]

// Module 13328 (call)
if (require("module_13303")) {
  let fn = call.bind(call);
} else {
  fn = () => call(...arguments);
}

export default fn;
