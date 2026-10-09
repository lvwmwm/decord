// Module ID: 16180
// Function ID: 16181
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1085, 10629, 1126, 2173, 12955, 16177, 16181, 2]

// Module 16180 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2173 from "module_2173" /* 2173 */;
import QuestsIcon from "QuestsIcon" /* 12955 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16177 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2173.XUj46U);
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
