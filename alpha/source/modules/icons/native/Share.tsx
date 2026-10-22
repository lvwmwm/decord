// Module ID: 9069
// Function ID: 9070
// Name: Share
// Dependencies: [1384, 9070, 9071, 2]

// Module 9069 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9070 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9071 */;
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
