// Module ID: 6980
// Function ID: 6981
// Dependencies: []
// Exports: isFabricInstalled

// Module 6980
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
