// Module ID: 9312
// Function ID: 9313
// Name: Share
// Dependencies: [1364, 9313, 9314, 2]

// Module 9312 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9313 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9314 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
