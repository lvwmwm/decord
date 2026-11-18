// Module ID: 5078
// Function ID: 5079
// Dependencies: []
// Exports: isFabricInstalled

// Module 5078

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
