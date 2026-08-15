// Module ID: 15001
// Function ID: 15002
// Name: route
// Dependencies: [676, 10669, 1236, 2041, 14351, 14999, 15002, 2]

// Module 15001 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2041).XUj46U);
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  usePredicate: require("apexExperiment").useIsAdTopicOptOutClientEnabled,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
  getComponent() {
    return require(15002) /* SponsoredContentPreferencesScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;
