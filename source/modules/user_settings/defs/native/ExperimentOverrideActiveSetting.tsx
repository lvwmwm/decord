// Module ID: 14280
// Function ID: 107895
// Name: useExperimentOverrideActiveCount
// Dependencies: []

// Module 14280 (useExperimentOverrideActiveCount)
function useExperimentOverrideActiveCount() {
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_3];
  return stateFromStores + arg1(dependencyMap[4]).useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[7]);
obj = {
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: arg1(dependencyMap[8]).BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    const obj = { label: "Experiments overridden: ", value: useExperimentOverrideActiveCount().toString() };
    return jsx(arg1(dependencyMap[5]).DevToolsContentSubLabel, obj);
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = arg1(dependencyMap[6]).useStaffOrDeveloperSettingPredicate();
    const obj = arg1(dependencyMap[6]);
    return useExperimentOverrideActiveCount() > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    arg1(dependencyMap[3]).navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default pressable;
