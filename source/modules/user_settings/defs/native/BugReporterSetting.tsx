// Module ID: 14468
// Function ID: 110576
// Name: useBugReporterExperimentSettingPredicate
// Dependencies: [10282, 4338, 10283, 1935, 10297, 10059, 1212, 14469, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 14468 (useBugReporterExperimentSettingPredicate)
import zustandStore from "zustandStore";
import createToggle from "createToggle";

const require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return importDefault(10297).useConfig({ location: "native-settings" }).hasBugReporterAccess;
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
      importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(10283, dependencyMap.paths));
      const obj2 = importDefault(4338);
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("handleClose").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };
