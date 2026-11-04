// Module ID: 9306
// Function ID: 9307
// Name: Share
// Dependencies: [1377, 9307, 9308, 2]

// Module 9306 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9307 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9308 */;
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
