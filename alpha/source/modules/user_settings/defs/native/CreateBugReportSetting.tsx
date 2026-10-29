// Module ID: 17632
// Function ID: 17633
// Name: CreateBugReportSetting
// Dependencies: [1369, 1370, 14264, 558, 576, 504, 1381, 11302, 1125, 17432, 17625, 2]

// Module 17632 (CreateBugReportSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1370 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import BugReportManagerDefault from "BugReportManager" /* 14264 */;
import WrenchIcon from "WrenchIcon" /* 17432 */;
import BugReporterSetting from "BugReporterSetting" /* 17625 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreateBugReportSettingToggleValue() {
  let isBugReporterEnabled;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperOptionsStore];
    const fn = function o() {
      return isBugReporterEnabled.isBugReporterEnabled;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useCreateBugReportSettingToggleValue() {
  let isBugReporterEnabled;
  const items = [DeveloperOptionsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
});
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
  useValue: tmp2,
  useDescription: function useCreateBugReportSettingDescription() {
    PlatformUtils;
    return "Photo permission is required";
  },
  usePredicate: BugReporterSetting.useBugReporterExperimentSettingPredicate
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default toggle;
