// Module ID: 5445
// Function ID: 5446
// Dependencies: []
// Exports: isFabricInstalled

// Module 5445

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
