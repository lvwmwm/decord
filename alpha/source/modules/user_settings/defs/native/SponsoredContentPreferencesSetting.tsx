// Module ID: 17561
// Function ID: 17562
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1071, 11962, 1112, 2288, 14296, 17557, 17562, 2]

// Module 17561 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef2288 from "module_2288" /* 2288 */;
import QuestsIcon from "QuestsIcon" /* 14296 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17557 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2288.XUj46U);
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
