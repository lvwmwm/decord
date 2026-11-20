// Module ID: 17074
// Function ID: 17075
// Name: BuildOverrideActiveSetting
// Dependencies: [19, 11774, 21, 16880, 504, 12098, 16021, 5810, 17068, 1112, 2294, 5392, 7471, 10251, 11817, 14246, 2]

// Module 17074 (BuildOverrideActiveSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1112 */;
import _modDef2294 from "module_2294" /* 2294 */;
import SettingsIcon from "SettingsIcon" /* 10251 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 12098 */;
import RefreshIcon from "RefreshIcon" /* 14246 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16021 */;
import openBuildOverridesSettings from "openBuildOverridesSettings" /* 16880 */;
import react from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11774 */;
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const f111131 = () => {
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
    return intl.string(_modDef2294.jBvMiO);
  },
  parent: null,
  IconComponent: RefreshIcon.RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    let intl;
    let intl2;
    const items = [BuildOverrideStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, f111131);
    const obj2 = useIsStaffOrDeveloperSettingPredicate;
    const staffOrDeveloperSettingPredicate = obj2.useStaffOrDeveloperSettingPredicate();
    let tmp6Result;
    if (null != stateFromStores) {
      const Stack = tmp(5810).Stack;
      const obj3 = { label: "" + intl.string(_modDef2294.d11XdP) + " ", value: stateFromStores.id };
      const DevToolsContentSubLabel = tmp(17068).DevToolsContentSubLabel;
      intl = tmp(1112).intl;
      const _HermesInternal = HermesInternal;
      const items1 = [React3(DevToolsContentSubLabel, obj3), ];
      const Stack2 = tmp(5810).Stack;
      const obj4 = { text: intl2.string(intl3.t.tX4xrt), variant: "secondary", onPress: build_overrides_BuildOverrideUtils.clearBuildOverride, grow: true, shrink: true };
      const Button = tmp(5392).Button;
      intl2 = tmp(1112).intl;
      const items2 = [React3(Button, obj4), ];
      let tmp7Result = staffOrDeveloperSettingPredicate;
      if (tmp7Result) {
        const obj5 = { icon: React3(SettingsIcon.SettingsIcon, {}), accessibilityLabel: "Build Overrides", variant: "secondary", onPress: handleBuildOverrideActivePress };
        const IconButton = tmp(7471).IconButton;
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
    return null != obj.useStateFromStores(items, f111131);
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createStaticResult;
