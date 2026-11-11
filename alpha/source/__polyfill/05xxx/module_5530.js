// Module ID: 5530
// Function ID: 5531
// Dependencies: []
// Exports: isFabricInstalled

// Module 5530

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
