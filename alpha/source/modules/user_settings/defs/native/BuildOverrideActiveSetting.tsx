// Module ID: 17351
// Function ID: 17352
// Name: BuildOverrideActiveSetting
// Dependencies: [19, 11866, 21, 17156, 504, 12267, 16298, 6084, 17345, 1112, 2355, 5610, 7910, 10409, 11914, 14025, 2]

// Module 17351 (BuildOverrideActiveSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1112 */;
import _modDef2355 from "module_2355" /* 2355 */;
import SettingsIcon from "SettingsIcon" /* 10409 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 12267 */;
import RefreshIcon from "RefreshIcon" /* 14025 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16298 */;
import openBuildOverridesSettings from "openBuildOverridesSettings" /* 17156 */;
import react from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11866 */;
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const f112090 = () => {
  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
  let tmp;
  if (overrides != null) {
    tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
  }
  return tmp;
};
function handleBuildOverrideActivePress() {
  const obj = openBuildOverridesSettings;
  const result = obj.openBuildOverridesSettings();
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(_modDef2355.jBvMiO);
  },
  parent: null,
  IconComponent: RefreshIcon.RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    let intl;
    let intl2;
    const items = [BuildOverrideStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, f112090);
    const obj2 = useIsStaffOrDeveloperSettingPredicate;
    const staffOrDeveloperSettingPredicate = obj2.useStaffOrDeveloperSettingPredicate();
    let tmp6Result;
    if (null != stateFromStores) {
      const Stack = tmp(6084).Stack;
      const obj3 = { label: "" + intl.string(_modDef2355.d11XdP) + " ", value: stateFromStores.id };
      const DevToolsContentSubLabel = tmp(17345).DevToolsContentSubLabel;
      intl = tmp(1112).intl;
      const _HermesInternal = HermesInternal;
      const items1 = [React3(DevToolsContentSubLabel, obj3), ];
      const Stack2 = tmp(6084).Stack;
      const obj4 = { text: intl2.string(intl3.t.tX4xrt), variant: "secondary", onPress: build_overrides_BuildOverrideUtils.clearBuildOverride, grow: true, shrink: true };
      const Button = tmp(5610).Button;
      intl2 = tmp(1112).intl;
      const items2 = [React3(Button, obj4), ];
      let tmp7Result = staffOrDeveloperSettingPredicate;
      if (tmp7Result) {
        const obj5 = { icon: React3(SettingsIcon.SettingsIcon, {}), accessibilityLabel: "Build Overrides", variant: "secondary", onPress: handleBuildOverrideActivePress };
        const IconButton = tmp(7910).IconButton;
        tmp7Result = tmp7(IconButton, obj5);
      }
      const obj6 = { spacing: 4, children: items1 };
      const obj7 = { direction: "horizontal", align: "center", spacing: 8, children: items2 };
      items2[1] = tmp7Result;
      items1[1] = hasOwnProperty(Stack2, obj7);
      tmp6Result = tmp6(Stack, obj6);
    }
    return tmp6Result;
  },
  usePredicate: function useHasBuildOverrideActive() {
    let currentBuildOverride;
    const items = [BuildOverrideStore];
    const obj = get_initialized;
    return null != obj.useStateFromStores(items, f112090);
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createStaticResult;
