// Module ID: 14112
// Function ID: 14113
// Name: route
// Dependencies: [676, 10380, 1236, 8425, 14113, 2]

// Module 14112 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["f6kk+r"]);
  },
  parent: null,
  IconComponent: require("KeyIcon").KeyIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AUTHORIZED_APPS,
  getComponent() {
    return require(14113) /* UserSettingsAuthedApps */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
