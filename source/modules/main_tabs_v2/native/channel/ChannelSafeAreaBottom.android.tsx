// Module ID: 12574
// Function ID: 12575
// Dependencies: [11282, 12575, 12576, 2]

// Module 12574
import set from "set" /* 2 */;
import _modDef12575 from "module_12575" /* 12575 */;
import _modDef12576 from "module_12576" /* 12576 */;
import apexExperiment from "apexExperiment" /* 11282 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef12575;
} else {
  importDefaultResult = _modDef12576;
}
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
