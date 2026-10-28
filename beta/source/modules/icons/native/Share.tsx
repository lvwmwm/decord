// Module ID: 9125
// Function ID: 9126
// Name: Share
// Dependencies: [1384, 9126, 9127, 2]

// Module 9125 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9126 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9127 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
