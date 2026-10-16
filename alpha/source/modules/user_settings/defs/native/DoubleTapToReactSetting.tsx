// Module ID: 16920
// Function ID: 16921
// Name: DoubleTapToReactSetting
// Dependencies: [8213, 11006, 1128, 2044, 2]

// Module 16920 (DoubleTapToReactSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["4qhAjx"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    let animated;
    let emojiId;
    let emojiName;
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = UserSettings.DoubleTapReactionEmoji;
    const obj = { disableDoubleTap: !disableDoubleTap, emojiId, emojiName, animated };
    emojiId = undefined;
    const updateSetting = DoubleTapReactionEmoji2.updateSetting;
    if (setting != null) {
      emojiId = setting.emojiId;
    }
    emojiName = undefined;
    if (setting != null) {
      emojiName = setting.emojiName;
    }
    animated = undefined;
    if (setting != null) {
      animated = setting.animated;
    }
    updateSetting(obj);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DoubleTapToReactSetting.tsx");

export default toggle;
