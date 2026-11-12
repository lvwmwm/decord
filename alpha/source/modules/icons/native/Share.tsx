// Module ID: 12530
// Function ID: 12531
// Name: Share
// Dependencies: [1377, 12531, 12532, 2]

// Module 12530 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 12531 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12532 */;
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
