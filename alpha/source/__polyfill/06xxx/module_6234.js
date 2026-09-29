// Module ID: 6234
// Function ID: 6235
// Dependencies: []
// Exports: isFabricInstalled

// Module 6234
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
