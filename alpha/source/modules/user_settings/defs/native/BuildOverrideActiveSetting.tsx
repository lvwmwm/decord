// Module ID: 16104
// Function ID: 16105
// Name: BuildOverrideActiveSetting
// Dependencies: [19, 10483, 21, 14808, 558, 576, 11341, 504, 15098, 5377, 16098, 1126, 2206, 5379, 10663, 15229, 2]

// Module 16104 (BuildOverrideActiveSetting)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import _modDef2206 from "module_2206" /* 2206 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11341 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14808 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15098 */;
import RefreshIcon from "RefreshIcon" /* 15229 */;
import react from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10483 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const get_initialized = tmp(504);
function handleBuildOverrideActivePress() {
  const obj = DevToolsNavigator;
  obj.navigateToDevTools({ screenKey: "buildOverride" });
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBuildOverrideActive() {
  let currentBuildOverride;
  let tmp4;
  let tmp5;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BuildOverrideStore];
    const fn = function s() {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let tmp;
      if (overrides != null) {
        tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
      }
      return tmp;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useBuildOverrideActive() {
  let currentBuildOverride;
  const items = [BuildOverrideStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
    }
    return tmp;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBuildOverrideActiveDescription() {
  let intl;
  let intl2;
  let intl3;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_7();
  const obj2 = useIsStaffOrDeveloperSettingPredicate;
  const staffOrDeveloperSettingPredicate = obj2.useStaffOrDeveloperSettingPredicate();
  if (cResult[0] === tmp4) {
    let tmp6;
    if (cResult[1] === staffOrDeveloperSettingPredicate) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  let tmp8Result;
  if (null != tmp4) {
    const Stack = tmp(5377).Stack;
    const obj3 = { label: "" + intl.string(_modDef2206.d11XdP) + " ", value: tmp4.id };
    const DevToolsContentSubLabel = tmp(16098).DevToolsContentSubLabel;
    intl = tmp(1126).intl;
    const _HermesInternal = HermesInternal;
    const items = [React3(DevToolsContentSubLabel, obj3), , ];
    const obj4 = { text: intl2.string(intl4.t.tX4xrt), variant: "secondary", onPress: build_overrides_BuildOverrideUtils.clearBuildOverride };
    const Button = tmp(5379).Button;
    intl2 = tmp(1126).intl;
    items[1] = React3(Button, obj4);
    let tmp9Result = staffOrDeveloperSettingPredicate;
    const tmp10 = importDefault;
    const tmp8 = hasOwnProperty;
    const tmp9 = React3;
    if (tmp9Result) {
      const obj5 = { text: intl3.string(tmp10(2206).VBPcR9), variant: "secondary", onPress: handleBuildOverrideActivePress };
      const Button2 = tmp(5379).Button;
      intl3 = tmp(1126).intl;
      tmp9Result = tmp9(Button2, obj5);
    }
    const obj6 = { children: items };
    items[2] = tmp9Result;
    tmp8Result = tmp8(Stack, obj6);
  }
  cResult[0] = tmp4;
  cResult[1] = staffOrDeveloperSettingPredicate;
  cResult[2] = tmp8Result;
  tmp6 = tmp8Result;
}) : (function useBuildOverrideActiveDescription() {
  let intl;
  let intl2;
  let intl3;
  const tmp = closure_7();
  const obj = useIsStaffOrDeveloperSettingPredicate;
  const staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
  let tmp6Result;
  if (null != tmp) {
    const Stack = tmp2(5377).Stack;
    const obj2 = { label: "" + intl.string(_modDef2206.d11XdP) + " ", value: tmp.id };
    const DevToolsContentSubLabel = tmp2(16098).DevToolsContentSubLabel;
    intl = tmp2(1126).intl;
    const _HermesInternal = HermesInternal;
    const items = [React3(DevToolsContentSubLabel, obj2), , ];
    const obj3 = { text: intl2.string(intl4.t.tX4xrt), variant: "secondary", onPress: build_overrides_BuildOverrideUtils.clearBuildOverride };
    const Button = tmp2(5379).Button;
    intl2 = tmp2(1126).intl;
    items[1] = React3(Button, obj3);
    let tmp7Result = staffOrDeveloperSettingPredicate;
    const tmp6 = hasOwnProperty;
    const tmp7 = React3;
    const tmp8 = importDefault;
    if (tmp7Result) {
      const obj4 = { text: intl3.string(tmp8(2206).VBPcR9), variant: "secondary", onPress: handleBuildOverrideActivePress };
      const Button2 = tmp2(5379).Button;
      intl3 = tmp2(1126).intl;
      tmp7Result = tmp7(Button2, obj4);
    }
    const obj5 = { children: items };
    items[2] = tmp7Result;
    tmp6Result = tmp6(Stack, obj5);
  }
  return tmp6Result;
});
function useHasBuildOverrideActive() {
  return null != closure_7();
}
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef2206.jBvMiO);
  },
  parent: null,
  IconComponent: RefreshIcon.RefreshIcon,
  useDescription: tmp5,
  usePredicate: useHasBuildOverrideActive
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createStaticResult;
