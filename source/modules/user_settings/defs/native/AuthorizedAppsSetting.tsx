// Module ID: 13963
// Function ID: 13964
// Name: route
// Dependencies: [676, 10116, 1236, 9202, 13964, 2]

// Module 13963 (route)
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
    return require(13964) /* UserSettingsAuthedApps */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
