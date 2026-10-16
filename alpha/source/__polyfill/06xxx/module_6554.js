// Module ID: 6554
// Function ID: 6555
// Dependencies: []
// Exports: isFabricInstalled

// Module 6554

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
