// Module ID: 14538
// Function ID: 14539
// Name: useBugReporterExperimentSettingPredicate
// Dependencies: [10344, 4395, 10345, 1959, 10359, 10120, 1236, 14539, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 14538 (useBugReporterExperimentSettingPredicate)
import zustandStore from "zustandStore";
import createToggle from "createToggle";

const require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return importDefault(10359).useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: require("BugIcon").BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!field.getField("isReportOpen")) {
      field.setState({ isReportOpen: true });
      importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(10345, dependencyMap.paths));
      const obj2 = importDefault(4395);
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("handleClose").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };
