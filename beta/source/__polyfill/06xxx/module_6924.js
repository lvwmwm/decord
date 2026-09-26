// Module ID: 6924
// Function ID: 6925
// Dependencies: []
// Exports: isFabricInstalled

// Module 6924
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
