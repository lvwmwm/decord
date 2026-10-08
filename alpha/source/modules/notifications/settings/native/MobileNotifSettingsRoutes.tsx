// Module ID: 16123
// Function ID: 16124
// Name: MobileNotifSettingsRoutes
// Dependencies: [11262, 1126, 8747, 14533, 16124, 16125, 2891, 15588, 16131, 16132, 16133, 16134, 2]

// Module 16123 (MobileNotifSettingsRoutes)
import intl2 from "intl" /* 1126 */;
import _modDef2891 from "module_2891" /* 2891 */;
import BellIcon from "BellIcon" /* 8747 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14533 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15588 */;
import MobileNotifSettingsSections from "MobileNotifSettingsSections" /* 16124 */;
import SettingBuilders_mod from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getComponent() {
  return require("RedesignSettingsNotificationScreen").default;
}
const getComponent2 = function getComponent() {
  return require("RedesignSettingsRealtimeScreen").default;
};
const getComponent3 = function getComponent() {
  return require("RedesignSettingsCategorySocialScreen").default;
};
const getComponent4 = function getComponent() {
  return require("RedesignSettingsCategoryServerScreen").default;
};
const getComponent5 = function getComponent() {
  return require("RedesignSettingsCategoryOtherScreen").default;
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
    return intl.string(_modDef2891.S5cB9e);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifCategoryVisibility("REALTIME");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REALTIME, getComponent: getComponent2 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REALTIME, getComponent: getComponent2 });
const route2 = createRoute2(obj3);
SettingBuilders = SettingBuilders_mod;
const createRoute3 = SettingBuilders.createRoute;
const obj5 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2891["UzRF+8"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifCategoryVisibility("CATEGORY_SOCIAL");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL, getComponent: getComponent3 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL, getComponent: getComponent3 });
const route3 = createRoute3(obj5);
SettingBuilders = SettingBuilders_mod;
const createRoute4 = SettingBuilders.createRoute;
const obj7 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2891.zRKbpz);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifCategoryVisibility("CATEGORY_SERVER");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER, getComponent: getComponent4 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER, getComponent: getComponent4 });
const route4 = createRoute4(obj7);
SettingBuilders = SettingBuilders_mod;
const createRoute5 = SettingBuilders.createRoute;
const obj9 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2891.q5M7HV);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifCategoryVisibility("CATEGORY_OTHER");
  },
  screen: { route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER, getComponent: getComponent5 }
};
({ route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER, getComponent: getComponent5 });
const route5 = createRoute5(obj9);
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const RealtimeRoute = route2;
export const CategorySocialRoute = route3;
export const CategoryServerRoute = route4;
export const CategoryOtherRoute = route5;
