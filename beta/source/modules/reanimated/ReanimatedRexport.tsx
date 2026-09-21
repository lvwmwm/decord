// Module ID: 4497
// Function ID: 4498
// Name: ReanimatedRexport
// Dependencies: [1369, 1641, 4498, 2]

// Module 4497 (ReanimatedRexport)
import cancelAnimationDefault from "cancelAnimation" /* 1641 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4498 */;
import PlatformUtils from "utils/PlatformUtils" /* 1369 */;
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
