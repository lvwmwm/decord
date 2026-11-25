// Module ID: 10413
// Function ID: 10414
// Name: Share
// Dependencies: [1378, 10414, 10415, 2]

// Module 10413 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 10414 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10415 */;
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
