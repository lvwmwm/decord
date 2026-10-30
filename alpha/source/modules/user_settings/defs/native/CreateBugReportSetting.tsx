// Module ID: 17703
// Function ID: 17704
// Name: CreateBugReportSetting
// Dependencies: [1358, 1359, 11108, 504, 1376, 11505, 1114, 17486, 17696, 2]

// Module 17703 (CreateBugReportSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1359 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import BugReportManagerDefault from "BugReportManager" /* 11108 */;
import WrenchIcon from "WrenchIcon" /* 17486 */;
import BugReporterSetting from "BugReporterSetting" /* 17696 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1358 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.aIkGJD);
  },
  parent: null,
  IconComponent: WrenchIcon.WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = DeveloperOptionsActionCreators.setDeveloperOptionSettings;
    DeveloperOptionsActionCreators;
    const tmp3 = arg0;
    if (tmp3) {
      const result = setDeveloperOptionSettings({ bugReporterEnabled: true });
      const obj2 = BugReportManagerDefault;
      obj2.initialize();
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      const obj = BugReportManagerDefault;
      obj.terminate(true);
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    let isBugReporterEnabled;
    const items = [DeveloperOptionsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    PlatformUtils;
    return "Photo permission is required";
  },
  usePredicate: BugReporterSetting.useBugReporterExperimentSettingPredicate
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default toggle;
