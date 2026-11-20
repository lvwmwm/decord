// Module ID: 5049
// Function ID: 5050
// Dependencies: []
// Exports: isFabricInstalled

// Module 5049

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
