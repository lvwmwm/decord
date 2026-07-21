// Module ID: 14292
// Function ID: 107965
// Name: toggle
// Dependencies: []

// Module 14292 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.aIkGJD);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[7]).WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = arg1(dependencyMap[1]).setDeveloperOptionSettings;
    const obj = {};
    if (arg0) {
      obj.bugReporterEnabled = true;
      const result = setDeveloperOptionSettings(obj);
      importDefault(tmp[2]).initialize();
      const obj3 = importDefault(tmp[2]);
    } else {
      obj.bugReporterEnabled = false;
      const result1 = setDeveloperOptionSettings(obj);
      importDefault(tmp[2]).terminate(true);
      const obj2 = importDefault(tmp[2]);
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    const items = [closure_3];
    return arg1(dependencyMap[3]).useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: arg1(dependencyMap[8]).useBugReporterExperimentSettingPredicate
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default toggle;
