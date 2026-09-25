// Module ID: 15328
// Function ID: 15329
// Name: CreateBugReportSetting
// Dependencies: [1346, 1347, 9664, 504, 1364, 10993, 1115, 15089, 15315, 2]

// Module 15328 (CreateBugReportSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1347 */;
import BugReportManagerDefault from "BugReportManager" /* 9664 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1346 */;

require = fn;
const SettingBuilders = fn(10993);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aIkGJD);
  },
  parent: null,
  IconComponent: fn(15089).WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = DeveloperOptionsActionCreators.setDeveloperOptionSettings;
    if (arg0) {
      const result = setDeveloperOptionSettings({ bugReporterEnabled: true });
      BugReportManagerDefault.initialize();
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      BugReportManagerDefault.terminate(true);
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    const items = [DeveloperOptionsStore];
    return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: fn(15315).useBugReporterExperimentSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default toggle;
