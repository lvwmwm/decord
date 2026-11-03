// Module ID: 17902
// Function ID: 17903
// Name: BuildOverrideActiveSetting
// Dependencies: [19, 11499, 21, 16579, 504, 13328, 16889, 6147, 17900, 1113, 2270, 5754, 11677, 12355, 2]

// Module 17902 (BuildOverrideActiveSetting)
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1113 */;
import _modDef2270 from "module_2270" /* 2270 */;
import RefreshIcon from "RefreshIcon" /* 12355 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 13328 */;
import DevToolsNavigator from "DevToolsNavigator" /* 16579 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16889 */;
import react from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11499 */;
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const f112708 = () => {
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
    return intl.string(_modDef2270.jBvMiO);
  },
  parent: null,
  IconComponent: RefreshIcon.RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    let intl;
    let intl2;
    let intl3;
    const items = [BuildOverrideStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, f112708);
    const obj2 = useIsStaffOrDeveloperSettingPredicate;
    const staffOrDeveloperSettingPredicate = obj2.useStaffOrDeveloperSettingPredicate();
    let tmp6Result;
    if (null != stateFromStores) {
      const Stack = tmp(6147).Stack;
      const obj3 = { label: "" + intl.string(_modDef2270.d11XdP) + " ", value: stateFromStores.id };
      const DevToolsContentSubLabel = tmp(17900).DevToolsContentSubLabel;
      intl = tmp(1113).intl;
      const _HermesInternal = HermesInternal;
      const items1 = [React3(DevToolsContentSubLabel, obj3), , ];
      const obj4 = { text: intl2.string(intl4.t.tX4xrt), variant: "secondary", onPress: build_overrides_BuildOverrideUtils.clearBuildOverride };
      const Button = tmp(5754).Button;
      intl2 = tmp(1113).intl;
      items1[1] = React3(Button, obj4);
      let tmp7Result = staffOrDeveloperSettingPredicate;
      const tmp6 = hasOwnProperty;
      const tmp7 = React3;
      const tmp8 = importDefault;
      if (tmp7Result) {
        const obj5 = { text: intl3.string(tmp8(2270).VBPcR9), variant: "secondary", onPress: handleBuildOverrideActivePress };
        const Button2 = tmp(5754).Button;
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
    return null != obj.useStateFromStores(items, f112708);
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createStaticResult;
