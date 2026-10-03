// Module ID: 6135
// Function ID: 6136
// Dependencies: []
// Exports: isFabricInstalled

// Module 6135

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
