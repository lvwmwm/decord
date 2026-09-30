// Module ID: 15548
// Function ID: 15549
// Name: BugReporterSetting
// Dependencies: [9845, 5069, 9846, 1981, 9877, 11211, 1115, 15549, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 15548 (BugReporterSetting)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 9877 */;
import BugReportStore from "BugReportStore" /* 9845 */;

require = fn;
function useBugReporterExperimentSettingPredicate() {
  return BugReporterExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
const SettingBuilders = fn(11211);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: fn(15549).BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!BugReportStore.getField("isReportOpen")) {
      BugReportStore.setState({ isReportOpen: true });
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9846, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };
