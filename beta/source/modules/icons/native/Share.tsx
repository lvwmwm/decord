// Module ID: 9312
// Function ID: 9313
// Name: icons/Share
// Dependencies: [1364, 9313, 9314, 2]

// Module 9312 (icons/Share)
import _modDef9313 from "module_9313" /* 9313 */;
import _modDef9314 from "module_9314" /* 9314 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9313;
} else {
  importDefaultResult = _modDef9314;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
