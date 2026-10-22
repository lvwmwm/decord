// Module ID: 9062
// Function ID: 9063
// Name: Share
// Dependencies: [1384, 9063, 9064, 2]

// Module 9062 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9063 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9064 */;
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
