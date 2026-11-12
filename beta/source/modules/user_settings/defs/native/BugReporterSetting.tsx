// Module ID: 18115
// Function ID: 18116
// Name: BugReporterSetting
// Dependencies: [11251, 6831, 11252, 2118, 11292, 11717, 1113, 12432, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 18115 (BugReporterSetting)
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 11292 */;
import BugIcon from "BugIcon" /* 12432 */;
import BugReportStore from "BugReportStore" /* 11251 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
      obj2.pushLazy(asyncRequire(11252, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };
