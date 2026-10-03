// Module ID: 15235
// Function ID: 15236
// Name: AutoplayGifSetting
// Dependencies: [7634, 11129, 1126, 2028, 2]

// Module 15235 (AutoplayGifSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
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
