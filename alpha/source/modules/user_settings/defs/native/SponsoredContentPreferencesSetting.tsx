// Module ID: 18596
// Function ID: 18597
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1072, 12612, 1113, 2236, 15099, 18592, 18597, 2]

// Module 18596 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef2236 from "module_2236" /* 2236 */;
import QuestsIcon from "QuestsIcon" /* 15099 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 18592 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2236.XUj46U);
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
