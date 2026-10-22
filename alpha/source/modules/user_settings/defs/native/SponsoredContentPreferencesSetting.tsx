// Module ID: 17159
// Function ID: 17160
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1087, 11172, 1128, 2113, 14095, 17156, 17160, 2]

// Module 17159 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef2113 from "module_2113" /* 2113 */;
import QuestsIcon from "QuestsIcon" /* 14095 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17156 */;
import SettingBuilders from "SettingBuilders" /* 11172 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2113.XUj46U);
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
