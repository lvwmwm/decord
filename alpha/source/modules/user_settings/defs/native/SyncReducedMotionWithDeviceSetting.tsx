// Module ID: 16702
// Function ID: 16703
// Name: SyncReducedMotionWithDeviceSetting
// Dependencies: [4795, 8592, 504, 15524, 11817, 1112, 2]

// Module 16702 (SyncReducedMotionWithDeviceSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15524 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
