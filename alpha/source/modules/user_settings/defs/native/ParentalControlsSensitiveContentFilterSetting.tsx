// Module ID: 16921
// Function ID: 16922
// Name: ParentalControlsSensitiveContentFilterSetting
// Dependencies: [8213, 1087, 11006, 1128, 8434, 16922, 2]

// Module 16921 (ParentalControlsSensitiveContentFilterSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import ImageWarningIcon from "ImageWarningIcon" /* 8434 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
