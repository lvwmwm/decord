// Module ID: 5328
// Function ID: 5329
// Dependencies: []
// Exports: isFabricInstalled

// Module 5328

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
