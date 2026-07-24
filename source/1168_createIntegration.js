// Module ID: 1168
// Function ID: 13287
// Name: createIntegration
// Dependencies: []

// Module 1168 (createIntegration)
arg5.createIntegration = function createIntegration(name) {
  const obj = { name };
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let fn = arguments[1];
    }
    obj.setupOnce = fn;
    return obj;
  }
  fn = () => {

  };
};
