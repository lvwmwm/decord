// Module ID: 5278
// Function ID: 5279
// Dependencies: []
// Exports: isFabricInstalled

// Module 5278

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
