// Module ID: 6068
// Function ID: 6069
// Dependencies: []
// Exports: isFabricInstalled

// Module 6068
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
