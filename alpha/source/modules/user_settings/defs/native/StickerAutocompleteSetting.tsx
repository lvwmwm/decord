// Module ID: 16930
// Function ID: 16931
// Name: StickerAutocompleteSetting
// Dependencies: [8593, 11875, 1113, 4617, 16923, 2]

// Module 16930 (StickerAutocompleteSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4617 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import UserSettingsText from "UserSettingsText" /* 16923 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
