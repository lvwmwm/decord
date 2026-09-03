// Module ID: 15589
// Function ID: 15590
// Name: pressable
// Dependencies: [11283, 21, 14474, 586, 11588, 14686, 15585, 11292, 15000, 2]

// Module 15589 (pressable)
import initialize from "initialize" /* 586 */;
import navigateToDevTools from "navigateToDevTools" /* 14474 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14686 */;
import DevToolsContentSortButtons from "DevToolsContentSortButtons" /* 15585 */;
import closure_2 from "getCurrentBuildOverride" /* 11283 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11292 */;

require = arg1;
createToggle = {
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: require("RefreshIcon").RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    let obj = initialize;
    const items = [closure_2];
    const stateFromStores = obj.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[callback(undefined, table[4]).DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    });
    let tmp4;
    if (null != stateFromStores) {
      obj = { label: "Build override: ", value: null };
      obj[1] = stateFromStores;
      tmp4 = jsx(DevToolsContentSortButtons.DevToolsContentSubLabel, { label: "Build override: ", value: null });
    }
    return tmp4;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const obj = useStaffOrDeveloperSettingPredicate;
    const items = [closure_2];
    const obj2 = initialize;
    return null != initialize.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[callback(undefined, table[4]).DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    }) && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleBuildOverrideActivePress() {
    navigateToDevTools.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createToggle;
