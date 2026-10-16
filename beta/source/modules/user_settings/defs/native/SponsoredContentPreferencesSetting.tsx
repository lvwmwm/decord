// Module ID: 16275
// Function ID: 16276
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1085, 10664, 1126, 2174, 13012, 16272, 16276, 2]

// Module 16275 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2174 from "module_2174" /* 2174 */;
import QuestsIcon from "QuestsIcon" /* 13012 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16272 */;
import SettingBuilders from "SettingBuilders" /* 10664 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2174.XUj46U);
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
