// Module ID: 12200
// Function ID: 12201
// Dependencies: [10392, 12201, 12202, 2]

// Module 12200
import set from "set" /* 2 */;
import _modDef12201 from "module_12201" /* 12201 */;
import _modDef12202 from "module_12202" /* 12202 */;
import apexExperiment from "apexExperiment" /* 10392 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef12201;
} else {
  importDefaultResult = _modDef12202;
}
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
