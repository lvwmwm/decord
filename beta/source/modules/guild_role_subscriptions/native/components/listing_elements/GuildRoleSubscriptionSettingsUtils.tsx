// Module ID: 19016
// Function ID: 19017
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [5095, 6620, 2]
// Exports: getCoverImageURI

// Module 19016 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6620 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 5095 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export function getCoverImageURI(subscriptionsSettings) {
  const applicationIdForGuild = GuildRoleSubscriptionsStore.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  const tmp2 = null != applicationIdForGuild && null != subscriptionsSettings.cover_image_asset;
  if (tmp2) {
    const obj = StoreUtils;
    uri = obj.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  return { uri };
}
