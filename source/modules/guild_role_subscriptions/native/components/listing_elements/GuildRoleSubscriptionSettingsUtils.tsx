// Module ID: 15324
// Function ID: 116935
// Name: getCoverImageURI
// Dependencies: [3753, 4370, 2]
// Exports: getCoverImageURI

// Module 15324 (getCoverImageURI)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  applicationIdForGuild = applicationIdForGuild.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let str = "";
  if (tmp2) {
    let obj = require(4370) /* _httpGetWithCountryCodeQuery */;
    str = obj.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  obj = { uri: str };
  return obj;
};
