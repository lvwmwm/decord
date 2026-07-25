// Module ID: 14475
// Function ID: 110611
// Name: toggle
// Dependencies: [683, 685, 10296, 566, 477, 10059, 1212, 14453, 14468, 2]

// Module 14475 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.aIkGJD);
  },
  parent: null,
  IconComponent: require("WrenchIcon").WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = require(685) /* setDeveloperOptionSettings */.setDeveloperOptionSettings;
    const obj = {};
    if (arg0) {
      obj.bugReporterEnabled = true;
      const result = setDeveloperOptionSettings(obj);
      importDefault(10296).initialize();
      const obj3 = importDefault(10296);
    } else {
      obj.bugReporterEnabled = false;
      const result1 = setDeveloperOptionSettings(obj);
      importDefault(10296).terminate(true);
      const obj2 = importDefault(10296);
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: require("useBugReporterExperimentSettingPredicate").useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default createToggle;
