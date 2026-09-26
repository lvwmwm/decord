// Module ID: 15478
// Function ID: 15479
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1074, 11006, 1115, 2157, 14531, 15476, 15479, 2]

// Module 15478 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2157 from "module_2157" /* 2157 */;
import QuestsIcon from "QuestsIcon" /* 14531 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15476 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2157.XUj46U);
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
