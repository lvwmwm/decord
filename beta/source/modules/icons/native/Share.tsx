// Module ID: 12118
// Function ID: 12119
// Name: Share
// Dependencies: [1378, 12119, 12120, 2]

// Module 12118 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 12119 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12120 */;
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
