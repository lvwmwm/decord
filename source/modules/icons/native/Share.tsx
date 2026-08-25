// Module ID: 9238
// Function ID: 9239
// Dependencies: [500, 9239, 9240, 2]

// Module 9238
import registerAssetDefault from "registerAsset" /* 9239 */;
import registerAssetDefault2 from "registerAsset" /* 9240 */;
import set from "set" /* 500 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
