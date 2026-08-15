// Module ID: 11813
// Function ID: 11814
// Dependencies: [10556, 11814, 11815, 2]

// Module 11813
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11814");
} else {
  importDefaultResult = require("module_11815");
}
const result = require("module_11815").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
