// Module ID: 14850
// Function ID: 14851
// Name: route
// Dependencies: [676, 10708, 1236, 10042, 14851, 2]

// Module 14850 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import BellIcon from "BellIcon" /* 10042 */;
import createToggle from "createToggle" /* 10708 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HcoRu0);
  },
  parent: null,
  IconComponent: BellIcon.BellIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(14851) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
