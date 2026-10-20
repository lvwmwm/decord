// Module ID: 16995
// Function ID: 16996
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1087, 11099, 1128, 2114, 13968, 16992, 16996, 2]

// Module 16995 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef2114 from "module_2114" /* 2114 */;
import QuestsIcon from "QuestsIcon" /* 13968 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16992 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2114.XUj46U);
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
