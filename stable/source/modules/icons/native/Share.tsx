// Module ID: 9274
// Function ID: 9275
// Name: Share
// Dependencies: [1377, 9275, 9276, 2]

// Module 9274 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9275 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9276 */;
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
