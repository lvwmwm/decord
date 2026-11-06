// Module ID: 18205
// Function ID: 18206
// Name: DoubleTapToReactSetting
// Dependencies: [8524, 11703, 1113, 4995, 2]

// Module 18205 (DoubleTapToReactSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
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
