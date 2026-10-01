// Module ID: 15476
// Function ID: 15477
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1074, 11006, 1115, 2157, 14531, 15474, 15477, 2]

// Module 15476 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import _modDef2157 from "module_2157" /* 2157 */;
import QuestsIcon from "QuestsIcon" /* 14531 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15474 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2157.XUj46U);
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  screen: {
    route: UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
    getComponent() {
      return require("SponsoredContentPreferencesScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;
