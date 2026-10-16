// Module ID: 16299
// Function ID: 16300
// Name: GameMentionsAutocompleteSetting
// Dependencies: [8213, 11006, 1128, 2044, 2]

// Module 16299 (GameMentionsAutocompleteSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.c0oFDw);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: UserSettings.IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: UserSettings.IncludeGameMentionsInAutocomplete.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;
