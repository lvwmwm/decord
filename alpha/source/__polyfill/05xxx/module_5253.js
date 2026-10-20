// Module ID: 5253
// Function ID: 5254
// Dependencies: []
// Exports: isFabricInstalled

// Module 5253

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
