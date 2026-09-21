// Module ID: 1061
// Function ID: 1062
// Dependencies: []
// Exports: createIntegration

// Module 1061

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {

    };
  }
  return { name, setupOnce: fn };
}
