// Module ID: 18965
// Function ID: 18966
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [5065, 6588, 2]
// Exports: getCoverImageURI

// Module 18965 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6588 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 5065 */;
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
