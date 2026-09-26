// Module ID: 16066
// Function ID: 16067
// Name: BuildOverrideActiveSetting
// Dependencies: [11717, 21, 14889, 504, 12072, 15123, 16060, 11754, 15428, 2]

// Module 16066 (BuildOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 12072 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14889 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15123 */;
import DevToolsContent from "DevToolsContent" /* 16060 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11717 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11754);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: fn(15428).RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    const items = [BuildOverrideStore];
    const stateFromStores = initialize.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    });
    let tmp4;
    if (null != stateFromStores) {
      const obj2 = { label: "Build override: ", value: stateFromStores };
      tmp4 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: stateFromStores });
    }
    return tmp4;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const items = [BuildOverrideStore];
    return null != initialize.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    }) && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleBuildOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default pressable;
