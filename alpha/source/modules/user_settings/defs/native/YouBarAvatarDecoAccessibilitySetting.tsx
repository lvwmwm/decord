// Module ID: 17546
// Function ID: 17547
// Name: YouBarAvatarDecoAccessibilitySetting
// Dependencies: [5142, 8556, 11677, 1113, 504, 16413, 2]

// Module 17546 (YouBarAvatarDecoAccessibilitySetting)
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
