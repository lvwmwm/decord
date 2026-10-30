// Module ID: 5090
// Function ID: 5091
// Name: ReanimatedRexport
// Dependencies: [1377, 1651, 5091, 2]

// Module 5090 (ReanimatedRexport)
import _mod1651 from "module_1651" /* 1651 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 5091 */;
import PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const _modDef1651 = _mod1651;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const importDefaultResult = _modDef1651;
  assign(importDefaultResult, obj);
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in _mod1651) {
  exports[key10033] = _mod1651[key10033];
  continue;
}

export default _modDef1651;
