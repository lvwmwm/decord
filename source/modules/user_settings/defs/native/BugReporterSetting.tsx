// Module ID: 15661
// Function ID: 15662
// Name: useBugReporterExperimentSettingPredicate
// Dependencies: [10113, 4731, 10114, 2008, 10144, 11400, 1233, 15662, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 15661 (useBugReporterExperimentSettingPredicate)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;
import apexExperimentDefault from "apexExperiment" /* 10144 */;
import closure_3 from "zustandStore" /* 10113 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return apexExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: require("BugIcon").BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!field.getField("isReportOpen")) {
      field.setState({ isReportOpen: true });
      _modDef4731.pushLazy(asyncRequireImpl(10114, dependencyMap.paths));
      const obj2 = _modDef4731;
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };
