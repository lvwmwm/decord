// Module ID: 16465
// Function ID: 16466
// Name: YouBarNameplateAccessibilitySetting
// Dependencies: [5181, 8260, 11065, 1128, 504, 15462, 2]

// Module 16465 (YouBarNameplateAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15462 */;
import AccessibilityStore from "AccessibilityStore" /* 5181 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.EEms8K);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [AccessibilityStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => AccessibilityStore.animateYouBarNameplate);
  },
  onValueChange(animateNameplate) {
    const obj = AccessibilityActionCreators;
    const obj2 = { animateNameplate };
    return obj.setYouBarAnimations(obj2);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/YouBarNameplateAccessibilitySetting.tsx");

export default toggle;
