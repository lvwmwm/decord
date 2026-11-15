// Module ID: 18269
// Function ID: 18270
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1072, 11716, 1113, 2231, 14984, 18265, 18270, 2]

// Module 18269 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef2231 from "module_2231" /* 2231 */;
import QuestsIcon from "QuestsIcon" /* 14984 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 18265 */;
import SettingBuilders from "SettingBuilders" /* 11716 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2231.XUj46U);
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
