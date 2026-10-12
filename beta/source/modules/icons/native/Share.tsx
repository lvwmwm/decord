// Module ID: 8726
// Function ID: 8727
// Name: Share
// Dependencies: [1382, 8727, 8728, 2]

// Module 8726 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 8727 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8728 */;
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
