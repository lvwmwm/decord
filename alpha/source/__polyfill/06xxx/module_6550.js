// Module ID: 6550
// Function ID: 6551
// Dependencies: []
// Exports: isFabricInstalled

// Module 6550

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
