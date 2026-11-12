// Module ID: 17819
// Function ID: 17820
// Name: StickerAutocompleteSetting
// Dependencies: [8536, 11717, 1113, 4995, 17812, 2]

// Module 17819 (StickerAutocompleteSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import UserSettingsText from "UserSettingsText" /* 17812 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["29xPVZ"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.IncludeStickersInAutocomplete.useSetting,
  onValueChange: UserSettingsText.setStickerAutocomplete
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StickerAutocompleteSetting.tsx");

export default toggle;
