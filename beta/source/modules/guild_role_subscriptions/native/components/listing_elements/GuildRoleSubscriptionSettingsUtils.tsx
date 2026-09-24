// Module ID: 16903
// Function ID: 16904
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4425, 5031, 2]
// Exports: getCoverImageURI

// Module 16903 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 5031 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4425 */;

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
