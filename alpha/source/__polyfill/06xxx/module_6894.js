// Module ID: 6894
// Function ID: 6895
// Dependencies: []
// Exports: isFabricInstalled

// Module 6894
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
