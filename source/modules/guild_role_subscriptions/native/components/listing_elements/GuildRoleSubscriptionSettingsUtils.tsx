// Module ID: 15314
// Function ID: 116807
// Name: getCoverImageURI
// Dependencies: [3752, 4369, 2]
// Exports: getCoverImageURI

// Module 15314 (getCoverImageURI)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  applicationIdForGuild = applicationIdForGuild.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let str = "";
  if (tmp2) {
    let obj = require(4369) /* _httpGetWithCountryCodeQuery */;
    str = obj.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  obj = { uri: str };
  return obj;
};
