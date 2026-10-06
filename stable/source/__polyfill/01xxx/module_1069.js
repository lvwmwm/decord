// Module ID: 1069
// Function ID: 1070
// Dependencies: []
// Exports: createIntegration

// Module 1069

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
}
