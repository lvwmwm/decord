// Module ID: 9142
// Function ID: 9143
// Name: Share
// Dependencies: [1376, 9143, 9144, 2]

// Module 9142 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9143 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9144 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
