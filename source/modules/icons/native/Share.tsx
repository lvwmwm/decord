// Module ID: 9786
// Function ID: 9787
// Dependencies: [1234, 9787, 9788, 2]

// Module 9786
import registerAssetDefault from "registerAsset" /* 9787 */;
import registerAssetDefault2 from "registerAsset" /* 9788 */;
import set from "set" /* 1234 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
