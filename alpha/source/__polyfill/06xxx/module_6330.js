// Module ID: 6330
// Function ID: 6331
// Dependencies: []
// Exports: isFabricInstalled

// Module 6330

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
