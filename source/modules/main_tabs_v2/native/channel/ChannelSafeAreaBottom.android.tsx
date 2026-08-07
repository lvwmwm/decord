// Module ID: 11932
// Function ID: 11933
// Dependencies: [10259, 11933, 11934, 2]

// Module 11932
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11933");
} else {
  importDefaultResult = require("module_11934");
}
const result = require("module_11934").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
