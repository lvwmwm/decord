// Module ID: 9479
// Function ID: 9480
// Name: icons/Share
// Dependencies: [1364, 9480, 9481, 2]

// Module 9479 (icons/Share)
import _modDef9480 from "module_9480" /* 9480 */;
import _modDef9481 from "module_9481" /* 9481 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9480;
} else {
  importDefaultResult = _modDef9481;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
