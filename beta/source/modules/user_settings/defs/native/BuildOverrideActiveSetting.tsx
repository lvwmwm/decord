// Module ID: 15352
// Function ID: 15353
// Name: BuildOverrideActiveSetting
// Dependencies: [10969, 21, 14139, 504, 11267, 14378, 15346, 11006, 14506, 2]

// Module 15352 (BuildOverrideActiveSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11267 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14139 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14378 */;
import RefreshIcon from "RefreshIcon" /* 14506 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10969 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

let tmp;
const DevToolsContent = tmp(15346);
const f101742 = () => {
  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
  let id;
  if (overrides != null) {
    const tmp4 = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
    if (tmp4 != null) {
      id = tmp4.id;
    }
  }
  return id;
};
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: RefreshIcon.RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    const items = [BuildOverrideStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, f101742);
    let tmp4;
    if (null != stateFromStores) {
      tmp4 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: stateFromStores });
    }
    return tmp4;
  },
  usePredicate: function useHasBuildOverrideActive() {
    let currentBuildOverride;
    const obj = useIsStaffOrDeveloperSettingPredicate;
    const staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
    const items = [BuildOverrideStore];
    const obj2 = get_initialized;
    const tmp2 = null != obj2.useStateFromStores(items, f101742) && staffOrDeveloperSettingPredicate;
    return tmp2;
  },
  onPress: function handleBuildOverrideActivePress() {
    const obj = DevToolsNavigator;
    obj.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default pressable;
