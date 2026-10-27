// Module ID: 1067
// Function ID: 1068
// Dependencies: []
// Exports: createIntegration

// Module 1067

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
}
