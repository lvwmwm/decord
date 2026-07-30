// Module ID: 14431
// Function ID: 14432
// Name: route
// Dependencies: [676, 10116, 1236, 14432, 9016, 14433, 2]

// Module 14431 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["C+DkPu"]);
  },
  usePredicate() {
    return require(14432) /* useWebBrowserSettingOptions */.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: require("GlobeEarthIcon").GlobeEarthIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.BROWSER,
  getComponent() {
    return require(14433).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
