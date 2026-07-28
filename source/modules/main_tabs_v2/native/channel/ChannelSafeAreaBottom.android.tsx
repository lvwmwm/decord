// Module ID: 11710
// Function ID: 90645
// Dependencies: [10395, 11711, 11712, 2]

// Module 11710
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11711");
} else {
  importDefaultResult = require("module_11712");
}
const result = require("module_11712").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
