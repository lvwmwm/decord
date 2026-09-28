// Module ID: 16191
// Function ID: 16192
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4462, 5092, 2]
// Exports: getCoverImageURI

// Module 16191 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 5092 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4462 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  const applicationIdForGuild = GuildRoleSubscriptionsStore.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  if (tmp2) {
    uri = StoreUtils.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  return { uri };
};
