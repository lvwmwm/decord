// Module ID: 6254
// Function ID: 6255
// Dependencies: []
// Exports: isFabricInstalled

// Module 6254
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
