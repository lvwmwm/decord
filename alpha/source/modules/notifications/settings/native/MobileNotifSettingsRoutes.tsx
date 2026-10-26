// Module ID: 17320
// Function ID: 17321
// Name: MobileNotifSettingsRoutes
// Dependencies: [11208, 1128, 9140, 15697, 17321, 17322, 2864, 16844, 17328, 17329, 17330, 17331, 17332, 2]

// Module 17320 (MobileNotifSettingsRoutes)
import intl2 from "intl" /* 1128 */;
import _modDef2864 from "module_2864" /* 2864 */;
import BellIcon from "BellIcon" /* 9140 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15697 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16844 */;
import MobileNotifSettingsSections from "MobileNotifSettingsSections" /* 17321 */;
import SettingBuilders_mod from "SettingBuilders" /* 11208 */;
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
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.HcoRu0);
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
    const intl = intl2.intl;
    return intl.string(_modDef2864.gbaIfD);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.MjXONr);
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
    const intl = intl2.intl;
    return intl.string(_modDef2864["ZwNQS+"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.BBFiVq);
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
    const intl = intl2.intl;
    return intl.string(_modDef2864.BBcVf5);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.eI4aPM);
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
    const intl = intl2.intl;
    return intl.string(_modDef2864.vcrTV5);
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
    const intl = intl2.intl;
    return intl.string(_modDef2864.qxdDqr);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.r60oLi);
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
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const CategoryCallsMessagesRoute = route2;
export const CategoryDiscoveryHighlightsRoute = route3;
export const CategoryFriendsActivityRoute = route4;
export const FriendActivityTitleRoute = route5;
export const CategoryServersRoute = route6;
