// Module ID: 12147
// Function ID: 12148
// Dependencies: [10949, 12148, 12149, 2]

// Module 12147
import set from "set" /* 2 */;
import _modDef12148 from "module_12148" /* 12148 */;
import _modDef12149 from "module_12149" /* 12149 */;
import apexExperiment from "apexExperiment" /* 10949 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef12148;
} else {
  importDefaultResult = _modDef12149;
}
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
