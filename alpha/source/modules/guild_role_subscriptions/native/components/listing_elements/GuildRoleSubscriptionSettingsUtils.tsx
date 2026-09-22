// Module ID: 16901
// Function ID: 16902
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4389, 4998, 2]
// Exports: getCoverImageURI

// Module 16901 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 4998 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4389 */;

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
