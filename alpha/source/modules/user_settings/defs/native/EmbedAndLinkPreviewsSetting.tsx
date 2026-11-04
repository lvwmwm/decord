// Module ID: 17693
// Function ID: 17694
// Name: EmbedAndLinkPreviewsSetting
// Dependencies: [8573, 11728, 1113, 4966, 2]

// Module 17693 (EmbedAndLinkPreviewsSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
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
