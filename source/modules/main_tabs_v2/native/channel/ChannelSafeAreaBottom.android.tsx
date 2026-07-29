// Module ID: 11735
// Function ID: 11736
// Dependencies: [10419, 11736, 11737, 2]

// Module 11735
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_11736");
} else {
  importDefaultResult = require("module_11737");
}
const result = require("module_11737").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
