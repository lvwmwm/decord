// Module ID: 5212
// Function ID: 45144
// Name: isFabricInstalled
// Dependencies: []

// Module 5212 (isFabricInstalled)
const global = arg0;
arg5.isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (null != global) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
