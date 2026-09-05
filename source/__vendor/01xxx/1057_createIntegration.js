// Module ID: 1057
// Function ID: 1058
// Name: createIntegration
// Dependencies: []

// Module 1057 (createIntegration)
arg5.createIntegration = function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
};
