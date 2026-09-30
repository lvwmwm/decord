// Module ID: 6264
// Function ID: 6265
// Dependencies: []
// Exports: isFabricInstalled

// Module 6264
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
