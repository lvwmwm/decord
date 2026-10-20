// Module ID: 9014
// Function ID: 9015
// Name: Share
// Dependencies: [1384, 9015, 9016, 2]

// Module 9014 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9015 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9016 */;
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
