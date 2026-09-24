// Module ID: 16063
// Function ID: 16064
// Name: CreateBugReportSetting
// Dependencies: [1350, 1351, 13058, 558, 568, 504, 1368, 11630, 1119, 15838, 16050, 2]

// Module 16063 (CreateBugReportSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1351 */;
import BugReportManagerDefault from "BugReportManager" /* 13058 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1350 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [DeveloperOptionsStore];
  return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aIkGJD);
  },
  parent: null,
  IconComponent: fn(15838).WrenchIcon,
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
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
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
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [DeveloperOptionsStore];
    return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  }),
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: fn(16050).useBugReporterExperimentSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default toggle;
