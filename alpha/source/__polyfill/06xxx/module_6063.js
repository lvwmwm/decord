// Module ID: 6063
// Function ID: 6064
// Dependencies: []
// Exports: isFabricInstalled

// Module 6063
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
