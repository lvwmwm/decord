// Module ID: 1189
// Function ID: 1190
// Name: createIntegration
// Dependencies: []

// Module 1189 (createIntegration)
arg5.createIntegration = function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
};
