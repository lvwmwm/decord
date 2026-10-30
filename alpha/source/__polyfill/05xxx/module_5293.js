// Module ID: 5293
// Function ID: 5294
// Dependencies: []
// Exports: isFabricInstalled

// Module 5293

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
