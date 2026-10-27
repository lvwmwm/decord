// Module ID: 18035
// Function ID: 18036
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4897, 6384, 2]
// Exports: getCoverImageURI

// Module 18035 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6384 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4897 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  const applicationIdForGuild = GuildRoleSubscriptionsStore.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  const tmp2 = null != applicationIdForGuild && null != subscriptionsSettings.cover_image_asset;
  if (tmp2) {
    const obj = StoreUtils;
    uri = obj.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  return { uri };
};
