// Module ID: 17721
// Function ID: 17722
// Name: SyncReducedMotionWithDeviceSetting
// Dependencies: [5141, 8503, 504, 16573, 11685, 1113, 2]

// Module 17721 (SyncReducedMotionWithDeviceSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16573 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["St+DJK"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSyncSettingValue() {
    const items = [AccessibilityStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => "auto" === AccessibilityStore.rawPrefersReducedMotion);
  },
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    const systemPrefersReducedMotion = AccessibilityStore.systemPrefersReducedMotion;
    let str = "auto";
    const setPrefersReducedMotion = AccessibilityActionCreators.setPrefersReducedMotion;
    AccessibilityActionCreators;
    if (!arg0) {
      str = systemPrefersReducedMotion;
    }
    const result = setPrefersReducedMotion(str);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default toggle;
