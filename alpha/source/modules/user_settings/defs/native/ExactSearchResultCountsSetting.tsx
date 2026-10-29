// Module ID: 17191
// Function ID: 17192
// Name: ExactSearchResultCountsSetting
// Dependencies: [8387, 1125, 11302, 4833, 2]

// Module 17191 (ExactSearchResultCountsSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4833 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
