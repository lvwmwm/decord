// Module ID: 16173
// Function ID: 16174
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1078, 11594, 1119, 2158, 15261, 16171, 16174, 2]

// Module 16173 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import _modDef2158 from "module_2158" /* 2158 */;
import QuestsIcon from "QuestsIcon" /* 15261 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16171 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2158.XUj46U);
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
