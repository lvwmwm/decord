// Module ID: 16893
// Function ID: 16894
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4421, 5029, 2]
// Exports: getCoverImageURI

// Module 16893 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 5029 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4421 */;

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
