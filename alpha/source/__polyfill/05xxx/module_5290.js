// Module ID: 5290
// Function ID: 5291
// Dependencies: []
// Exports: isFabricInstalled

// Module 5290

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
