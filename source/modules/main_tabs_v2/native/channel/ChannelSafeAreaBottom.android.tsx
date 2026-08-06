// Module ID: 11917
// Function ID: 11918
// Dependencies: [10243, 11918, 11919, 2]

// Module 11917
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11918");
} else {
  importDefaultResult = require("module_11919");
}
const result = require("module_11919").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
