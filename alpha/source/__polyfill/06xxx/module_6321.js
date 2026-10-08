// Module ID: 6321
// Function ID: 6322
// Dependencies: []
// Exports: isFabricInstalled

// Module 6321

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
