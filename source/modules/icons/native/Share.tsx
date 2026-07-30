// Module ID: 10932
// Function ID: 10933
// Dependencies: [500, 10933, 10934, 2]

// Module 10932
import set from "set";
import set from "registerAsset";

if (set.isIOS()) {
  let importDefaultResult = require("registerAsset");
} else {
  importDefaultResult = require("registerAsset");
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
