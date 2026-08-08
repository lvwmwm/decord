// Module ID: 8009
// Function ID: 8010
// Dependencies: [4039, 4037, 4036, 5781, 2]

// Module 8009
import isFabric from "isFabric";

if (isFabric.isFabric()) {
  let importDefaultResult = require("View");
} else {
  importDefaultResult = require("module_4036").createAnimatedComponent(require("set"));
  const importDefaultResult1 = require("module_4036");
}
const result = require("module_4036").fileFinishedImporting("modules/core/native/ReanimatedNativeView.tsx");

export default importDefaultResult;
