// Module ID: 5421
// Function ID: 5422
// Dependencies: []
// Exports: isFabricInstalled

// Module 5421

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
