// Module ID: 5417
// Function ID: 5418
// Dependencies: []
// Exports: isFabricInstalled

// Module 5417

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
