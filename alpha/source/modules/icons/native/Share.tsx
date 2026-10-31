// Module ID: 9161
// Function ID: 9162
// Name: Share
// Dependencies: [1375, 9162, 9163, 2]

// Module 9161 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9162 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9163 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
