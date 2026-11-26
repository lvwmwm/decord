// Module ID: 5298
// Function ID: 5299
// Dependencies: []
// Exports: isFabricInstalled

// Module 5298

export function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
}
