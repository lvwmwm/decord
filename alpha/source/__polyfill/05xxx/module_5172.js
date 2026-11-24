// Module ID: 5172
// Function ID: 5173
// Dependencies: []
// Exports: isFabricInstalled

// Module 5172

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
