// Module ID: 16914
// Function ID: 16915
// Name: MobileNotifSettingsRoutes
// Dependencies: [10991, 1126, 8990, 15359, 16915, 16916, 2896, 16434, 16922, 16923, 16924, 16925, 2]

// Module 16914 (MobileNotifSettingsRoutes)
import intl2 from "intl" /* 1126 */;
import _modDef2896 from "module_2896" /* 2896 */;
import BellIcon from "BellIcon" /* 8990 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15359 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16434 */;
import MobileNotifSettingsSections from "MobileNotifSettingsSections" /* 16915 */;
import SettingBuilders_mod from "SettingBuilders" /* 10991 */;
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
    return intl.string(_modDef2896.S5cB9e);
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
    return intl.string(_modDef2896["UzRF+8"]);
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
    return intl.string(_modDef2896.zRKbpz);
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
    return intl.string(_modDef2896.q5M7HV);
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
