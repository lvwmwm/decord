// Module ID: 13142
// Function ID: 99530
// Name: call
// Dependencies: []

// Module 13142 (call)
if (require(dependencyMap[0])) {
  let fn = call.bind(call);
} else {
  fn = () => call(...arguments);
}

export default fn;
