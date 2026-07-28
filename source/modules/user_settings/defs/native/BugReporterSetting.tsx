// Module ID: 14513
// Function ID: 110754
// Name: useBugReporterExperimentSettingPredicate
// Dependencies: [10323, 4372, 10324, 1935, 10338, 10099, 1212, 14514, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 14513 (useBugReporterExperimentSettingPredicate)
import zustandStore from "zustandStore";
import createToggle from "createToggle";

const require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return importDefault(10338).useConfig({ location: "native-settings" }).hasBugReporterAccess;
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
      importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(10324, dependencyMap.paths));
      const obj2 = importDefault(4372);
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("handleClose").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };
