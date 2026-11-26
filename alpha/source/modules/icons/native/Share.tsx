// Module ID: 10458
// Function ID: 10459
// Name: Share
// Dependencies: [1379, 10459, 10460, 2]

// Module 10458 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 10459 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10460 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
