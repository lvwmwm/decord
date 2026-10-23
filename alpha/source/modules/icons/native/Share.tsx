// Module ID: 9092
// Function ID: 9093
// Name: Share
// Dependencies: [1384, 9093, 9094, 2]

// Module 9092 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9093 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9094 */;
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
