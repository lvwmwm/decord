// Module ID: 5246
// Function ID: 45270
// Name: isFabricInstalled
// Dependencies: []

// Module 5246 (isFabricInstalled)
const global = arg0;
arg5.isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (null != global) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
