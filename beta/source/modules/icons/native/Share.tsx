// Module ID: 10131
// Function ID: 10132
// Name: icons/Share
// Dependencies: [1368, 10132, 10133, 2]

// Module 10131 (icons/Share)
import _modDef10132 from "module_10132" /* 10132 */;
import _modDef10133 from "module_10133" /* 10133 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef10132;
} else {
  importDefaultResult = _modDef10133;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
