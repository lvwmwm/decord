// Module ID: 4810
// Function ID: 42041
// Name: getPlatformUserUrl
// Dependencies: []

// Module 4810 (getPlatformUserUrl)
const PlatformTypes = require(dependencyMap[0]).PlatformTypes;
const ApplicationIdentityConnections = require(dependencyMap[1]).ApplicationIdentityConnections;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch" };
const _module = require(dependencyMap[2]);
obj.color = _module.unsafe_getRawColor("PLATFORM_TWITCH");
obj = { lightPNG: require(dependencyMap[3]), darkPNG: require(dependencyMap[3]), whitePNG: require(dependencyMap[4]), lightSVG: require(dependencyMap[5]), darkSVG: require(dependencyMap[5]), whiteSVG: require(dependencyMap[6]) };
obj.icon = obj;
obj.enabled = true;
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["WMF_DIRECT_3D_AMD", "r"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
obj = { type: PlatformTypes.YOUTUBE, name: "YouTube" };
const _module1 = require(dependencyMap[2]);
obj.color = _module1.unsafe_getRawColor("PLATFORM_YOUTUBE");
obj.icon = { lightPNG: require(dependencyMap[7]), darkPNG: require(dependencyMap[7]), whitePNG: require(dependencyMap[8]), lightSVG: require(dependencyMap[9]), darkSVG: require(dependencyMap[9]), whiteSVG: require(dependencyMap[10]) };
obj.enabled = true;
obj.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj.domains = ["activeOffsetY", "activeOffsetX"];
items[1] = obj;
const obj2 = { type: PlatformTypes.BATTLENET, name: "Battle.net" };
const _module2 = require(dependencyMap[2]);
obj2.color = _module2.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj1 = { lightPNG: require(dependencyMap[7]), darkPNG: require(dependencyMap[7]), whitePNG: require(dependencyMap[8]), lightSVG: require(dependencyMap[9]), darkSVG: require(dependencyMap[9]), whiteSVG: require(dependencyMap[10]) };
obj2.icon = { lightPNG: require(dependencyMap[11]), darkPNG: require(dependencyMap[11]), whitePNG: require(dependencyMap[12]), lightSVG: require(dependencyMap[13]), darkSVG: require(dependencyMap[13]), whiteSVG: require(dependencyMap[14]), blackSVG: require(dependencyMap[13]) };
obj2.enabled = true;
obj2.migrationData = {
  replacedBy: ApplicationIdentityConnections.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = require(dependencyMap[15]).battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  useMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = require(dependencyMap[15]).battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.useConfig({ location }).enabled;
  }
};
items[2] = obj2;
const obj4 = { type: PlatformTypes.BLUESKY };
const obj3 = { lightPNG: require(dependencyMap[11]), darkPNG: require(dependencyMap[11]), whitePNG: require(dependencyMap[12]), lightSVG: require(dependencyMap[13]), darkSVG: require(dependencyMap[13]), whiteSVG: require(dependencyMap[14]), blackSVG: require(dependencyMap[13]) };
obj4.icon = { lightPNG: require(dependencyMap[16]), darkPNG: require(dependencyMap[16]), whitePNG: require(dependencyMap[17]), lightSVG: require(dependencyMap[18]), darkSVG: require(dependencyMap[18]), whiteSVG: require(dependencyMap[19]) };
obj4.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj4;
const obj6 = { type: PlatformTypes.BUNGIE, name: "Bungie.net" };
const _module3 = require(dependencyMap[2]);
obj6.color = _module3.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj5 = { lightPNG: require(dependencyMap[16]), darkPNG: require(dependencyMap[16]), whitePNG: require(dependencyMap[17]), lightSVG: require(dependencyMap[18]), darkSVG: require(dependencyMap[18]), whiteSVG: require(dependencyMap[19]) };
obj6.icon = { lightPNG: require(dependencyMap[20]), darkPNG: require(dependencyMap[21]), whitePNG: require(dependencyMap[22]), lightSVG: require(dependencyMap[23]), darkSVG: require(dependencyMap[24]), whiteSVG: require(dependencyMap[25]) };
obj6.enabled = true;
items[4] = obj6;
const obj8 = { type: PlatformTypes.SKYPE, name: "Skype" };
const _module4 = require(dependencyMap[2]);
obj8.color = _module4.unsafe_getRawColor("PLATFORM_SKYPE");
const obj7 = { lightPNG: require(dependencyMap[20]), darkPNG: require(dependencyMap[21]), whitePNG: require(dependencyMap[22]), lightSVG: require(dependencyMap[23]), darkSVG: require(dependencyMap[24]), whiteSVG: require(dependencyMap[25]) };
obj8.icon = { lightPNG: require(dependencyMap[26]), darkPNG: require(dependencyMap[26]), whitePNG: require(dependencyMap[27]), lightSVG: require(dependencyMap[28]), darkSVG: require(dependencyMap[28]), whiteSVG: require(dependencyMap[29]) };
obj8.enabled = false;
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj8;
const obj10 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends" };
const _module5 = require(dependencyMap[2]);
obj10.color = _module5.unsafe_getRawColor("PLATFORM_LOL");
const obj9 = { lightPNG: require(dependencyMap[26]), darkPNG: require(dependencyMap[26]), whitePNG: require(dependencyMap[27]), lightSVG: require(dependencyMap[28]), darkSVG: require(dependencyMap[28]), whiteSVG: require(dependencyMap[29]) };
obj10.icon = { lightPNG: require(dependencyMap[30]), darkPNG: require(dependencyMap[30]), whitePNG: require(dependencyMap[31]), lightSVG: require(dependencyMap[32]), darkSVG: require(dependencyMap[32]), whiteSVG: require(dependencyMap[33]) };
obj10.enabled = true;
const obj11 = { lightPNG: require(dependencyMap[30]), darkPNG: require(dependencyMap[30]), whitePNG: require(dependencyMap[31]), lightSVG: require(dependencyMap[32]), darkSVG: require(dependencyMap[32]), whiteSVG: require(dependencyMap[33]) };
obj10.migrationData = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[15]);
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[15]);
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLinkIntlMessage: importDefault(dependencyMap[34]).LFRm9Y
};
items[6] = obj10;
const obj13 = { type: PlatformTypes.STEAM, name: "Steam" };
const _module6 = require(dependencyMap[2]);
obj13.color = _module6.unsafe_getRawColor("PLATFORM_STEAM");
const obj12 = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[15]);
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[15]);
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLinkIntlMessage: importDefault(dependencyMap[34]).LFRm9Y
};
obj13.icon = { lightPNG: require(dependencyMap[35]), darkPNG: require(dependencyMap[36]), whitePNG: require(dependencyMap[36]), lightSVG: require(dependencyMap[37]), darkSVG: require(dependencyMap[38]), whiteSVG: require(dependencyMap[38]) };
obj13.enabled = true;
obj13.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
obj13.hasMetadata = true;
items[7] = obj13;
const obj15 = { type: PlatformTypes.REDDIT, name: "Reddit" };
const _module7 = require(dependencyMap[2]);
obj15.color = _module7.unsafe_getRawColor("PLATFORM_REDDIT");
const obj14 = { lightPNG: require(dependencyMap[35]), darkPNG: require(dependencyMap[36]), whitePNG: require(dependencyMap[36]), lightSVG: require(dependencyMap[37]), darkSVG: require(dependencyMap[38]), whiteSVG: require(dependencyMap[38]) };
obj15.icon = { lightPNG: require(dependencyMap[39]), darkPNG: require(dependencyMap[39]), whitePNG: require(dependencyMap[40]), lightSVG: require(dependencyMap[41]), darkSVG: require(dependencyMap[41]), whiteSVG: require(dependencyMap[42]) };
obj15.enabled = true;
obj15.domains = ["minDist"];
obj15.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
obj15.hasMetadata = true;
items[8] = obj15;
const obj17 = { type: PlatformTypes.FACEBOOK, name: "Facebook" };
const _module8 = require(dependencyMap[2]);
obj17.color = _module8.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj16 = { lightPNG: require(dependencyMap[39]), darkPNG: require(dependencyMap[39]), whitePNG: require(dependencyMap[40]), lightSVG: require(dependencyMap[41]), darkSVG: require(dependencyMap[41]), whiteSVG: require(dependencyMap[42]) };
obj17.icon = { lightPNG: require(dependencyMap[43]), darkPNG: require(dependencyMap[43]), whitePNG: require(dependencyMap[44]), lightSVG: require(dependencyMap[45]), darkSVG: require(dependencyMap[45]), whiteSVG: require(dependencyMap[46]) };
obj17.domains = ["<string:3301834756>"];
obj17.enabled = true;
items[9] = obj17;
const obj19 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter" };
const _module9 = require(dependencyMap[2]);
obj19.color = _module9.unsafe_getRawColor("PLATFORM_TWITTER");
const obj18 = { lightPNG: require(dependencyMap[43]), darkPNG: require(dependencyMap[43]), whitePNG: require(dependencyMap[44]), lightSVG: require(dependencyMap[45]), darkSVG: require(dependencyMap[45]), whiteSVG: require(dependencyMap[46]) };
obj19.icon = { lightPNG: require(dependencyMap[47]), darkPNG: require(dependencyMap[47]), whitePNG: require(dependencyMap[48]), lightSVG: require(dependencyMap[49]), darkSVG: require(dependencyMap[49]), whiteSVG: require(dependencyMap[50]) };
obj19.enabled = false;
obj19.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj19.domains = ["<string:80006912>"];
obj19.hasMetadata = true;
items[10] = obj19;
const obj21 = { type: PlatformTypes.TWITTER, name: "X" };
const _module10 = require(dependencyMap[2]);
obj21.color = _module10.unsafe_getRawColor("PLATFORM_TWITTER");
const obj20 = { lightPNG: require(dependencyMap[47]), darkPNG: require(dependencyMap[47]), whitePNG: require(dependencyMap[48]), lightSVG: require(dependencyMap[49]), darkSVG: require(dependencyMap[49]), whiteSVG: require(dependencyMap[50]) };
obj21.icon = { lightPNG: require(dependencyMap[51]), darkPNG: require(dependencyMap[52]), whitePNG: require(dependencyMap[53]), lightSVG: require(dependencyMap[54]), darkSVG: require(dependencyMap[55]), whiteSVG: require(dependencyMap[56]) };
obj21.enabled = true;
obj21.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj21.domains = [null];
obj21.hasMetadata = true;
items[11] = obj21;
const obj23 = { type: PlatformTypes.SPOTIFY, name: "Spotify" };
const _module11 = require(dependencyMap[2]);
obj23.color = _module11.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj22 = { lightPNG: require(dependencyMap[51]), darkPNG: require(dependencyMap[52]), whitePNG: require(dependencyMap[53]), lightSVG: require(dependencyMap[54]), darkSVG: require(dependencyMap[55]), whiteSVG: require(dependencyMap[56]) };
obj23.icon = { lightPNG: require(dependencyMap[57]), darkPNG: require(dependencyMap[57]), whitePNG: require(dependencyMap[58]), lightSVG: require(dependencyMap[59]), darkSVG: require(dependencyMap[59]), whiteSVG: require(dependencyMap[60]) };
obj23.enabled = true;
obj23.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj23;
const obj25 = { type: PlatformTypes.XBOX, name: "Xbox" };
const _module12 = require(dependencyMap[2]);
obj25.color = _module12.unsafe_getRawColor("PLATFORM_XBOX");
const obj24 = { lightPNG: require(dependencyMap[57]), darkPNG: require(dependencyMap[57]), whitePNG: require(dependencyMap[58]), lightSVG: require(dependencyMap[59]), darkSVG: require(dependencyMap[59]), whiteSVG: require(dependencyMap[60]) };
obj25.icon = { lightPNG: require(dependencyMap[61]), darkPNG: require(dependencyMap[62]), whitePNG: require(dependencyMap[62]), lightSVG: require(dependencyMap[63]), darkSVG: require(dependencyMap[64]), whiteSVG: require(dependencyMap[64]), customPNG: require(dependencyMap[65]) };
obj25.enabled = true;
items[13] = obj25;
const obj27 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy" };
const _module13 = require(dependencyMap[2]);
obj27.color = _module13.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj26 = { lightPNG: require(dependencyMap[61]), darkPNG: require(dependencyMap[62]), whitePNG: require(dependencyMap[62]), lightSVG: require(dependencyMap[63]), darkSVG: require(dependencyMap[64]), whiteSVG: require(dependencyMap[64]), customPNG: require(dependencyMap[65]) };
obj27.icon = { lightPNG: require(dependencyMap[66]), darkPNG: require(dependencyMap[66]), whitePNG: require(dependencyMap[67]), lightSVG: require(dependencyMap[68]), darkSVG: require(dependencyMap[68]), whiteSVG: require(dependencyMap[69]) };
obj27.enabled = false;
items[14] = obj27;
const obj29 = { type: PlatformTypes.GITHUB, name: "GitHub" };
const _module14 = require(dependencyMap[2]);
obj29.color = _module14.unsafe_getRawColor("PLATFORM_GITHUB");
const obj28 = { lightPNG: require(dependencyMap[66]), darkPNG: require(dependencyMap[66]), whitePNG: require(dependencyMap[67]), lightSVG: require(dependencyMap[68]), darkSVG: require(dependencyMap[68]), whiteSVG: require(dependencyMap[69]) };
obj29.icon = { lightPNG: require(dependencyMap[70]), darkPNG: require(dependencyMap[71]), whitePNG: require(dependencyMap[71]), lightSVG: require(dependencyMap[72]), darkSVG: require(dependencyMap[73]), whiteSVG: require(dependencyMap[73]) };
obj29.enabled = true;
obj29.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj29.domains = [-516023591197968000000000000000000000000000000000000000000000000000000000000000000000];
items[15] = obj29;
const obj31 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network" };
const _module15 = require(dependencyMap[2]);
obj31.color = _module15.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj30 = { lightPNG: require(dependencyMap[70]), darkPNG: require(dependencyMap[71]), whitePNG: require(dependencyMap[71]), lightSVG: require(dependencyMap[72]), darkSVG: require(dependencyMap[73]), whiteSVG: require(dependencyMap[73]) };
obj31.icon = { lightPNG: require(dependencyMap[74]), darkPNG: require(dependencyMap[75]), whitePNG: require(dependencyMap[75]), lightSVG: require(dependencyMap[76]), darkSVG: require(dependencyMap[77]), whiteSVG: require(dependencyMap[77]) };
obj31.enabled = true;
items[16] = obj31;
const obj33 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)" };
const _module16 = require(dependencyMap[2]);
obj33.color = _module16.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj32 = { lightPNG: require(dependencyMap[74]), darkPNG: require(dependencyMap[75]), whitePNG: require(dependencyMap[75]), lightSVG: require(dependencyMap[76]), darkSVG: require(dependencyMap[77]), whiteSVG: require(dependencyMap[77]) };
obj33.icon = { lightPNG: require(dependencyMap[75]), darkPNG: require(dependencyMap[74]), whitePNG: require(dependencyMap[74]), lightSVG: require(dependencyMap[77]), darkSVG: require(dependencyMap[76]), whiteSVG: require(dependencyMap[76]) };
obj33.enabled = false;
items[17] = obj33;
const obj35 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games" };
const obj34 = { lightPNG: require(dependencyMap[75]), darkPNG: require(dependencyMap[74]), whitePNG: require(dependencyMap[74]), lightSVG: require(dependencyMap[77]), darkSVG: require(dependencyMap[76]), whiteSVG: require(dependencyMap[76]) };
obj35.icon = { lightPNG: require(dependencyMap[78]), darkPNG: require(dependencyMap[79]), whitePNG: require(dependencyMap[79]), lightSVG: require(dependencyMap[80]), darkSVG: require(dependencyMap[81]), whiteSVG: require(dependencyMap[81]) };
obj35.enabled = true;
items[18] = obj35;
const obj37 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games" };
const obj36 = { lightPNG: require(dependencyMap[78]), darkPNG: require(dependencyMap[79]), whitePNG: require(dependencyMap[79]), lightSVG: require(dependencyMap[80]), darkSVG: require(dependencyMap[81]), whiteSVG: require(dependencyMap[81]) };
obj37.icon = { lightPNG: require(dependencyMap[82]), darkPNG: require(dependencyMap[82]), whitePNG: require(dependencyMap[83]), lightSVG: require(dependencyMap[84]), darkSVG: require(dependencyMap[84]), whiteSVG: require(dependencyMap[85]), blackSVG: require(dependencyMap[86]) };
obj37.enabled = true;
const obj38 = { lightPNG: require(dependencyMap[82]), darkPNG: require(dependencyMap[82]), whitePNG: require(dependencyMap[83]), lightSVG: require(dependencyMap[84]), darkSVG: require(dependencyMap[84]), whiteSVG: require(dependencyMap[85]), blackSVG: require(dependencyMap[86]) };
obj37.migrationData = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[15]);
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[15]);
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLinkIntlMessage: importDefault(dependencyMap[34]).LFRm9Y
};
items[19] = obj37;
const obj40 = { type: PlatformTypes.ROBLOX, name: "Roblox" };
const obj39 = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[15]);
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[15]);
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLinkIntlMessage: importDefault(dependencyMap[34]).LFRm9Y
};
obj40.icon = { lightPNG: require(dependencyMap[87]), darkPNG: require(dependencyMap[88]), whitePNG: require(dependencyMap[89]), lightSVG: require(dependencyMap[90]), darkSVG: require(dependencyMap[91]), whiteSVG: require(dependencyMap[92]) };
obj40.enabled = true;
obj40.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj40;
const obj42 = { type: PlatformTypes.PAYPAL };
const obj41 = { lightPNG: require(dependencyMap[87]), darkPNG: require(dependencyMap[88]), whitePNG: require(dependencyMap[89]), lightSVG: require(dependencyMap[90]), darkSVG: require(dependencyMap[91]), whiteSVG: require(dependencyMap[92]) };
obj42.icon = { lightPNG: require(dependencyMap[93]), darkPNG: require(dependencyMap[93]), whitePNG: require(dependencyMap[94]), lightSVG: require(dependencyMap[95]), darkSVG: require(dependencyMap[95]), whiteSVG: require(dependencyMap[96]) };
items[21] = obj42;
const obj44 = { type: PlatformTypes.EBAY };
const obj43 = { lightPNG: require(dependencyMap[93]), darkPNG: require(dependencyMap[93]), whitePNG: require(dependencyMap[94]), lightSVG: require(dependencyMap[95]), darkSVG: require(dependencyMap[95]), whiteSVG: require(dependencyMap[96]) };
obj44.icon = { lightPNG: require(dependencyMap[97]), darkPNG: require(dependencyMap[97]), whitePNG: require(dependencyMap[98]), lightSVG: require(dependencyMap[99]), darkSVG: require(dependencyMap[99]), whiteSVG: require(dependencyMap[100]) };
obj44.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj44;
const obj46 = { type: PlatformTypes.TIKTOK };
const obj45 = { lightPNG: require(dependencyMap[97]), darkPNG: require(dependencyMap[97]), whitePNG: require(dependencyMap[98]), lightSVG: require(dependencyMap[99]), darkSVG: require(dependencyMap[99]), whiteSVG: require(dependencyMap[100]) };
obj46.icon = { lightPNG: require(dependencyMap[101]), darkPNG: require(dependencyMap[102]), whitePNG: require(dependencyMap[102]), lightSVG: require(dependencyMap[103]), darkSVG: require(dependencyMap[104]), whiteSVG: require(dependencyMap[104]) };
obj46.domains = [null];
obj46.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj46;
const obj48 = { type: PlatformTypes.INSTAGRAM, name: "Instagram" };
const obj47 = { lightPNG: require(dependencyMap[101]), darkPNG: require(dependencyMap[102]), whitePNG: require(dependencyMap[102]), lightSVG: require(dependencyMap[103]), darkSVG: require(dependencyMap[104]), whiteSVG: require(dependencyMap[104]) };
obj48.icon = { lightPNG: require(dependencyMap[105]), darkPNG: require(dependencyMap[105]), whitePNG: require(dependencyMap[106]), lightSVG: require(dependencyMap[107]), darkSVG: require(dependencyMap[107]), whiteSVG: require(dependencyMap[108]) };
obj48.enabled = false;
obj48.domains = ["activateAfterLongPress"];
obj48.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj48;
const obj50 = { type: PlatformTypes.MASTODON };
const obj49 = { lightPNG: require(dependencyMap[105]), darkPNG: require(dependencyMap[105]), whitePNG: require(dependencyMap[106]), lightSVG: require(dependencyMap[107]), darkSVG: require(dependencyMap[107]), whiteSVG: require(dependencyMap[108]) };
obj50.icon = { lightPNG: require(dependencyMap[109]), darkPNG: require(dependencyMap[109]), whitePNG: require(dependencyMap[110]), lightSVG: require(dependencyMap[111]), darkSVG: require(dependencyMap[111]), whiteSVG: require(dependencyMap[112]) };
obj50.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj50;
const obj52 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll" };
const _module17 = require(dependencyMap[2]);
obj52.color = _module17.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj51 = { lightPNG: require(dependencyMap[109]), darkPNG: require(dependencyMap[109]), whitePNG: require(dependencyMap[110]), lightSVG: require(dependencyMap[111]), darkSVG: require(dependencyMap[111]), whiteSVG: require(dependencyMap[112]) };
obj52.icon = { lightPNG: require(dependencyMap[113]), darkPNG: require(dependencyMap[113]), whitePNG: require(dependencyMap[113]), lightSVG: require(dependencyMap[114]), darkSVG: require(dependencyMap[114]), whiteSVG: require(dependencyMap[115]) };
obj52.enabled = true;
items[26] = obj52;
const obj54 = { type: PlatformTypes.DOMAIN, name: "Domain" };
const obj53 = { lightPNG: require(dependencyMap[113]), darkPNG: require(dependencyMap[113]), whitePNG: require(dependencyMap[113]), lightSVG: require(dependencyMap[114]), darkSVG: require(dependencyMap[114]), whiteSVG: require(dependencyMap[115]) };
obj54.icon = { lightPNG: require(dependencyMap[116]), darkPNG: require(dependencyMap[117]), whitePNG: require(dependencyMap[117]), lightSVG: require(dependencyMap[118]), darkSVG: require(dependencyMap[119]), whiteSVG: require(dependencyMap[119]) };
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
obj54.enabled = true;
items[27] = obj54;
const obj56 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music" };
const obj55 = { lightPNG: require(dependencyMap[116]), darkPNG: require(dependencyMap[117]), whitePNG: require(dependencyMap[117]), lightSVG: require(dependencyMap[118]), darkSVG: require(dependencyMap[119]), whiteSVG: require(dependencyMap[119]) };
obj56.icon = { lightPNG: require(dependencyMap[120]), darkPNG: require(dependencyMap[120]), whitePNG: require(dependencyMap[120]), lightSVG: require(dependencyMap[121]), darkSVG: require(dependencyMap[121]), whiteSVG: require(dependencyMap[121]) };
obj56.enabled = true;
items[28] = obj56;
const obj58 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest" };
const obj57 = { lightPNG: require(dependencyMap[120]), darkPNG: require(dependencyMap[120]), whitePNG: require(dependencyMap[120]), lightSVG: require(dependencyMap[121]), darkSVG: require(dependencyMap[121]), whiteSVG: require(dependencyMap[121]) };
obj58.icon = { lightPNG: require(dependencyMap[122]), darkPNG: require(dependencyMap[123]), whitePNG: require(dependencyMap[124]), lightSVG: require(dependencyMap[125]), darkSVG: require(dependencyMap[126]), whiteSVG: require(dependencyMap[126]) };
obj58.enabled = false;
items[29] = obj58;
const obj59 = { lightPNG: require(dependencyMap[122]), darkPNG: require(dependencyMap[123]), whitePNG: require(dependencyMap[124]), lightSVG: require(dependencyMap[125]), darkSVG: require(dependencyMap[126]), whiteSVG: require(dependencyMap[126]) };
let closure_4 = importDefault(dependencyMap[127]).keyBy(items, "type");
let closure_5 = {};
const item = items.forEach((domains) => {
  const require = domains;
  domains = domains.domains;
  if (null != domains) {
    const item = domains.forEach((arg0) => {
      closure_5[arg0] = arg0;
    });
  }
});
const _module18 = require(dependencyMap[129]);
const result = _module18.fileFinishedImporting("lib/Platforms.tsx");

export default {
  get(arg0) {
    let tmp2 = null;
    if (null != closure_4[arg0]) {
      tmp2 = tmp;
    }
    return tmp2;
  },
  getByUrl(closure_0) {
    const toURLSafeResult = importDefault(dependencyMap[128]).toURLSafe(closure_0);
    if (null != toURLSafeResult) {
      const hostname = toURLSafeResult.hostname;
      let substr = hostname;
      if (hostname.startsWith("www.")) {
        substr = hostname.slice(4);
      }
      return closure_5[substr];
    }
    const obj = importDefault(dependencyMap[128]);
  },
  isSupported(arg0) {
    return hasOwnProperty.call(closure_4, arg0);
  },
  map(arg0) {
    return items.map(arg0);
  },
  filter(arg0) {
    const found = items.filter(arg0);
    const sorted = found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    return found;
  },
  find(arg0) {
    return items.find(arg0);
  }
};
