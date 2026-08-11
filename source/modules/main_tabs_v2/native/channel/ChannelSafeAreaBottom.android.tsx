// Module ID: 12002
// Function ID: 12003
// Dependencies: [10331, 12003, 12004, 2]

// Module 12002
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_12003");
} else {
  importDefaultResult = require("module_12004");
}
const result = require("module_12004").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
