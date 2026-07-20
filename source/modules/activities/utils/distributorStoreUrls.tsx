// Module ID: 8587
// Function ID: 68218
// Name: XBOX_DISCORD_OCID
// Dependencies: []
// Exports: buildXboxGamePassStoreDeepLinkUrl, buildXboxGamePassStoreUrl

// Module 8587 (XBOX_DISCORD_OCID)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/utils/distributorStoreUrls.tsx");

export const XBOX_DISCORD_OCID = "discord7937464";
export const XBOX_GAME_PASS_STORE_HOSTNAME = "www.xbox.com";
export const XBOX_GAME_PASS_PROTOCOL = "msxbox";
export const buildXboxGamePassStoreUrl = function buildXboxGamePassStoreUrl(id) {
  return "https://" + "www.xbox.com" + "/games/store/title/" + encodeURIComponent(id) + "?ocid=" + "discord7937464";
};
export const buildXboxGamePassStoreDeepLinkUrl = function buildXboxGamePassStoreDeepLinkUrl(arg0) {
  return "" + "msxbox" + "://game/?productid=" + encodeURIComponent(arg0) + "&ocid=" + "discord7937464";
};
