// Module ID: 6061
// Function ID: 6062
// Dependencies: []
// Exports: isFabricInstalled

// Module 6061

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
