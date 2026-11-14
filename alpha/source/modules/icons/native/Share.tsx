// Module ID: 12626
// Function ID: 12627
// Name: Share
// Dependencies: [1380, 12627, 12628, 2]

// Module 12626 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 12627 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12628 */;
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
