// Module ID: 15672
// Function ID: 15673
// Name: toggle
// Dependencies: [703, 705, 10143, 586, 1234, 11400, 1233, 15486, 15661, 2]

// Module 15672 (toggle)
import initialize from "initialize" /* 586 */;
import setDeveloperOptionSettings2 from "setDeveloperOptionSettings" /* 705 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import showNotificationDefault from "showNotification" /* 10143 */;
import closure_3 from "refreshSourceMapCookie" /* 703 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aIkGJD);
  },
  parent: null,
  IconComponent: require("WrenchIcon").WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = setDeveloperOptionSettings2.setDeveloperOptionSettings;
    if (arg0) {
      const result = setDeveloperOptionSettings({ bugReporterEnabled: true });
      showNotificationDefault.initialize();
      const obj2 = showNotificationDefault;
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      showNotificationDefault.terminate(true);
      const obj = showNotificationDefault;
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: require("useBugReporterExperimentSettingPredicate").useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default createToggle;
