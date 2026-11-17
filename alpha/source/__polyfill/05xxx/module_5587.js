// Module ID: 5587
// Function ID: 5588
// Dependencies: []
// Exports: isFabricInstalled

// Module 5587

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
