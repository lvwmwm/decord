// Module ID: 15594
// Function ID: 15595
// Name: ExactSearchResultCountsSetting
// Dependencies: [7992, 1126, 10663, 2041, 2]

// Module 15594 (ExactSearchResultCountsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
