// Module ID: 10152
// Function ID: 10153
// Name: icons/Share
// Dependencies: [1364, 10153, 10154, 2]

// Module 10152 (icons/Share)
import _modDef10153 from "module_10153" /* 10153 */;
import _modDef10154 from "module_10154" /* 10154 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef10153;
} else {
  importDefaultResult = _modDef10154;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
