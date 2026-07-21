// Module ID: 13116
// Function ID: 99480
// Name: call
// Dependencies: []

// Module 13116 (call)
const call = prototype.call;
let fn = require(dependencyMap[0]);
if (fn) {
  const bind = prototype.bind;
  fn = bind.bind(call, call);
}
if (!require(dependencyMap[0])) {
  fn = (arg0) => {
    const call = arg0;
    return () => arg0(...arguments);
  };
}

export default fn;
