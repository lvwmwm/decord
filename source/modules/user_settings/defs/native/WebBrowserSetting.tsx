// Module ID: 14589
// Function ID: 14590
// Name: route
// Dependencies: [676, 10380, 1236, 14590, 10469, 14591, 2]

// Module 14589 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["C+DkPu"]);
  },
  usePredicate() {
    return require(14590) /* useWebBrowserSettingOptions */.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: require("GlobeEarthIcon").GlobeEarthIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.BROWSER,
  getComponent() {
    return require(14591).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
