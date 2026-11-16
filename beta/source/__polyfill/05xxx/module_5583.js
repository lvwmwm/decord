// Module ID: 5583
// Function ID: 5584
// Dependencies: []
// Exports: isFabricInstalled

// Module 5583

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
