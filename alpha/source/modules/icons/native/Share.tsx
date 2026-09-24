// Module ID: 10204
// Function ID: 10205
// Name: icons/Share
// Dependencies: [1364, 10205, 10206, 2]

// Module 10204 (icons/Share)
import _modDef10205 from "module_10205" /* 10205 */;
import _modDef10206 from "module_10206" /* 10206 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef10205;
} else {
  importDefaultResult = _modDef10206;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
