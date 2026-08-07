// Module ID: 14691
// Function ID: 14692
// Name: useBugReporterExperimentSettingPredicate
// Dependencies: [9799, 4507, 9800, 1988, 9829, 10380, 1236, 14692, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 14691 (useBugReporterExperimentSettingPredicate)
import zustandStore from "zustandStore";
import createToggle from "createToggle";

const require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return importDefault(9829).useConfig({ location: "native-settings" }).hasBugReporterAccess;
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
      importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(9800, dependencyMap.paths));
      const obj2 = importDefault(4507);
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("handleClose").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };
