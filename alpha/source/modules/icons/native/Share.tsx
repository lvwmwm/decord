// Module ID: 9241
// Function ID: 9242
// Name: Share
// Dependencies: [1377, 9242, 9243, 2]

// Module 9241 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9242 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9243 */;
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
