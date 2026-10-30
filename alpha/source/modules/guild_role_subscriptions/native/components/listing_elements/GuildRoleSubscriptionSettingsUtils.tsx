// Module ID: 18566
// Function ID: 18567
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4934, 6449, 2]
// Exports: getCoverImageURI

// Module 18566 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6449 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4934 */;
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
