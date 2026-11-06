// Module ID: 18026
// Function ID: 18027
// Name: BuildOverrideActiveSetting
// Dependencies: [19, 11520, 21, 16692, 504, 13407, 17005, 6185, 18024, 1113, 2267, 5788, 11703, 12393, 2]

// Module 18026 (BuildOverrideActiveSetting)
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1113 */;
import _modDef2267 from "module_2267" /* 2267 */;
import RefreshIcon from "RefreshIcon" /* 12393 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 13407 */;
import DevToolsNavigator from "DevToolsNavigator" /* 16692 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 17005 */;
import react from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11520 */;
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const f114268 = () => {
  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
  let tmp;
  if (overrides != null) {
    tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
  }
  return tmp;
};
function handleBuildOverrideActivePress() {
  const obj = DevToolsNavigator;
  obj.navigateToDevTools({ screenKey: "buildOverride" });
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef2267.jBvMiO);
  },
  parent: null,
  IconComponent: RefreshIcon.RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    let intl;
    let intl2;
    let intl3;
    const items = [BuildOverrideStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, f114268);
    const obj2 = useIsStaffOrDeveloperSettingPredicate;
    const staffOrDeveloperSettingPredicate = obj2.useStaffOrDeveloperSettingPredicate();
    let tmp6Result;
    if (null != stateFromStores) {
      const Stack = tmp(6185).Stack;
      const obj3 = { label: "" + intl.string(_modDef2267.d11XdP) + " ", value: stateFromStores.id };
      const DevToolsContentSubLabel = tmp(18024).DevToolsContentSubLabel;
      intl = tmp(1113).intl;
      const _HermesInternal = HermesInternal;
      const items1 = [React3(DevToolsContentSubLabel, obj3), , ];
      const obj4 = { text: intl2.string(intl4.t.tX4xrt), variant: "secondary", onPress: build_overrides_BuildOverrideUtils.clearBuildOverride };
      const Button = tmp(5788).Button;
      intl2 = tmp(1113).intl;
      items1[1] = React3(Button, obj4);
      let tmp7Result = staffOrDeveloperSettingPredicate;
      const tmp6 = hasOwnProperty;
      const tmp7 = React3;
      const tmp8 = importDefault;
      if (tmp7Result) {
        const obj5 = { text: intl3.string(tmp8(2267).VBPcR9), variant: "secondary", onPress: handleBuildOverrideActivePress };
        const Button2 = tmp(5788).Button;
        intl3 = tmp(1113).intl;
        tmp7Result = tmp7(Button2, obj5);
      }
      const obj6 = { children: items1 };
      items1[2] = tmp7Result;
      tmp6Result = tmp6(Stack, obj6);
    }
    return tmp6Result;
  },
  usePredicate: function useHasBuildOverrideActive() {
    let currentBuildOverride;
    const items = [BuildOverrideStore];
    const obj = get_initialized;
    return null != obj.useStateFromStores(items, f114268);
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createStaticResult;
