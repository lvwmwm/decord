// Module ID: 14519
// Function ID: 110782
// Name: useBuildOverrideActive
// Dependencies: [10444, 33, 13612, 566, 10956, 13852, 13613, 10099, 13618, 2]

// Module 14519 (useBuildOverrideActive)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
function useBuildOverrideActive() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const overrides = outer1_2.getCurrentBuildOverride().overrides;
    let id;
    if (null != overrides) {
      const tmp4 = overrides[outer1_0(undefined, outer1_1[4]).DEVICE_FIELD];
      if (null != tmp4) {
        id = tmp4.id;
      }
    }
    return id;
  });
}
createToggle = {
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: require("RefreshIcon").RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    const tmp = useBuildOverrideActive();
    let tmp2;
    if (null != tmp) {
      const obj = { label: "Build override: ", value: tmp };
      tmp2 = jsx(require(13613) /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Build override: ", value: tmp });
    }
    return tmp2;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = require(13852) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = require(13852) /* useStaffOrDeveloperSettingPredicate */;
    return null != useBuildOverrideActive() && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleBuildOverrideActivePress() {
    require(13612) /* navigateToDevTools */.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("navigateToDevTools").fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createToggle;
