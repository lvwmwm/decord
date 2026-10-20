// Module ID: 17739
// Function ID: 17740
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4873, 6340, 2]
// Exports: getCoverImageURI

// Module 17739 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6340 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4873 */;
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
