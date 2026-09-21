// Module ID: 16052
// Function ID: 16053
// Name: BuildOverrideActiveSetting
// Dependencies: [11557, 21, 14847, 558, 568, 11918, 504, 15109, 16046, 11594, 15414, 2]

// Module 16052 (BuildOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11918 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14847 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15109 */;
import DevToolsContent from "DevToolsContent" /* 16046 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11557 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BuildOverrideStore];
    const fn = function l() {
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
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [BuildOverrideStore];
  return initialize.useStateFromStores(items, () => {
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
});
fn(558);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  return null != closure_4() && staffOrDeveloperSettingPredicate;
}) : (() => {
  const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  return null != closure_4() && staffOrDeveloperSettingPredicate;
});
const SettingBuilders = fn(11594);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp4 = closure_4();
  if (cResult[0] !== tmp4) {
    let tmp7;
    if (null != tmp4) {
      const obj2 = { label: "Build override: ", value: tmp4 };
      tmp7 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp4 });
    }
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const tmp = closure_4();
  let tmp2;
  if (null != tmp) {
    const obj = { label: "Build override: ", value: tmp };
    tmp2 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp });
  }
  return tmp2;
});
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: fn(15414).RefreshIcon,
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    const tmp4 = closure_4();
    if (cResult[0] !== tmp4) {
      let tmp7;
      if (null != tmp4) {
        const obj2 = { label: "Build override: ", value: tmp4 };
        tmp7 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp4 });
      }
      cResult[0] = tmp4;
      cResult[1] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  }) : (() => {
    const tmp = closure_4();
    let tmp2;
    if (null != tmp) {
      const obj = { label: "Build override: ", value: tmp };
      tmp2 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp });
    }
    return tmp2;
  }),
  usePredicate: tmp2,
  onPress: function handleBuildOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default pressable;
