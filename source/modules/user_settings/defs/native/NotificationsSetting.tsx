// Module ID: 14438
// Function ID: 14439
// Name: route
// Dependencies: [676, 10120, 1236, 10229, 14439, 2]

// Module 14438 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.HcoRu0);
  },
  parent: null,
  IconComponent: require("BellIcon").BellIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(14439) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
