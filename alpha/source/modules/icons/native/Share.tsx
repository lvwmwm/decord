// Module ID: 9531
// Function ID: 9532
// Name: Share
// Dependencies: [1369, 9532, 9533, 2]

// Module 9531 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9532 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9533 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
