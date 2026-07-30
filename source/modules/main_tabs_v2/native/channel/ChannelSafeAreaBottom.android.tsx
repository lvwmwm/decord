// Module ID: 11731
// Function ID: 11732
// Dependencies: [10415, 11732, 11733, 2]

// Module 11731
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11732");
} else {
  importDefaultResult = require("module_11733");
}
const result = require("module_11733").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
