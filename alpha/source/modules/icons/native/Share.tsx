// Module ID: 10314
// Function ID: 10315
// Name: Share
// Dependencies: [1378, 10315, 10316, 2]

// Module 10314 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 10315 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10316 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
