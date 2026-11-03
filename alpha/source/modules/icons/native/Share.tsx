// Module ID: 9289
// Function ID: 9290
// Name: Share
// Dependencies: [1377, 9290, 9291, 2]

// Module 9289 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9290 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9291 */;
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
