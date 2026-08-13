// Module ID: 12062
// Function ID: 12063
// Dependencies: [10284, 12063, 12064, 2]

// Module 12062
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_12063");
} else {
  importDefaultResult = require("module_12064");
}
const result = require("module_12064").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
