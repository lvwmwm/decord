// Module ID: 14773
// Function ID: 14774
// Name: useBugReporterExperimentSettingPredicate
// Dependencies: [9871, 4509, 9872, 2007, 9901, 10452, 1236, 14774, 2]
// Exports: useBugReporterExperimentSettingPredicate

// Module 14773 (useBugReporterExperimentSettingPredicate)
import zustandStore from "zustandStore";
import createToggle from "createToggle";

const require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return importDefault(9901).useConfig({ location: "native-settings" }).hasBugReporterAccess;
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
      importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(9872, dependencyMap.paths));
      const obj2 = importDefault(4509);
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("handleClose").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };
