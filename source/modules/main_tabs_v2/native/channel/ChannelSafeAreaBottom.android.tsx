// Module ID: 12080
// Function ID: 12081
// Dependencies: [10298, 12081, 12082, 2]

// Module 12080
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_12081");
} else {
  importDefaultResult = require("module_12082");
}
const result = require("module_12082").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
