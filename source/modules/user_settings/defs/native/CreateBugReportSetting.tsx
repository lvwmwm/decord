// Module ID: 14698
// Function ID: 14699
// Name: toggle
// Dependencies: [706, 708, 9828, 589, 500, 10380, 1236, 14676, 14691, 2]

// Module 14698 (toggle)
import refreshSourceMapCookie from "refreshSourceMapCookie";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.aIkGJD);
  },
  parent: null,
  IconComponent: require("WrenchIcon").WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = require(708) /* setDeveloperOptionSettings */.setDeveloperOptionSettings;
    if (arg0) {
      const result = setDeveloperOptionSettings({ bugReporterEnabled: true });
      importDefault(9828).initialize();
      const obj2 = importDefault(9828);
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      importDefault(9828).terminate(true);
      const obj = importDefault(9828);
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    const items = [refreshSourceMapCookie];
    return require(589) /* initialize */.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: require("useBugReporterExperimentSettingPredicate").useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("showNotification").fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default createToggle;
