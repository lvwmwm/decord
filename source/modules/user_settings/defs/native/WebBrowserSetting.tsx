// Module ID: 14435
// Function ID: 14436
// Name: route
// Dependencies: [676, 10120, 1236, 14436, 9020, 14437, 2]

// Module 14435 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["C+DkPu"]);
  },
  usePredicate() {
    return require(14436) /* useWebBrowserSettingOptions */.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: require("GlobeEarthIcon").GlobeEarthIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.BROWSER,
  getComponent() {
    return require(14437).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
