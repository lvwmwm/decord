// Module ID: 17087
// Function ID: 17088
// Name: EmbedAndLinkPreviewsSetting
// Dependencies: [9556, 11970, 1112, 4868, 2]

// Module 17087 (EmbedAndLinkPreviewsSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["5bK9vw"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.RenderEmbeds.useSetting,
  onValueChange: UserSettings.RenderEmbeds.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmbedAndLinkPreviewsSetting.tsx");

export default toggle;
