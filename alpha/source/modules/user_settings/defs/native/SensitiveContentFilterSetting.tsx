// Module ID: 16074
// Function ID: 16075
// Name: SensitiveContentFilterSetting
// Dependencies: [8330, 1087, 11204, 1128, 8550, 16075, 2]

// Module 16074 (SensitiveContentFilterSetting)
import Constants from "Constants" /* 1087 */;
import intl7 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import ImageWarningIcon from "ImageWarningIcon" /* 8550 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl7.intl;
    return intl.string(intl7.t["Hj/But"]);
  },
  IconComponent: ImageWarningIcon.ImageWarningIcon,
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
    getComponent() {
      return require("SensitiveContentFiltersScreen").default;
    }
  },
  useSearchTerms() {
    const intl = intl7.intl;
    const items = [intl.string(intl7.t.uEz8JF), , , , , ];
    const intl2 = intl7.intl;
    items[1] = intl2.string(intl7.t["N/oRI+"]);
    const intl3 = intl7.intl;
    items[2] = intl3.string(intl7.t.QVdYsK);
    const intl4 = intl7.intl;
    items[3] = intl4.string(intl7.t["aWD+tu"]);
    const intl5 = intl7.intl;
    items[4] = intl5.string(intl7.t["5mnTa7"]);
    const intl6 = intl7.intl;
    items[5] = intl6.string(intl7.t["K0OWP+"]);
    return items;
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;
