// Module ID: 9136
// Function ID: 9137
// Dependencies: [500, 9137, 9138, 2]

// Module 9136
import set from "set";
import set from "registerAsset";

if (set.isIOS()) {
  let importDefaultResult = require("registerAsset");
} else {
  importDefaultResult = require("registerAsset");
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
