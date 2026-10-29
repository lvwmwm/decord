// Module ID: 17327
// Function ID: 17328
// Name: DisplayMediaUploadsSetting
// Dependencies: [8387, 11302, 1125, 4833, 2]

// Module 17327 (DisplayMediaUploadsSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4833 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
