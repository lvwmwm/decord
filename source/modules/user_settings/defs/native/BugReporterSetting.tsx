// Module ID: 14293
// Function ID: 107973
// Name: useBugReporterExperimentSettingPredicate
// Dependencies: [33554484, 1929379840, 13631, 9880, 2, 1960053, 167168, 2582272, 3661824]
// Exports: useBugReporterExperimentSettingPredicate

// Module 14293 (useBugReporterExperimentSettingPredicate)
function useBugReporterExperimentSettingPredicate() {
  return importDefault(dependencyMap[4]).useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t./tZh0A);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[7]).BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!store.getField("isReportOpen")) {
      const obj = { isReportOpen: true };
      store.setState(obj);
      importDefault(dependencyMap[1]).pushLazy(arg1(dependencyMap[3])(dependencyMap[2], dependencyMap.paths));
      const obj2 = importDefault(dependencyMap[1]);
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };
