// Module ID: 4566
// Function ID: 4567
// Name: ReanimatedRexport
// Dependencies: [1365, 1638, 4567, 2]

// Module 4566 (ReanimatedRexport)
import _mod1638 from "module_1638" /* 1638 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4567 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import size from "module_2" /* 2 */;

const _modDef1638 = _mod1638;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const importDefaultResult = _modDef1638;
  assign(importDefaultResult, obj);
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in _mod1638) {
  exports[key10033] = _mod1638[key10033];
  continue;
}

export default _modDef1638;
