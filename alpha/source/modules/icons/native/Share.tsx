// Module ID: 9247
// Function ID: 9248
// Name: Share
// Dependencies: [1377, 9248, 9249, 2]

// Module 9247 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9248 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9249 */;
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
