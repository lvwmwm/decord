// Module ID: 12059
// Function ID: 12060
// Dependencies: [10372, 12060, 12061, 2]

// Module 12059
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_12060");
} else {
  importDefaultResult = require("module_12061");
}
const result = require("module_12061").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
