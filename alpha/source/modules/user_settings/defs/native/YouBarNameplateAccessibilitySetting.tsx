// Module ID: 15619
// Function ID: 15620
// Name: YouBarNameplateAccessibilitySetting
// Dependencies: [5080, 7974, 10629, 1126, 504, 14616, 2]

// Module 15619 (YouBarNameplateAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14616 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
