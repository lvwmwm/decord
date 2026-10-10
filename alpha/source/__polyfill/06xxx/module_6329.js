// Module ID: 6329
// Function ID: 6330
// Dependencies: []
// Exports: isFabricInstalled

// Module 6329

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
