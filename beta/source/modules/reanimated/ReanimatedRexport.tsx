// Module ID: 4570
// Function ID: 4571
// Name: ReanimatedRexport
// Dependencies: [1371, 1644, 4571, 2]

// Module 4570 (ReanimatedRexport)
import _mod1644 from "module_1644" /* 1644 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4571 */;
import PlatformUtils from "utils/PlatformUtils" /* 1371 */;
import size from "module_2" /* 2 */;

const _modDef1644 = _mod1644;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const importDefaultResult = _modDef1644;
  assign(importDefaultResult, obj);
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in _mod1644) {
  exports[key10033] = _mod1644[key10033];
  continue;
}

export default _modDef1644;
