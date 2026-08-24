// Module ID: 359
// Function ID: 360
// Name: shouldUseTurboAnimatedModule
// Dependencies: [360, 30]

// Module 359 (shouldUseTurboAnimatedModule)
import getAll from "get" /* 30 */;
import shouldUseTurboAnimatedModuleDefault from "shouldUseTurboAnimatedModule" /* 360 */;

let value = null;
if (!shouldUseTurboAnimatedModuleDefault()) {
  value = getAll.get("NativeAnimatedModule");
  const importAllResult = getAll;
}

export default value;
