// Module ID: 4524
// Function ID: 4525
// Name: ReanimatedRexport
// Dependencies: [1365, 1637, 4525, 2]

// Module 4524 (ReanimatedRexport)
import cancelAnimationDefault from "cancelAnimation" /* 1637 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4525 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const merged = Object.assign(cancelAnimationDefault, obj);
  const importDefaultResult = cancelAnimationDefault;
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in require("cancelAnimation")) {
  arg5[key10033] = require("cancelAnimation")[key10033];
  continue;
}

export default cancelAnimationDefault;
