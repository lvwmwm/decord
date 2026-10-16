// Module ID: 16888
// Function ID: 16889
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1087, 11006, 1128, 2177, 13851, 16885, 16889, 2]

// Module 16888 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef2177 from "module_2177" /* 2177 */;
import QuestsIcon from "QuestsIcon" /* 13851 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16885 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2177.XUj46U);
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
