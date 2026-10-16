// Module ID: 6552
// Function ID: 6553
// Dependencies: []
// Exports: isFabricInstalled

// Module 6552

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
