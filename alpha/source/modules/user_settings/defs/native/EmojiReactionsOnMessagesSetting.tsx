// Module ID: 16652
// Function ID: 16653
// Name: EmojiReactionsOnMessagesSetting
// Dependencies: [8308, 11155, 1128, 4797, 2]

// Module 16652 (EmojiReactionsOnMessagesSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
