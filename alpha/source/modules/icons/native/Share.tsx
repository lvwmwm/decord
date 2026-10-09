// Module ID: 8710
// Function ID: 8711
// Name: Share
// Dependencies: [1382, 8711, 8712, 2]

// Module 8710 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 8711 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8712 */;
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
