// Module ID: 10459
// Function ID: 10460
// Name: Share
// Dependencies: [1379, 10460, 10461, 2]

// Module 10459 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 10460 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10461 */;
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
