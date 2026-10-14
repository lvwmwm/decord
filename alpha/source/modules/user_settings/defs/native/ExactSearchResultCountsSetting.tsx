// Module ID: 15969
// Function ID: 15970
// Name: ExactSearchResultCountsSetting
// Dependencies: [8000, 1126, 10767, 2041, 2]

// Module 15969 (ExactSearchResultCountsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.aP91Ud);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: UserSettings.SearchResultExactCountEnabled.useSetting,
  onValueChange: UserSettings.SearchResultExactCountEnabled.updateSetting,
  useDescription: function useSearchResultExactCountDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.qx4cha);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ExactSearchResultCountsSetting.tsx");

export default toggle;
