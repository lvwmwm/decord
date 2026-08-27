// Module ID: 9868
// Function ID: 9869
// Dependencies: [500, 9869, 9870, 2]

// Module 9868
import registerAssetDefault from "registerAsset" /* 9869 */;
import registerAssetDefault2 from "registerAsset" /* 9870 */;
import set from "set" /* 500 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
