// Module ID: 16651
// Function ID: 16652
// Name: EmbedAndLinkPreviewsSetting
// Dependencies: [8308, 11155, 1128, 4797, 2]

// Module 16651 (EmbedAndLinkPreviewsSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
