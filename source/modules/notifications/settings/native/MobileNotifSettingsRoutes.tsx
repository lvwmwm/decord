// Module ID: 15839
// Function ID: 15840
// Name: route
// Dependencies: [11400, 1233, 9705, 14376, 15840, 15841, 2694, 15838, 15843, 15844, 15845, 15846, 2]

// Module 15839 (route)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2694 */;
import BellIcon from "BellIcon" /* 9705 */;
import getNamedExperiment from "getNamedExperiment" /* 14376 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15838 */;
import frozen from "frozen" /* 15840 */;
import createToggle from "createToggle" /* 11400 */;

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HcoRu0);
  },
  IconComponent: BellIcon.BellIcon,
  parent: null,
  usePredicate() {
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: null
};
obj = {
  route: frozen.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN,
  getComponent() {
    return require(15841).default;
  }
};
obj[4] = obj;
const route = createToggle.createRoute(obj);
const obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.S5cB9e);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: {
    route: frozen.MobileNotifSettingsSections.NOTIF_REALTIME,
    getComponent() {
      return require(15843).default;
    }
  }
};
const route1 = createToggle.createRoute(obj1);
const obj3 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["UzRF+8"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: null
};
const obj2 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    return require(15843).default;
  }
};
obj3[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require(15844).default;
  }
};
const route2 = createToggle.createRoute(obj3);
const obj5 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.zRKbpz);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: null
};
const obj4 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require(15844).default;
  }
};
obj5[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require(15845).default;
  }
};
const route3 = createToggle.createRoute(obj5);
const obj7 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.q5M7HV);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: null
};
const obj6 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require(15845).default;
  }
};
obj7[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    return require(15846).default;
  }
};
const route4 = createToggle.createRoute(obj7);
const obj8 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    return require(15846).default;
  }
};
const result = set.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const RealtimeRoute = route1;
export const CategorySocialRoute = route2;
export const CategoryServerRoute = route3;
export const CategoryOtherRoute = route4;
