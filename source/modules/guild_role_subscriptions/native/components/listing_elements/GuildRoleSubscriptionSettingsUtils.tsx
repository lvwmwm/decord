// Module ID: 16128
// Function ID: 16129
// Name: getCoverImageURI
// Dependencies: [4115, 4755, 2]
// Exports: getCoverImageURI

// Module 16128 (getCoverImageURI)
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery" /* 4755 */;
import closure_2 from "makeGroupListingIndexSubscriptionListingTag" /* 4115 */;

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
