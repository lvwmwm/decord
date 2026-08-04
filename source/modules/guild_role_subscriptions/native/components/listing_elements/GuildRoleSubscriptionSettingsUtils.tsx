// Module ID: 15530
// Function ID: 15531
// Name: getCoverImageURI
// Dependencies: [3907, 4522, 2]
// Exports: getCoverImageURI

// Module 15530 (getCoverImageURI)
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
