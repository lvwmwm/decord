// Module ID: 16050
// Function ID: 16051
// Name: BugReporterSetting
// Dependencies: [13044, 4993, 13045, 1984, 558, 568, 13059, 11630, 1119, 16051, 2]

// Module 16050 (BugReporterSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 13059 */;
import BugReportStore from "BugReportStore" /* 13044 */;

require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "native-settings" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return BugReporterExperimentDefault.useConfig(first).hasBugReporterAccess;
}) : (() => BugReporterExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess);
const SettingBuilders = fn(11630);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: fn(16051).BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!BugReportStore.getField("isReportOpen")) {
      BugReportStore.setState({ isReportOpen: true });
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13045, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: tmp2
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export const useBugReporterExperimentSettingPredicate = tmp2;
