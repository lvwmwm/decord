// Module ID: 1068
// Function ID: 1069
// Dependencies: []
// Exports: createIntegration

// Module 1068

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
}
