// Module ID: 6892
// Function ID: 6893
// Dependencies: []
// Exports: isFabricInstalled

// Module 6892
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
