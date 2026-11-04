// Module ID: 5423
// Function ID: 5424
// Dependencies: []
// Exports: isFabricInstalled

// Module 5423

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
