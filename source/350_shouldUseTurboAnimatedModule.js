// Module ID: 350
// Function ID: 5222
// Name: shouldUseTurboAnimatedModule
// Dependencies: [351, 55]

// Module 350 (shouldUseTurboAnimatedModule)
let value = null;
if (!require("shouldUseTurboAnimatedModule")()) {
  value = require("requireModule").get("NativeAnimatedModule");
  const importAllResult = require("requireModule");
}

export default value;
