// Module ID: 18492
// Function ID: 18493
// Name: MobileNotifSettingsRoutes
// Dependencies: [12317, 1113, 10933, 16784, 18493, 18494, 3013, 17996, 18502, 18503, 18504, 18505, 18506, 16046, 16781, 18507, 2]

// Module 18492 (MobileNotifSettingsRoutes)
import intl4 from "intl" /* 1113 */;
import _modDef3013 from "module_3013" /* 3013 */;
import BellIcon from "BellIcon" /* 10933 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 16046 */;
import NotifSettings from "NotifSettings" /* 16781 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16784 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17996 */;
import MobileNotifSettingsSections from "MobileNotifSettingsSections" /* 18493 */;
import SettingBuilders_mod from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getComponent() {
  return require("RedesignSettingsNotificationScreen").default;
}
const getComponent2 = function getComponent() {
  return require("RedesignSettingsCategoryCallsMessagesScreen").default;
};
const getComponent3 = function getComponent() {
  return require("RedesignSettingsCategoryDiscoveryHighlightsScreen").default;
};
const getComponent4 = function getComponent() {
  return require("RedesignSettingsCategoryFriendsActivityScreen").default;
};
const getComponent5 = function getComponent() {
  return require("RedesignSettingsFriendActivityTitleScreen").default;
};
const getComponent6 = function getComponent() {
  return require("RedesignSettingsCategoryServersScreen").default;
};
const getComponent7 = function getComponent() {
  return require("RedesignSettingsReactionsChoiceScreen").default;
};
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.HcoRu0);
  },
  IconComponent: BellIcon.BellIcon,
  parent: null,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useIsDeclarativeSettingsUIAvailable("RootRoute");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN, getComponent }
};
const createRoute = SettingBuilders.createRoute;
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN, getComponent });
const route = createRoute(obj);
SettingBuilders = SettingBuilders_mod;
const createRoute2 = SettingBuilders.createRoute;
const obj3 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3013.gbaIfD);
  },
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3013.MjXONr);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifCategoryVisibility("CATEGORY_CALLS_MESSAGES");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_CALLS_MESSAGES, getComponent: getComponent2 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_CALLS_MESSAGES, getComponent: getComponent2 });
const route2 = createRoute2(obj3);
SettingBuilders = SettingBuilders_mod;
const createRoute3 = SettingBuilders.createRoute;
const obj5 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3013["ZwNQS+"]);
  },
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3013.BBFiVq);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifCategoryVisibility("CATEGORY_DISCOVERY_HIGHLIGHTS");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS, getComponent: getComponent3 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS, getComponent: getComponent3 });
const route3 = createRoute3(obj5);
SettingBuilders = SettingBuilders_mod;
const createRoute4 = SettingBuilders.createRoute;
const obj7 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3013.BBcVf5);
  },
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3013.eI4aPM);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifCategoryVisibility("CATEGORY_FRIENDS_ACTIVITY");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_FRIENDS_ACTIVITY, getComponent: getComponent4 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_FRIENDS_ACTIVITY, getComponent: getComponent4 });
const route4 = createRoute4(obj7);
SettingBuilders = SettingBuilders_mod;
const createRoute5 = SettingBuilders.createRoute;
const obj9 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3013.vcrTV5);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifCategoryVisibility("FRIEND_ACTIVITY_TITLE");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_FRIEND_ACTIVITY_TITLE, getComponent: getComponent5 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_FRIEND_ACTIVITY_TITLE, getComponent: getComponent5 });
const route5 = createRoute5(obj9);
SettingBuilders = SettingBuilders_mod;
const createRoute6 = SettingBuilders.createRoute;
const obj11 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3013.qxdDqr);
  },
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3013.r60oLi);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifCategoryVisibility("CATEGORY_SERVERS");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVERS, getComponent: getComponent6 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVERS, getComponent: getComponent6 });
const route6 = createRoute6(obj11);
SettingBuilders = SettingBuilders_mod;
const createRoute7 = SettingBuilders.createRoute;
const obj13 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3013.wv4QHR);
  },
  useTrailing() {
    const obj = settings_NotifSettingsUtils;
    const notifSettingRadioValue = obj.useNotifSettingRadioValue(NotifSettings.NotifSettings.REACTIONS_CHOICE);
    if (2 === notifSettingRadioValue) {
      const intl3 = tmp(1113).intl;
      return intl3.string(_modDef3013.jUZVYn);
    } else if (1 === notifSettingRadioValue) {
      const intl2 = tmp(1113).intl;
      return intl2.string(_modDef3013.qggLZW);
    } else if (0 === notifSettingRadioValue) {
      const intl = tmp(1113).intl;
      return intl.string(_modDef3013.FLSQ8z);
    } else {
      return null;
    }
  },
  unsearchable: true,
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.REACTIONS_CHOICE);
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REACTIONS_CHOICE_ROUTE, getComponent: getComponent7 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REACTIONS_CHOICE_ROUTE, getComponent: getComponent7 });
const route7 = createRoute7(obj13);
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const CategoryCallsMessagesRoute = route2;
export const CategoryDiscoveryHighlightsRoute = route3;
export const CategoryFriendsActivityRoute = route4;
export const FriendActivityTitleRoute = route5;
export const CategoryServersRoute = route6;
export const ReactionsChoiceRoute = route7;
