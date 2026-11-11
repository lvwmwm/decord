// Module ID: 19193
// Function ID: 19194
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [5168, 6703, 2]
// Exports: getCoverImageURI

// Module 19193 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6703 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 5168 */;
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
