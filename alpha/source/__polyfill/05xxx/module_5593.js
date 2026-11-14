// Module ID: 5593
// Function ID: 5594
// Dependencies: []
// Exports: isFabricInstalled

// Module 5593

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
