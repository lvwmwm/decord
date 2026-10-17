// Module ID: 16995
// Function ID: 16996
// Name: ParentalControlsSensitiveContentFilterSetting
// Dependencies: [8260, 1087, 11065, 1128, 8481, 16996, 2]

// Module 16995 (ParentalControlsSensitiveContentFilterSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import ImageWarningIcon from "ImageWarningIcon" /* 8481 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
