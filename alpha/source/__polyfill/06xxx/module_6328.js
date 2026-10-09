// Module ID: 6328
// Function ID: 6329
// Dependencies: []
// Exports: isFabricInstalled

// Module 6328

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
