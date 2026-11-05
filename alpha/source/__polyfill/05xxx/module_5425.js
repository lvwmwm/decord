// Module ID: 5425
// Function ID: 5426
// Dependencies: []
// Exports: isFabricInstalled

// Module 5425

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
