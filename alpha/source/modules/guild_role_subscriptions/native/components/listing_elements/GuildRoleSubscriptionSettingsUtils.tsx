// Module ID: 19427
// Function ID: 19428
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [5235, 6764, 2]
// Exports: getCoverImageURI

// Module 19427 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6764 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 5235 */;
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
