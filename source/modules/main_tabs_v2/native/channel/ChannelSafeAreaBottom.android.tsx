// Module ID: 11674
// Function ID: 90507
// Dependencies: [10391, 11675, 11676, 2]

// Module 11674
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11675");
} else {
  importDefaultResult = require("module_11676");
}
const result = require("module_11676").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
