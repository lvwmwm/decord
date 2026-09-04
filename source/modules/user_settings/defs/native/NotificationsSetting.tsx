// Module ID: 15402
// Function ID: 15403
// Name: route
// Dependencies: [673, 11400, 1233, 9705, 14376, 15403, 2]

// Module 15402 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import BellIcon from "BellIcon" /* 9705 */;
import getNamedExperiment from "getNamedExperiment" /* 14376 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HcoRu0);
  },
  parent: null,
  IconComponent: BellIcon.BellIcon,
  usePredicate() {
    return !getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(15403) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
