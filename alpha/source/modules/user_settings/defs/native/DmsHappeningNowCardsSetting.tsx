// Module ID: 16951
// Function ID: 16952
// Name: DmsHappeningNowCardsSetting
// Dependencies: [8365, 11248, 1125, 4832, 2]

// Module 16951 (DmsHappeningNowCardsSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.cSb1ub);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: UserSettings.HappeningNowCardsDisabled.useSetting,
  onValueChange: UserSettings.HappeningNowCardsDisabled.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx");

export default toggle;
