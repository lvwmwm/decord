// Module ID: 5053
// Function ID: 5054
// Name: ReanimatedRexport
// Dependencies: [1382, 1655, 5054, 2]

// Module 5053 (ReanimatedRexport)
import _mod1655 from "module_1655" /* 1655 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 5054 */;
import PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

const _modDef1655 = _mod1655;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const importDefaultResult = _modDef1655;
  assign(importDefaultResult, obj);
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in _mod1655) {
  exports[key10033] = _mod1655[key10033];
  continue;
}

export default _modDef1655;
