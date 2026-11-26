// Module ID: 16838
// Function ID: 16839
// Name: AutoplayGifSetting
// Dependencies: [8712, 11942, 1112, 4738, 2]

// Module 16838 (AutoplayGifSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
