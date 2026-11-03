// Module ID: 17553
// Function ID: 17554
// Name: EnableReducedMotionSetting
// Dependencies: [5142, 8556, 504, 16413, 11677, 1113, 2]

// Module 17553 (EnableReducedMotionSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16413 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.e3TR1b);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSettingValue() {
    let useReducedMotion;
    const items = [AccessibilityStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  },
  onValueChange: function onReducedMotionSettingValueChange(arg0) {
    let str = "no-preference";
    const setPrefersReducedMotion = AccessibilityActionCreators.setPrefersReducedMotion;
    AccessibilityActionCreators;
    if (arg0) {
      str = "reduce";
    }
    const result = setPrefersReducedMotion(str);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableReducedMotionSetting.tsx");

export default toggle;
