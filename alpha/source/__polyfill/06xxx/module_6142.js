// Module ID: 6142
// Function ID: 6143
// Dependencies: []
// Exports: isFabricInstalled

// Module 6142

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
