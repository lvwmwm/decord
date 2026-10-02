// Module ID: 15464
// Function ID: 15465
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1086, 10874, 1127, 2160, 14519, 15462, 15465, 2]

// Module 15464 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import _modDef2160 from "module_2160" /* 2160 */;
import QuestsIcon from "QuestsIcon" /* 14519 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15462 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2160.XUj46U);
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
