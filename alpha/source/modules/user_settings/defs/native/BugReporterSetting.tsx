// Module ID: 17696
// Function ID: 17697
// Name: BugReporterSetting
// Dependencies: [11068, 6738, 11069, 1995, 11109, 11505, 1114, 12527, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 17696 (BugReporterSetting)
import intl2 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 11109 */;
import BugIcon from "BugIcon" /* 12527 */;
import BugReportStore from "BugReportStore" /* 11068 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
      obj2.pushLazy(asyncRequire(11069, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };
