// Module ID: 5084
// Function ID: 5085
// Name: ReanimatedRexport
// Dependencies: [1385, 1658, 5085, 2]

// Module 5084 (ReanimatedRexport)
import _mod1658 from "module_1658" /* 1658 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 5085 */;
import PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import size from "module_2" /* 2 */;

const _modDef1658 = _mod1658;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const importDefaultResult = _modDef1658;
  assign(importDefaultResult, obj);
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in _mod1658) {
  exports[key10033] = _mod1658[key10033];
  continue;
}

export default _modDef1658;
