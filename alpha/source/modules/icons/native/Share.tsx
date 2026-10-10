// Module ID: 8725
// Function ID: 8726
// Name: Share
// Dependencies: [1382, 8726, 8727, 2]

// Module 8725 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 8726 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8727 */;
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
