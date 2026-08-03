// Module ID: 14631
// Function ID: 14632
// Name: toggle
// Dependencies: [706, 708, 10511, 589, 500, 10272, 1236, 14609, 14624, 2]

// Module 14631 (toggle)
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
      importDefault(10511).initialize();
      const obj2 = importDefault(10511);
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      importDefault(10511).terminate(true);
      const obj = importDefault(10511);
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
