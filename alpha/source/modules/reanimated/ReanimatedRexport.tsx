// Module ID: 4811
// Function ID: 4812
// Name: ReanimatedRexport
// Dependencies: [1383, 1656, 4812, 2]

// Module 4811 (ReanimatedRexport)
import _mod1656 from "module_1656" /* 1656 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4812 */;
import PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import size from "module_2" /* 2 */;

const _modDef1656 = _mod1656;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const importDefaultResult = _modDef1656;
  assign(importDefaultResult, obj);
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in _mod1656) {
  exports[key10033] = _mod1656[key10033];
  continue;
}

export default _modDef1656;
