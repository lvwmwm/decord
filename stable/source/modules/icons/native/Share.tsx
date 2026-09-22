// Module ID: 9987
// Function ID: 9988
// Name: icons/Share
// Dependencies: [1363, 9988, 9989, 2]

// Module 9987 (icons/Share)
import _modDef9988 from "module_9988" /* 9988 */;
import _modDef9989 from "module_9989" /* 9989 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9988;
} else {
  importDefaultResult = _modDef9989;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
