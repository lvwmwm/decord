// Module ID: 5095
// Function ID: 5096
// Name: ReanimatedRexport
// Dependencies: [1376, 1650, 5096, 2]

// Module 5095 (ReanimatedRexport)
import _mod1650 from "module_1650" /* 1650 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 5096 */;
import PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

const _modDef1650 = _mod1650;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const importDefaultResult = _modDef1650;
  assign(importDefaultResult, obj);
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in _mod1650) {
  exports[key10033] = _mod1650[key10033];
  continue;
}

export default _modDef1650;
