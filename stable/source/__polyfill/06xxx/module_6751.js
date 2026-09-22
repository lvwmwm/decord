// Module ID: 6751
// Function ID: 6752
// Dependencies: []
// Exports: isFabricInstalled

// Module 6751
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
