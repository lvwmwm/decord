// Module ID: 8701
// Function ID: 8702
// Name: Share
// Dependencies: [1381, 8702, 8703, 2]

// Module 8701 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 8702 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8703 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
