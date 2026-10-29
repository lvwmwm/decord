// Module ID: 17774
// Function ID: 17775
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1084, 11302, 1125, 2111, 14642, 17769, 17775, 2]

// Module 17774 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import _modDef2111 from "module_2111" /* 2111 */;
import QuestsIcon from "QuestsIcon" /* 14642 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17769 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2111.XUj46U);
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
