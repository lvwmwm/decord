// Module ID: 1070
// Function ID: 1071
// Dependencies: []
// Exports: createIntegration

// Module 1070

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
}
