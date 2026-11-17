// Module ID: 12785
// Function ID: 12786
// Name: Share
// Dependencies: [1380, 12786, 12787, 2]

// Module 12785 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 12786 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12787 */;
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
