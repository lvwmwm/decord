// Module ID: 5447
// Function ID: 5448
// Dependencies: []
// Exports: isFabricInstalled

// Module 5447

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
