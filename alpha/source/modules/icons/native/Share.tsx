// Module ID: 9129
// Function ID: 9130
// Name: Share
// Dependencies: [1381, 9130, 9131, 2]

// Module 9129 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9130 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9131 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
