// Module ID: 15141
// Function ID: 114239
// Name: getCoverImageURI
// Dependencies: []
// Exports: getCoverImageURI

// Module 15141 (getCoverImageURI)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  const applicationIdForGuild = applicationIdForGuild.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let str = "";
  if (tmp2) {
    let obj = arg1(dependencyMap[1]);
    str = obj.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  obj = { uri: str };
  return obj;
};
