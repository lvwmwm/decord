// Module ID: 8998
// Function ID: 8999
// Name: Share
// Dependencies: [1384, 8999, 9000, 2]

// Module 8998 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 8999 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9000 */;
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
