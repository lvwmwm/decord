// Module ID: 8730
// Function ID: 8731
// Name: Share
// Dependencies: [1382, 8731, 8732, 2]

// Module 8730 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 8731 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8732 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
