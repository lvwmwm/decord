// Module ID: 17075
// Function ID: 17076
// Name: CreateBugReportSetting
// Dependencies: [1360, 1361, 11089, 504, 1378, 11817, 1112, 16858, 17062, 2]

// Module 17075 (CreateBugReportSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1361 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import BugReportManagerDefault from "BugReportManager" /* 11089 */;
import WrenchIcon from "WrenchIcon" /* 16858 */;
import BugReporterSetting from "BugReporterSetting" /* 17062 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1360 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
