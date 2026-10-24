// Module ID: 5292
// Function ID: 5293
// Dependencies: []
// Exports: isFabricInstalled

// Module 5292

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
