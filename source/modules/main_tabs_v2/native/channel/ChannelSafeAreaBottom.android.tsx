// Module ID: 12095
// Function ID: 12096
// Dependencies: [10907, 12096, 12097, 2]

// Module 12095
import set from "set" /* 2 */;
import _modDef12096 from "module_12096" /* 12096 */;
import _modDef12097 from "module_12097" /* 12097 */;
import apexExperiment from "apexExperiment" /* 10907 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef12096;
} else {
  importDefaultResult = _modDef12097;
}
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
