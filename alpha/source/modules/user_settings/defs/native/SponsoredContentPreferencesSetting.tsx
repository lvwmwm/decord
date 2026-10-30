// Module ID: 17845
// Function ID: 17846
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1072, 11505, 1114, 2108, 14676, 17840, 17846, 2]

// Module 17845 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import _modDef2108 from "module_2108" /* 2108 */;
import QuestsIcon from "QuestsIcon" /* 14676 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17840 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2108.XUj46U);
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
