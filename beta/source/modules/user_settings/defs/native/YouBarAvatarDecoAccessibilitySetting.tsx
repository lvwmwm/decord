// Module ID: 15671
// Function ID: 15672
// Name: YouBarAvatarDecoAccessibilitySetting
// Dependencies: [4750, 8238, 11594, 1119, 504, 14720, 2]

// Module 15671 (YouBarAvatarDecoAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1119 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14720 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;

require = fn;
const SettingBuilders = fn(11594);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["34XN2f"]);
  },
  parent: fn(8238).MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.animateYouBarAvatarDeco);
  },
  onValueChange(animateAvatarDeco) {
    return AccessibilityActionCreators.setYouBarAnimations({ animateAvatarDeco });
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default toggle;
