// Module ID: 6607
// Function ID: 6608
// Dependencies: []
// Exports: isFabricInstalled

// Module 6607

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
