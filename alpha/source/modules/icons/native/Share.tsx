// Module ID: 11998
// Function ID: 11999
// Name: Share
// Dependencies: [1378, 11999, 12000, 2]

// Module 11998 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 11999 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12000 */;
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
