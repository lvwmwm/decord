// Module ID: 11852
// Function ID: 11853
// Dependencies: [10571, 11853, 11854, 2]

// Module 11852
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11853");
} else {
  importDefaultResult = require("module_11854");
}
const result = require("module_11854").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
