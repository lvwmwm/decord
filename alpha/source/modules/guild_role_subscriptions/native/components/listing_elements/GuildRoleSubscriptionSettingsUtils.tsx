// Module ID: 17820
// Function ID: 17821
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4894, 6362, 2]
// Exports: getCoverImageURI

// Module 17820 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6362 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4894 */;
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
