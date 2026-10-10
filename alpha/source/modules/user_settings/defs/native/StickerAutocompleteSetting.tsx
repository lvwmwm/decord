// Module ID: 15744
// Function ID: 15745
// Name: StickerAutocompleteSetting
// Dependencies: [7992, 10663, 1126, 2041, 15737, 2]

// Module 15744 (StickerAutocompleteSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import UserSettingsText from "UserSettingsText" /* 15737 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
