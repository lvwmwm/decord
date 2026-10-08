// Module ID: 16791
// Function ID: 16792
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4700, 5640, 2]
// Exports: getCoverImageURI

// Module 16791 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 5640 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4700 */;
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
