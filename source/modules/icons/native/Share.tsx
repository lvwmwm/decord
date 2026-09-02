// Module ID: 9970
// Function ID: 9971
// Dependencies: [1234, 9971, 9972, 2]

// Module 9970
import registerAssetDefault from "registerAsset" /* 9971 */;
import registerAssetDefault2 from "registerAsset" /* 9972 */;
import set from "set" /* 1234 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
