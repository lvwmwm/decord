// Module ID: 16059
// Function ID: 16060
// Name: getCoverImageURI
// Dependencies: [4084, 4721, 2]
// Exports: getCoverImageURI

// Module 16059 (getCoverImageURI)
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery" /* 4721 */;
import closure_2 from "makeGroupListingIndexSubscriptionListingTag" /* 4084 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  applicationIdForGuild = applicationIdForGuild.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  if (tmp2) {
    uri = _httpGetWithCountryCodeQuery.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
    const obj = _httpGetWithCountryCodeQuery;
  }
  return { uri };
};
