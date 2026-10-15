// Module ID: 16352
// Function ID: 16353
// Name: YouBarNameplateAccessibilitySetting
// Dependencies: [5140, 8210, 10991, 1126, 504, 15348, 2]

// Module 16352 (YouBarNameplateAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15348 */;
import AccessibilityStore from "AccessibilityStore" /* 5140 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
