// Module ID: 17229
// Function ID: 17230
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1071, 11817, 1112, 2226, 13676, 17225, 17230, 2]

// Module 17229 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef2226 from "module_2226" /* 2226 */;
import QuestsIcon from "QuestsIcon" /* 13676 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17225 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2226.XUj46U);
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
