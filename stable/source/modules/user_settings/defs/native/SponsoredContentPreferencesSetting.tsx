// Module ID: 17896
// Function ID: 17897
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1072, 11540, 1113, 2107, 14718, 17892, 17897, 2]

// Module 17896 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef2107 from "module_2107" /* 2107 */;
import QuestsIcon from "QuestsIcon" /* 14718 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17892 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2107.XUj46U);
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
