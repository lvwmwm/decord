// Module ID: 9053
// Function ID: 9054
// Name: Share
// Dependencies: [1384, 9054, 9055, 2]

// Module 9053 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9054 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9055 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
