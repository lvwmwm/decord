// Module ID: 9012
// Function ID: 9013
// Dependencies: [500, 9013, 9014, 2]

// Module 9012
import set from "set";
import set from "registerAsset";

if (set.isIOS()) {
  let importDefaultResult = require("registerAsset");
} else {
  importDefaultResult = require("registerAsset");
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
