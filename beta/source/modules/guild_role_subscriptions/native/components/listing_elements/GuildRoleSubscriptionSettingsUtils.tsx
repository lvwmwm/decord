// Module ID: 18030
// Function ID: 18031
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4928, 6415, 2]
// Exports: getCoverImageURI

// Module 18030 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6415 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4928 */;
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
