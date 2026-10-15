// Module ID: 16855
// Function ID: 16856
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1085, 10991, 1126, 2174, 13825, 16852, 16856, 2]

// Module 16855 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2174 from "module_2174" /* 2174 */;
import QuestsIcon from "QuestsIcon" /* 13825 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16852 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
