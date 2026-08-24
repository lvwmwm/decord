// Module ID: 10882
// Function ID: 10883
// Dependencies: [500, 10883, 10884, 2]

// Module 10882
import registerAssetDefault from "registerAsset" /* 10883 */;
import registerAssetDefault2 from "registerAsset" /* 10884 */;
import set from "set" /* 500 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
