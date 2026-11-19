// Module ID: 16870
// Function ID: 16871
// Name: YouBarAvatarDecoAccessibilitySetting
// Dependencies: [4793, 8593, 11875, 1113, 504, 15560, 2]

// Module 16870 (YouBarAvatarDecoAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15560 */;
import AccessibilityStore from "AccessibilityStore" /* 4793 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
