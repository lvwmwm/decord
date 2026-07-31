// Module ID: 11749
// Function ID: 11750
// Dependencies: [10433, 11750, 11751, 2]

// Module 11749
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11750");
} else {
  importDefaultResult = require("module_11751");
}
const result = require("module_11751").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
