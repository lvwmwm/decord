// Module ID: 9290
// Function ID: 9291
// Name: Share
// Dependencies: [1370, 9291, 9292, 2]

// Module 9290 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9291 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9292 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
