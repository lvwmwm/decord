// Module ID: 4618
// Function ID: 4619
// Name: ReanimatedRexport
// Dependencies: [1370, 1643, 4619, 2]

// Module 4618 (ReanimatedRexport)
import _mod1643 from "module_1643" /* 1643 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4619 */;
import PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import size from "module_2" /* 2 */;

const _modDef1643 = _mod1643;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const importDefaultResult = _modDef1643;
  assign(importDefaultResult, obj);
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in _mod1643) {
  exports[key10033] = _mod1643[key10033];
  continue;
}

export default _modDef1643;
