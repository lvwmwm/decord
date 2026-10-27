// Module ID: 17303
// Function ID: 17304
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1084, 11212, 1125, 2110, 14184, 17300, 17304, 2]

// Module 17303 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import _modDef2110 from "module_2110" /* 2110 */;
import QuestsIcon from "QuestsIcon" /* 14184 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17300 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2110.XUj46U);
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
