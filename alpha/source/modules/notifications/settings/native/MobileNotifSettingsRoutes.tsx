// Module ID: 17833
// Function ID: 17834
// Name: MobileNotifSettingsRoutes
// Dependencies: [11302, 1125, 9176, 16196, 17834, 17835, 2866, 17355, 17841, 17842, 17843, 17844, 17845, 2]

// Module 17833 (MobileNotifSettingsRoutes)
import intl2 from "intl" /* 1125 */;
import _modDef2866 from "module_2866" /* 2866 */;
import BellIcon from "BellIcon" /* 9176 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16196 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17355 */;
import MobileNotifSettingsSections from "MobileNotifSettingsSections" /* 17834 */;
import SettingBuilders_mod from "SettingBuilders" /* 11302 */;
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
    return intl.string(_modDef2866.gbaIfD);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2866.MjXONr);
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
    return intl.string(_modDef2866["ZwNQS+"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2866.BBFiVq);
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
    return intl.string(_modDef2866.BBcVf5);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2866.eI4aPM);
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
    return intl.string(_modDef2866.vcrTV5);
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
    return intl.string(_modDef2866.qxdDqr);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2866.r60oLi);
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
