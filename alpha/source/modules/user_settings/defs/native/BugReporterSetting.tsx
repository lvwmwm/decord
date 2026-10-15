// Module ID: 16704
// Function ID: 16705
// Name: BugReporterSetting
// Dependencies: [13463, 6150, 13464, 2000, 558, 576, 13478, 10991, 1126, 12015, 2]

// Module 16704 (BugReporterSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import BugIcon from "BugIcon" /* 12015 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 13478 */;
import BugReportStore from "BugReportStore" /* 13463 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
      obj2.pushLazy(asyncRequire(13464, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: tmp2
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export const useBugReporterExperimentSettingPredicate = tmp2;
