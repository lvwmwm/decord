// Module ID: 8599
// Function ID: 68293
// Name: XBOX_DISCORD_OCID
// Dependencies: [2]
// Exports: buildXboxGamePassStoreDeepLinkUrl, buildXboxGamePassStoreUrl

// Module 8599 (XBOX_DISCORD_OCID)
const result = require("set").fileFinishedImporting("modules/activities/utils/distributorStoreUrls.tsx");

export const XBOX_DISCORD_OCID = "discord7937464";
export const XBOX_GAME_PASS_STORE_HOSTNAME = "www.xbox.com";
export const XBOX_GAME_PASS_PROTOCOL = "msxbox";
export const buildXboxGamePassStoreUrl = function buildXboxGamePassStoreUrl(id) {
  return "https://" + "www.xbox.com" + "/games/store/title/" + encodeURIComponent(id) + "?ocid=" + "discord7937464";
};
export const buildXboxGamePassStoreDeepLinkUrl = function buildXboxGamePassStoreDeepLinkUrl(arg0) {
  return "" + "msxbox" + "://game/?productid=" + encodeURIComponent(arg0) + "&ocid=" + "discord7937464";
};
