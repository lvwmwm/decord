// Module ID: 5324
// Function ID: 5325
// Dependencies: []
// Exports: isFabricInstalled

// Module 5324

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
