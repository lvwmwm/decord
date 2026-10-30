// Module ID: 17330
// Function ID: 17331
// Name: YouBarAvatarDecoAccessibilitySetting
// Dependencies: [5010, 8424, 11505, 1114, 504, 16225, 2]

// Module 17330 (YouBarAvatarDecoAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16225 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["34XN2f"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [AccessibilityStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => AccessibilityStore.animateYouBarAvatarDeco);
  },
  onValueChange(animateAvatarDeco) {
    const obj = AccessibilityActionCreators;
    const obj2 = { animateAvatarDeco };
    return obj.setYouBarAnimations(obj2);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default toggle;
