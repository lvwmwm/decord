// Module ID: 18278
// Function ID: 18279
// Name: BugReporterSetting
// Dependencies: [11038, 6785, 11039, 2118, 11080, 12317, 1113, 13222, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 18278 (BugReporterSetting)
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 11080 */;
import BugIcon from "BugIcon" /* 13222 */;
import BugReportStore from "BugReportStore" /* 11038 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
      obj2.pushLazy(asyncRequire(11039, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };
