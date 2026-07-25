// Module ID: 11670
// Function ID: 90489
// Dependencies: [10354, 11671, 11672, 2]

// Module 11670
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11671");
} else {
  importDefaultResult = require("module_11672");
}
const result = require("module_11672").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
