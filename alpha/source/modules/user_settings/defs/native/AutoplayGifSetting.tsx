// Module ID: 15629
// Function ID: 15630
// Name: AutoplayGifSetting
// Dependencies: [7974, 10629, 1126, 2041, 2]

// Module 15629 (AutoplayGifSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["9ptHSs"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: UserSettings.GifAutoPlay.useSetting,
  onValueChange: UserSettings.GifAutoPlay.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutoplayGifSetting.tsx");

export default toggle;
