// Module ID: 14538
// Function ID: 14539
// Name: route
// Dependencies: [676, 10333, 1236, 9030, 14539, 2]

// Module 14538 (route)
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
    return require(14539) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
