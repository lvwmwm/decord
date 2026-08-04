// Module ID: 11912
// Function ID: 11913
// Dependencies: [10240, 11913, 11914, 2]

// Module 11912
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11913");
} else {
  importDefaultResult = require("module_11914");
}
const result = require("module_11914").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
