// Module ID: 14457
// Function ID: 110449
// Name: useBugReporterExperimentSettingPredicate
// Dependencies: [10349, 4337, 10350, 1934, 10364, 10127, 1212, 14458, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 14457 (useBugReporterExperimentSettingPredicate)
import zustandStore from "zustandStore";
import createToggle from "createToggle";

const require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return importDefault(10364).useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: require("BugIcon").BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!store.getField("isReportOpen")) {
      const obj = { isReportOpen: true };
      store.setState(obj);
      importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(10350, dependencyMap.paths));
      const obj2 = importDefault(4337);
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("handleClose").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };
