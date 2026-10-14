// Module ID: 16616
// Function ID: 16617
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1085, 10767, 1126, 2174, 13529, 16613, 16617, 2]

// Module 16616 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2174 from "module_2174" /* 2174 */;
import QuestsIcon from "QuestsIcon" /* 13529 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16613 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
