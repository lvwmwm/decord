// Module ID: 18080
// Function ID: 18081
// Name: BugReporterSetting
// Dependencies: [11219, 6799, 11220, 2118, 11260, 11685, 1113, 12400, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 18080 (BugReporterSetting)
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 11260 */;
import BugIcon from "BugIcon" /* 12400 */;
import BugReportStore from "BugReportStore" /* 11219 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

function useBugReporterExperimentSettingPredicate() {
  const obj = BugReporterExperimentDefault;
  return obj.useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
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
      obj2.pushLazy(asyncRequire(11220, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };
