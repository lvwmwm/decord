// Module ID: 17367
// Function ID: 17368
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1071, 11942, 1112, 2276, 13802, 17363, 17368, 2]

// Module 17367 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef2276 from "module_2276" /* 2276 */;
import QuestsIcon from "QuestsIcon" /* 13802 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17363 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2276.XUj46U);
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
