// Module ID: 15567
// Function ID: 15568
// Name: EmojiReactionsOnMessagesSetting
// Dependencies: [7966, 11262, 1126, 2040, 2]

// Module 15567 (EmojiReactionsOnMessagesSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
