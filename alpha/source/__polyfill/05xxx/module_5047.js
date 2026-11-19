// Module ID: 5047
// Function ID: 5048
// Dependencies: []
// Exports: isFabricInstalled

// Module 5047

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
