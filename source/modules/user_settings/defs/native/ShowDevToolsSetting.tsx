// Module ID: 14292
// Function ID: 107969
// Name: pressable
// Dependencies: []

// Module 14292 (pressable)
const _module = require(dependencyMap[1]);
const pressable = _module.createPressable({
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: require(dependencyMap[2]).StaffBadgeIcon,
  onPress: require(dependencyMap[3]).navigateToDevTools,
  usePredicate: require(dependencyMap[4]).useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [...Object.values(closure_0(closure_1[0]).DevToolsScreens), ...Object.values(closure_0(closure_1[0]).PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
