// Module ID: 16242
// Function ID: 16243
// Name: MobileNotifSettingsRouteBuilders
// Dependencies: [1126, 2891, 15701, 2]
// Exports: buildCategoryOtherSettingsSection, buildCategoryServerSettingsSection, buildCategorySocialSettingsSection, buildOverviewCategoriesSection, buildRealtimeSettingsSection

// Module 16242 (MobileNotifSettingsRouteBuilders)
import intl2 from "intl" /* 1126 */;
import _modDef2891 from "module_2891" /* 2891 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15701 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRouteBuilders.tsx");

export const buildOverviewCategoriesSection = function buildOverviewCategoriesSection() {
  let intl;
  let items;
  const obj = { label: intl.string(_modDef2891["/UdAvP"]), settings: items };
  intl = intl2.intl;
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_REALTIME, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVER, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_OTHER];
  return obj;
};
export function buildRealtimeSettingsSection() {
  return { settings: [] };
}
export const buildCategorySocialSettingsSection = function buildCategorySocialSettingsSection() {
  let items;
  const obj = { settings: items };
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_DEFAULT];
  return obj;
};
export function buildCategoryServerSettingsSection() {
  return { settings: [] };
}
export function buildCategoryOtherSettingsSection() {
  return { settings: [] };
}
