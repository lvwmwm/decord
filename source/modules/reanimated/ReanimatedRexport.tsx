// Module ID: 4217
// Function ID: 4218
// Dependencies: [1235, 1652, 4218, 2]

// Module 4217
import set from "set" /* 2 */;
import cancelAnimationDefault from "cancelAnimation" /* 1652 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4218 */;
import PlatformTypes from "PlatformTypes" /* 1235 */;

if (PlatformTypes.isAndroid()) {
  const _Object = Object;
  const obj = { View: null };
  obj[0] = REAWorkaroundViewDefault;
  const merged = Object.assign(cancelAnimationDefault, obj);
  const importDefaultResult = cancelAnimationDefault;
}
const result = set.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in require("cancelAnimation")) {
  let tmp5 = key10033;
  arg5[key10033] = require("cancelAnimation")[key10033];
  continue;
}

export default cancelAnimationDefault;
