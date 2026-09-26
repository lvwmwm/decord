// Module ID: 1057
// Function ID: 1058
// Dependencies: []
// Exports: createIntegration

// Module 1057

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
}
