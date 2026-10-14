// Module ID: 17344
// Function ID: 17345
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4745, 5649, 2]
// Exports: getCoverImageURI

// Module 17344 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 5649 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4745 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  const applicationIdForGuild = GuildRoleSubscriptionsStore.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  const tmp2 = null != applicationIdForGuild && null != subscriptionsSettings.cover_image_asset;
  if (tmp2) {
    const obj = StoreUtils;
    uri = obj.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  return { uri };
};
