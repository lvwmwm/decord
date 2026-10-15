// Module ID: 8943
// Function ID: 8944
// Name: Share
// Dependencies: [1382, 8944, 8945, 2]

// Module 8943 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 8944 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8945 */;
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
