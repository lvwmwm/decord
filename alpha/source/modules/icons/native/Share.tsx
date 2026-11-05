// Module ID: 9313
// Function ID: 9314
// Name: Share
// Dependencies: [1377, 9314, 9315, 2]

// Module 9313 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9314 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9315 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
