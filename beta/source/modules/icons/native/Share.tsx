// Module ID: 9093
// Function ID: 9094
// Name: Share
// Dependencies: [1384, 9094, 9095, 2]

// Module 9093 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9094 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9095 */;
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
