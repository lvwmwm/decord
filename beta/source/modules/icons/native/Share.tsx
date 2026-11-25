// Module ID: 12123
// Function ID: 12124
// Name: Share
// Dependencies: [1378, 12124, 12125, 2]

// Module 12123 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 12124 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12125 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
