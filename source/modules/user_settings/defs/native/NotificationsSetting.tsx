// Module ID: 14310
// Function ID: 109589
// Name: route
// Dependencies: [653, 10095, 1212, 10204, 14311, 2]

// Module 14310 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.HcoRu0);
  },
  parent: null,
  IconComponent: require("BellIcon").BellIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(14311) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
