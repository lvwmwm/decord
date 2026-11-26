// Module ID: 17200
// Function ID: 17201
// Name: BugReporterSetting
// Dependencies: [11174, 6429, 11175, 2119, 11215, 11942, 1112, 17201, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 17200 (BugReporterSetting)
import intl2 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 11215 */;
import BugIcon from "BugIcon" /* 17201 */;
import BugReportStore from "BugReportStore" /* 11174 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
      obj2.pushLazy(asyncRequire(11175, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };
