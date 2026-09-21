// Module ID: 10092
// Function ID: 10093
// Name: icons/Share
// Dependencies: [1368, 10093, 10094, 2]

// Module 10092 (icons/Share)
import _modDef10093 from "module_10093" /* 10093 */;
import _modDef10094 from "module_10094" /* 10094 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef10093;
} else {
  importDefaultResult = _modDef10094;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
