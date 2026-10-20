// Module ID: 8721
// Function ID: 8722
// Name: Share
// Dependencies: [1382, 8722, 8723, 2]

// Module 8721 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 8722 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8723 */;
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
