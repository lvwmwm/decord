// Module ID: 6334
// Function ID: 6335
// Dependencies: []
// Exports: isFabricInstalled

// Module 6334

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
