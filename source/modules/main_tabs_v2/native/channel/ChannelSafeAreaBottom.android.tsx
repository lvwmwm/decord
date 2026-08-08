// Module ID: 11998
// Function ID: 11999
// Dependencies: [10325, 11999, 12000, 2]

// Module 11998
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11999");
} else {
  importDefaultResult = require("module_12000");
}
const result = require("module_12000").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
