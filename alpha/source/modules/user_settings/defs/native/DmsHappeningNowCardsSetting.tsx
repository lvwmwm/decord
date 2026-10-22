// Module ID: 16596
// Function ID: 16597
// Name: DmsHappeningNowCardsSetting
// Dependencies: [8318, 11181, 1128, 4797, 2]

// Module 16596 (DmsHappeningNowCardsSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
