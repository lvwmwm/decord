// Module ID: 16540
// Function ID: 16541
// Name: getCoverImageURI
// Dependencies: [4193, 4802, 2]
// Exports: getCoverImageURI

// Module 16540 (getCoverImageURI)
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery" /* 4802 */;
import closure_2 from "makeGroupListingIndexSubscriptionListingTag" /* 4193 */;

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
