// Module ID: 11911
// Function ID: 11912
// Dependencies: [10240, 11912, 11913, 2]

// Module 11911
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11912");
} else {
  importDefaultResult = require("module_11913");
}
const result = require("module_11913").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
