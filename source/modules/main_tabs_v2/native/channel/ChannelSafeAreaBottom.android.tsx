// Module ID: 11701
// Function ID: 90745
// Dependencies: [10420, 11702, 11703, 2]

// Module 11701
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11702");
} else {
  importDefaultResult = require("module_11703");
}
const result = require("module_11703").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
