// Module ID: 8952
// Function ID: 8953
// Name: Share
// Dependencies: [1384, 8953, 8954, 2]

// Module 8952 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 8953 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8954 */;
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
