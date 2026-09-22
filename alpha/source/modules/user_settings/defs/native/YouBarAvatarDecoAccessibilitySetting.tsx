// Module ID: 15694
// Function ID: 15695
// Name: YouBarAvatarDecoAccessibilitySetting
// Dependencies: [4749, 8237, 11729, 1115, 504, 14723, 2]

// Module 15694 (YouBarAvatarDecoAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14723 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

require = fn;
const SettingBuilders = fn(11729);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["34XN2f"]);
  },
  parent: fn(8237).MobileUserSettings.ACCESSIBILITY,
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
