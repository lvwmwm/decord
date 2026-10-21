// Module ID: 5274
// Function ID: 5275
// Dependencies: []
// Exports: isFabricInstalled

// Module 5274

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
