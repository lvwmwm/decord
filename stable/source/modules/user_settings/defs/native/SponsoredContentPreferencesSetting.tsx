// Module ID: 18268
// Function ID: 18269
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1072, 11717, 1113, 2231, 14983, 18264, 18269, 2]

// Module 18268 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef2231 from "module_2231" /* 2231 */;
import QuestsIcon from "QuestsIcon" /* 14983 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 18264 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
