// Module ID: 12628
// Function ID: 12629
// Name: Share
// Dependencies: [1380, 12629, 12630, 2]

// Module 12628 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 12629 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12630 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
