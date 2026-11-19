// Module ID: 17235
// Function ID: 17236
// Name: BugReporterSetting
// Dependencies: [11107, 6308, 11108, 2121, 11148, 11875, 1113, 17236, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 17235 (BugReporterSetting)
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 11148 */;
import BugIcon from "BugIcon" /* 17236 */;
import BugReportStore from "BugReportStore" /* 11107 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
      obj2.pushLazy(asyncRequire(11108, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };
