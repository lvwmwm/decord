// Module ID: 1055
// Function ID: 1056
// Dependencies: []
// Exports: createIntegration

// Module 1055

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
}
