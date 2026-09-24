// Module ID: 15681
// Function ID: 15682
// Name: YouBarAvatarDecoAccessibilitySetting
// Dependencies: [4782, 8270, 11630, 1119, 504, 14758, 2]

// Module 15681 (YouBarAvatarDecoAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1119 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14758 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

require = fn;
const SettingBuilders = fn(11630);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["34XN2f"]);
  },
  parent: fn(8270).MobileUserSettings.ACCESSIBILITY,
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
