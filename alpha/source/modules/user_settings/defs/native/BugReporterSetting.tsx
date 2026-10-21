// Module ID: 16943
// Function ID: 16944
// Name: BugReporterSetting
// Dependencies: [13687, 6651, 13688, 2002, 558, 576, 13701, 11155, 1128, 12216, 2]

// Module 16943 (BugReporterSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import BugIcon from "BugIcon" /* 12216 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 13701 */;
import BugReportStore from "BugReportStore" /* 13687 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBugReporterExperimentSettingPredicate() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "native-settings" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const obj3 = BugReporterExperimentDefault;
  return obj3.useConfig(first).hasBugReporterAccess;
}) : (function useBugReporterExperimentSettingPredicate() {
  const obj = BugReporterExperimentDefault;
  return obj.useConfig({ location: "native-settings" }).hasBugReporterAccess;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: BugIcon.BugIcon,
  onPress: function handleBugReporterSettingPress() {
    const obj = BugReportStore;
    if (!BugReportStore.getField("isReportOpen")) {
      obj.setState({ isReportOpen: true });
      const obj2 = ModalActionCreatorsDefault;
      obj2.pushLazy(asyncRequire(13688, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: tmp2
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export const useBugReporterExperimentSettingPredicate = tmp2;
