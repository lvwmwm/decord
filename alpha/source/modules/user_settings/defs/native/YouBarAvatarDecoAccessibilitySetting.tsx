// Module ID: 15682
// Function ID: 15683
// Name: YouBarAvatarDecoAccessibilitySetting
// Dependencies: [5081, 7992, 10663, 1126, 504, 14670, 2]

// Module 15682 (YouBarAvatarDecoAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14670 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
