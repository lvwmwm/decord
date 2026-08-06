// Module ID: 9013
// Function ID: 9014
// Dependencies: [500, 9014, 9015, 2]

// Module 9013
import set from "set";
import set from "registerAsset";

if (set.isIOS()) {
  let importDefaultResult = require("registerAsset");
} else {
  importDefaultResult = require("registerAsset");
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
