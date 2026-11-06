// Module ID: 18027
// Function ID: 18028
// Name: CreateBugReportSetting
// Dependencies: [1359, 1360, 11277, 504, 1377, 11703, 1113, 17826, 18020, 2]

// Module 18027 (CreateBugReportSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1360 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import BugReportManagerDefault from "BugReportManager" /* 11277 */;
import WrenchIcon from "WrenchIcon" /* 17826 */;
import BugReporterSetting from "BugReporterSetting" /* 18020 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1359 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
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
