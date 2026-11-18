// Module ID: 12079
// Function ID: 12080
// Name: Share
// Dependencies: [1380, 12080, 12081, 2]

// Module 12079 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 12080 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12081 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
