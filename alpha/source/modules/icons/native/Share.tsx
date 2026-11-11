// Module ID: 12536
// Function ID: 12537
// Name: Share
// Dependencies: [1377, 12537, 12538, 2]

// Module 12536 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 12537 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12538 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
