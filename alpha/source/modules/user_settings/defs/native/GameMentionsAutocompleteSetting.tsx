// Module ID: 16782
// Function ID: 16783
// Name: GameMentionsAutocompleteSetting
// Dependencies: [8593, 11875, 1113, 4617, 2]

// Module 16782 (GameMentionsAutocompleteSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4617 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
