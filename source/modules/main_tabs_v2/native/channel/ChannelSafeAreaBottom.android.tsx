// Module ID: 11883
// Function ID: 11884
// Dependencies: [10212, 11884, 11885, 2]

// Module 11883
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11884");
} else {
  importDefaultResult = require("module_11885");
}
const result = require("module_11885").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
