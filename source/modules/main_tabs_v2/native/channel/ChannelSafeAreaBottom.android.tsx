// Module ID: 12061
// Function ID: 12062
// Dependencies: [10284, 12062, 12063, 2]

// Module 12061
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_12062");
} else {
  importDefaultResult = require("module_12063");
}
const result = require("module_12063").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
