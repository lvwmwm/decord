// Module ID: 14474
// Function ID: 110604
// Name: useBuildOverrideActive
// Dependencies: [10403, 33, 13567, 566, 10917, 13807, 13568, 10059, 13573, 2]

// Module 14474 (useBuildOverrideActive)
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
      tmp2 = jsx(require(13568) /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Build override: ", value: tmp });
    }
    return tmp2;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = require(13807) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = require(13807) /* useStaffOrDeveloperSettingPredicate */;
    return null != useBuildOverrideActive() && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleBuildOverrideActivePress() {
    require(13567) /* navigateToDevTools */.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("navigateToDevTools").fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createToggle;
