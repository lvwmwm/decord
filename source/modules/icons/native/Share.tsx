// Module ID: 11072
// Function ID: 11073
// Dependencies: [500, 11073, 11074, 2]

// Module 11072
import set from "set";
import set from "registerAsset";

if (set.isIOS()) {
  let importDefaultResult = require("registerAsset");
} else {
  importDefaultResult = require("registerAsset");
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
