// Module ID: 12416
// Function ID: 12417
// Dependencies: [11211, 12417, 12418, 2]

// Module 12416
import set from "set" /* 2 */;
import _modDef12417 from "module_12417" /* 12417 */;
import _modDef12418 from "module_12418" /* 12418 */;
import apexExperiment from "apexExperiment" /* 11211 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef12417;
} else {
  importDefaultResult = _modDef12418;
}
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
