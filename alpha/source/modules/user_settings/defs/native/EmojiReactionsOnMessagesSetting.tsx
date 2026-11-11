// Module ID: 17975
// Function ID: 17976
// Name: EmojiReactionsOnMessagesSetting
// Dependencies: [9136, 12317, 1113, 5068, 2]

// Module 17975 (EmojiReactionsOnMessagesSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5068 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["zge/fP"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.RenderReactions.useSetting,
  onValueChange: UserSettings.RenderReactions.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmojiReactionsOnMessagesSetting.tsx");

export default toggle;
