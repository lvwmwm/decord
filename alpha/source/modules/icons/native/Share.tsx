// Module ID: 9026
// Function ID: 9027
// Name: Share
// Dependencies: [1384, 9027, 9028, 2]

// Module 9026 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9027 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9028 */;
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
