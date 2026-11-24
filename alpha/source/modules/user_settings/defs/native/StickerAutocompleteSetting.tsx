// Module ID: 16911
// Function ID: 16912
// Name: StickerAutocompleteSetting
// Dependencies: [9414, 11815, 1112, 4742, 16904, 2]

// Module 16911 (StickerAutocompleteSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4742 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import UserSettingsText from "UserSettingsText" /* 16904 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
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
