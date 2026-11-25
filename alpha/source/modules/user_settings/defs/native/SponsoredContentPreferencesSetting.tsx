// Module ID: 17504
// Function ID: 17505
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1071, 11914, 1112, 2287, 14244, 17500, 17505, 2]

// Module 17504 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef2287 from "module_2287" /* 2287 */;
import QuestsIcon from "QuestsIcon" /* 14244 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17500 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2287.XUj46U);
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
