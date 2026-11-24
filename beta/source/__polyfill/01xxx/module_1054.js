// Module ID: 1054
// Function ID: 1055
// Dependencies: []
// Exports: createIntegration

// Module 1054

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
}
