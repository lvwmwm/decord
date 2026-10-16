// Module ID: 17618
// Function ID: 17619
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4802, 5862, 2]
// Exports: getCoverImageURI

// Module 17618 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 5862 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4802 */;
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
