// Module ID: 11671
// Function ID: 90494
// Dependencies: [10355, 11672, 11673, 2]

// Module 11671
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11672");
} else {
  importDefaultResult = require("module_11673");
}
const result = require("module_11673").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
