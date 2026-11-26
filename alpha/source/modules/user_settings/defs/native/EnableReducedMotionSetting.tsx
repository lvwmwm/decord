// Module ID: 17030
// Function ID: 17031
// Name: EnableReducedMotionSetting
// Dependencies: [5044, 9555, 504, 15840, 11962, 1112, 2]

// Module 17030 (EnableReducedMotionSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15840 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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
