// Module ID: 17036
// Function ID: 17037
// Name: YouBarNameplateAccessibilitySetting
// Dependencies: [5005, 8365, 11248, 1125, 504, 15949, 2]

// Module 17036 (YouBarNameplateAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15949 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
