// Module ID: 5329
// Function ID: 5330
// Dependencies: []
// Exports: isFabricInstalled

// Module 5329

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
