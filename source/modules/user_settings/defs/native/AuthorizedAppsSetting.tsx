// Module ID: 13947
// Function ID: 106623
// Name: route
// Dependencies: [653, 10099, 1212, 9182, 13948, 2]

// Module 13947 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["f6kk+r"]);
  },
  parent: null,
  IconComponent: require("KeyIcon").KeyIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AUTHORIZED_APPS,
  getComponent() {
    return require(13948) /* UserSettingsAuthedApps */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
