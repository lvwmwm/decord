// Module ID: 15687
// Function ID: 15688
// Name: route
// Dependencies: [673, 11288, 1233, 2042, 14823, 15685, 15688, 2]

// Module 15687 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2042 */;
import QuestsIcon from "QuestsIcon" /* 14823 */;
import apexExperiment from "apexExperiment" /* 15685 */;
import createToggle from "createToggle" /* 11288 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.XUj46U);
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  usePredicate: apexExperiment.useIsAdTopicOptOutClientEnabled,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
  getComponent() {
    return require(15688) /* SponsoredContentPreferencesScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;
