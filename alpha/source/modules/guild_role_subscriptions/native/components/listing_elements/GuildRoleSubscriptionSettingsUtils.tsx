// Module ID: 19007
// Function ID: 19008
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [5067, 6590, 2]
// Exports: getCoverImageURI

// Module 19007 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6590 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 5067 */;
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
