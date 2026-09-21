// Module ID: 16051
// Function ID: 16052
// Name: BugReporterSetting
// Dependencies: [10441, 4959, 10442, 1980, 10473, 11725, 1115, 16052, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 16051 (BugReporterSetting)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 10473 */;
import BugReportStore from "BugReportStore" /* 10441 */;

require = fn;
function useBugReporterExperimentSettingPredicate() {
  return BugReporterExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
const SettingBuilders = fn(11725);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: fn(16052).BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!BugReportStore.getField("isReportOpen")) {
      BugReportStore.setState({ isReportOpen: true });
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10442, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };
