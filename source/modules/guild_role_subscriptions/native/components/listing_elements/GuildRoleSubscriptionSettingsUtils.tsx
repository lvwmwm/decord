// Module ID: 15548
// Function ID: 15549
// Name: getCoverImageURI
// Dependencies: [3906, 4522, 2]
// Exports: getCoverImageURI

// Module 15548 (getCoverImageURI)
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  applicationIdForGuild = applicationIdForGuild.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  if (tmp2) {
    uri = require(4522) /* _httpGetWithCountryCodeQuery */.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
    const obj = require(4522) /* _httpGetWithCountryCodeQuery */;
  }
  return { uri };
};
