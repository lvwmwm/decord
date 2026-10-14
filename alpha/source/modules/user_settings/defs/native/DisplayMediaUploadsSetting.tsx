// Module ID: 16110
// Function ID: 16111
// Name: DisplayMediaUploadsSetting
// Dependencies: [8000, 10767, 1126, 2041, 2]

// Module 16110 (DisplayMediaUploadsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.VP11No);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.InlineAttachmentMedia.useSetting,
  onValueChange: UserSettings.InlineAttachmentMedia.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx");

export default toggle;
