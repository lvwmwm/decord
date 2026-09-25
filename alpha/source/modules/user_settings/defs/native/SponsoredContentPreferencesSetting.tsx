// Module ID: 15449
// Function ID: 15450
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1074, 10993, 1115, 2156, 14506, 15447, 15450, 2]

// Module 15449 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2156 from "module_2156" /* 2156 */;
import QuestsIcon from "QuestsIcon" /* 14506 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15447 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2156.XUj46U);
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
