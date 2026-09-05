// Module ID: 12642
// Function ID: 12643
// Dependencies: [11350, 12643, 12644, 2]

// Module 12642
import set from "set" /* 2 */;
import _modDef12643 from "module_12643" /* 12643 */;
import _modDef12644 from "module_12644" /* 12644 */;
import apexExperiment from "apexExperiment" /* 11350 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef12643;
} else {
  importDefaultResult = _modDef12644;
}
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
