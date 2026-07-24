// Module ID: 14464
// Function ID: 110484
// Name: toggle
// Dependencies: [683, 685, 10363, 566, 477, 10127, 1212, 14442, 14457, 2]

// Module 14464 (toggle)
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
      importDefault(10363).initialize();
      const obj3 = importDefault(10363);
    } else {
      obj.bugReporterEnabled = false;
      const result1 = setDeveloperOptionSettings(obj);
      importDefault(10363).terminate(true);
      const obj2 = importDefault(10363);
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
