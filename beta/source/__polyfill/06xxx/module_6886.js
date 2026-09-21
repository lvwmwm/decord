// Module ID: 6886
// Function ID: 6887
// Dependencies: []
// Exports: isFabricInstalled

// Module 6886
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
