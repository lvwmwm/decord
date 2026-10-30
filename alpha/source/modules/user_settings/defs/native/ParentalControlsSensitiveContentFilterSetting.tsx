// Module ID: 17878
// Function ID: 17879
// Name: ParentalControlsSensitiveContentFilterSetting
// Dependencies: [8424, 1072, 11505, 1114, 8645, 17879, 2]

// Module 17878 (ParentalControlsSensitiveContentFilterSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import ImageWarningIcon from "ImageWarningIcon" /* 8645 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["Hj/But"]);
  },
  IconComponent: ImageWarningIcon.ImageWarningIcon,
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  screen: {
    route: UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
    getComponent() {
      return require("ParentalControlsSensitiveContentFiltersScreen").default;
    }
  },
  unsearchable: true
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsSensitiveContentFilterSetting.tsx");

export default route;
