// Module ID: 9259
// Function ID: 9260
// Name: Share
// Dependencies: [1377, 9260, 9261, 2]

// Module 9259 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9260 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9261 */;
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
