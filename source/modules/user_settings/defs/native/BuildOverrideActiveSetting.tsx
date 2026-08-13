// Module ID: 14837
// Function ID: 14838
// Name: pressable
// Dependencies: [10368, 21, 13902, 589, 11237, 14154, 13903, 10407, 13908, 2]

// Module 14837 (pressable)
import getCurrentBuildOverride from "getCurrentBuildOverride";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: require("RefreshIcon").RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    let obj = require(589) /* initialize */;
    const items = [getCurrentBuildOverride];
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
      tmp4 = jsx(require(13903) /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Build override: ", value: null });
    }
    return tmp4;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = require(14154) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = require(14154) /* useStaffOrDeveloperSettingPredicate */;
    const items = [getCurrentBuildOverride];
    const obj2 = require(589) /* initialize */;
    return null != require(589) /* initialize */.useStateFromStores(items, () => {
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
    require(13902) /* navigateToDevTools */.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("navigateToDevTools").fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createToggle;
