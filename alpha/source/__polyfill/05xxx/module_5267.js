// Module ID: 5267
// Function ID: 5268
// Dependencies: []
// Exports: isFabricInstalled

// Module 5267

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
