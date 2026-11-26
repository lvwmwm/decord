// Module ID: 17623
// Function ID: 17624
// Name: MobileNotifSettingsRoutes
// Dependencies: [11962, 1112, 8597, 15853, 17624, 17625, 3207, 17102, 17634, 17635, 17636, 17637, 17638, 15148, 15850, 17639, 2]

// Module 17623 (MobileNotifSettingsRoutes)
import intl4 from "intl" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import BellIcon from "BellIcon" /* 8597 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 15148 */;
import NotifSettings from "NotifSettings" /* 15850 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15853 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17102 */;
import MobileNotifSettingsSections from "MobileNotifSettingsSections" /* 17624 */;
import SettingBuilders_mod from "SettingBuilders" /* 11962 */;
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
    return intl.string(_modDef3207.gbaIfD);
  },
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.EDuIWR);
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
    return intl.string(_modDef3207["ZwNQS+"]);
  },
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["/8n8hE"]);
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
    return intl.string(_modDef3207.BBcVf5);
  },
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.F8hJUK);
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
    return intl.string(_modDef3207.vcrTV5);
  },
  unsearchable: true,
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
    return intl.string(_modDef3207.qxdDqr);
  },
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.fEt8MH);
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
    return intl.string(_modDef3207.sMUINc);
  },
  useTrailing() {
    const obj = settings_NotifSettingsUtils;
    const notifSettingRadioValue = obj.useNotifSettingRadioValue(NotifSettings.NotifSettings.REACTIONS_CHOICE);
    if (2 === notifSettingRadioValue) {
      const intl3 = tmp(1112).intl;
      return intl3.string(_modDef3207.Lq41PP);
    } else if (1 === notifSettingRadioValue) {
      const intl2 = tmp(1112).intl;
      return intl2.string(_modDef3207.RoC4aT);
    } else if (0 === notifSettingRadioValue) {
      const intl = tmp(1112).intl;
      return intl.string(_modDef3207.kKc6Gs);
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
