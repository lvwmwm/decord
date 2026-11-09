// Module ID: 5415
// Function ID: 5416
// Dependencies: []
// Exports: isFabricInstalled

// Module 5415

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
