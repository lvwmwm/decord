// Module ID: 14852
// Function ID: 14853
// Name: toggle
// Dependencies: [706, 708, 9950, 589, 500, 10421, 1236, 14830, 14845, 2]

// Module 14852 (toggle)
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
      importDefault(9950).initialize();
      const obj2 = importDefault(9950);
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      importDefault(9950).terminate(true);
      const obj = importDefault(9950);
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
