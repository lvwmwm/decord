// Module ID: 16729
// Function ID: 16730
// Name: YouBarAvatarDecoAccessibilitySetting
// Dependencies: [4970, 8330, 11204, 1128, 504, 15662, 2]

// Module 16729 (YouBarAvatarDecoAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15662 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
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
