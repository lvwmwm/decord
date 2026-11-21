// Module ID: 5168
// Function ID: 5169
// Dependencies: []
// Exports: isFabricInstalled

// Module 5168

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
