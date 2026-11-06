// Module ID: 17663
// Function ID: 17664
// Name: YouBarNameplateAccessibilitySetting
// Dependencies: [5171, 8524, 11703, 1113, 504, 16525, 2]

// Module 17663 (YouBarNameplateAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16525 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
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
