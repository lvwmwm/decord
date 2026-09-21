// Module ID: 16184
// Function ID: 16185
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1074, 11725, 1115, 2154, 15272, 16182, 16185, 2]

// Module 16184 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2154 from "module_2154" /* 2154 */;
import QuestsIcon from "QuestsIcon" /* 15272 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16182 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2154.XUj46U);
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  screen: {
    route: Constants.UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
    getComponent() {
      return require("SponsoredContentPreferencesScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;
