// Module ID: 13372
// Function ID: 102351
// Name: call
// Dependencies: [13347]

// Module 13372 (call)
if (require("module_13347")) {
  let fn = call.bind(call);
} else {
  fn = () => call(...arguments);
}

export default fn;
