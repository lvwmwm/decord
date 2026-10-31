// Module ID: 18609
// Function ID: 18610
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4939, 6455, 2]
// Exports: getCoverImageURI

// Module 18609 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6455 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4939 */;
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
