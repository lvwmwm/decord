// Module ID: 14291
// Function ID: 107958
// Name: useBuildOverrideActive
// Dependencies: []

// Module 14291 (useBuildOverrideActive)
function useBuildOverrideActive() {
  const items = [closure_2];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let id;
    if (null != overrides) {
      if (null != overrides[closure_0(undefined, closure_1[4]).DEVICE_FIELD]) {
        id = tmp4.id;
      }
    }
    return id;
  });
}
let closure_2 = importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[7]);
obj = {
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: arg1(dependencyMap[8]).RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    const tmp = useBuildOverrideActive();
    let tmp2;
    if (null != tmp) {
      const obj = { label: "Build override: ", value: tmp };
      tmp2 = jsx(arg1(dependencyMap[6]).DevToolsContentSubLabel, obj);
    }
    return tmp2;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = arg1(dependencyMap[5]).useStaffOrDeveloperSettingPredicate();
    const obj = arg1(dependencyMap[5]);
    return null != useBuildOverrideActive() && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleBuildOverrideActivePress() {
    arg1(dependencyMap[2]).navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default pressable;
