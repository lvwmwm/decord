// Module ID: 6918
// Function ID: 6919
// Dependencies: []
// Exports: isFabricInstalled

// Module 6918
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
