// Module ID: 15746
// Function ID: 15747
// Name: getCoverImageURI
// Dependencies: [3983, 4604, 2]
// Exports: getCoverImageURI

// Module 15746 (getCoverImageURI)
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  applicationIdForGuild = applicationIdForGuild.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  if (tmp2) {
    uri = require(4604) /* _httpGetWithCountryCodeQuery */.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
    const obj = require(4604) /* _httpGetWithCountryCodeQuery */;
  }
  return { uri };
};
