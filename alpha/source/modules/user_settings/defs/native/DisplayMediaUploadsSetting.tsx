// Module ID: 16406
// Function ID: 16407
// Name: DisplayMediaUploadsSetting
// Dependencies: [8210, 10991, 1126, 2041, 2]

// Module 16406 (DisplayMediaUploadsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
