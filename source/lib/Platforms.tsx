// Module ID: 4814
// Function ID: 42120
// Name: getPlatformUserUrl
// Dependencies: [653, 4815, 688, 4816, 4817, 4818, 4819, 4820, 4821, 4822, 4823, 4824, 4825, 4826, 4827, 4157, 4828, 4829, 4830, 4831, 4832, 4833, 4834, 4835, 4836, 4837, 4838, 4839, 4840, 4841, 4842, 4843, 4844, 4845, 2748, 4846, 4847, 4848, 4849, 4850, 4851, 4852, 4853, 4854, 4855, 4856, 4857, 4858, 4859, 4860, 4861, 4862, 4863, 4864, 4865, 4866, 4867, 4868, 4869, 4870, 4871, 4872, 4873, 4874, 4875, 4876, 4877, 4878, 4879, 4880, 4881, 4882, 4883, 4884, 4885, 4886, 4887, 4888, 4889, 4890, 4891, 4892, 4893, 4894, 4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4903, 4904, 4905, 4906, 4907, 4908, 4909, 4910, 4911, 4912, 4913, 4914, 4915, 4916, 4917, 4918, 4919, 4920, 4921, 4922, 4923, 4924, 4925, 4926, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4937, 22, 1443, 2]

// Module 4814 (getPlatformUserUrl)
import { PlatformTypes } from "ME";
import { ApplicationIdentityConnections } from "items1";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import importDefaultResult from "registerAsset";

let obj = { type: PlatformTypes.TWITCH, name: "Twitch" };
obj.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITCH");
obj = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj.icon = obj;
obj.enabled = true;
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
obj = { type: PlatformTypes.YOUTUBE, name: "YouTube" };
obj.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_YOUTUBE");
obj.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj.enabled = true;
obj.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj.domains = ["youtube.com", "youtu.be"];
items[1] = obj;
const obj2 = { type: PlatformTypes.BATTLENET, name: "Battle.net" };
obj2.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj1 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj2.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
obj2.enabled = true;
obj2.migrationData = {
  replacedBy: ApplicationIdentityConnections.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = require(4157) /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  useMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = require(4157) /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.useConfig({ location }).enabled;
  }
};
items[2] = obj2;
const obj4 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj3 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
obj4.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj4.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj4;
const obj6 = { type: PlatformTypes.BUNGIE, name: "Bungie.net" };
obj6.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj5 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj6.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj6.enabled = true;
items[4] = obj6;
const obj8 = { type: PlatformTypes.SKYPE, name: "Skype" };
obj8.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SKYPE");
const obj7 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj8.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj8.enabled = false;
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj8;
const obj10 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends" };
obj10.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_LOL");
const obj9 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj10.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj10.enabled = true;
const obj11 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj10.migrationData = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(4157) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(4157) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLinkIntlMessage: require("messagesProxy").LFRm9Y
};
items[6] = obj10;
const obj13 = { type: PlatformTypes.STEAM, name: "Steam" };
obj13.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_STEAM");
const obj12 = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(4157) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(4157) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLinkIntlMessage: require("messagesProxy").LFRm9Y
};
obj13.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj13.enabled = true;
obj13.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
obj13.hasMetadata = true;
items[7] = obj13;
const obj15 = { type: PlatformTypes.REDDIT, name: "Reddit" };
obj15.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_REDDIT");
const obj14 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj15.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj15.enabled = true;
obj15.domains = ["reddit.com"];
obj15.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
obj15.hasMetadata = true;
items[8] = obj15;
const obj17 = { type: PlatformTypes.FACEBOOK, name: "Facebook" };
obj17.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj16 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj17.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj17.domains = ["facebook.com"];
obj17.enabled = true;
items[9] = obj17;
const obj19 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter" };
obj19.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITTER");
const obj18 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj19.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj19.enabled = false;
obj19.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj19.domains = ["twitter.com"];
obj19.hasMetadata = true;
items[10] = obj19;
const obj21 = { type: PlatformTypes.TWITTER, name: "X" };
obj21.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITTER");
const obj20 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj21.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj21.enabled = true;
obj21.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj21.domains = ["x.com"];
obj21.hasMetadata = true;
items[11] = obj21;
const obj23 = { type: PlatformTypes.SPOTIFY, name: "Spotify" };
obj23.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj22 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj23.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj23.enabled = true;
obj23.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj23;
const obj25 = { type: PlatformTypes.XBOX, name: "Xbox" };
obj25.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_XBOX");
const obj24 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj25.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), customPNG: require("registerAsset") };
obj25.enabled = true;
items[13] = obj25;
const obj27 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy" };
obj27.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj26 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), customPNG: require("registerAsset") };
obj27.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj27.enabled = false;
items[14] = obj27;
const obj29 = { type: PlatformTypes.GITHUB, name: "GitHub" };
obj29.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_GITHUB");
const obj28 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj29.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj29.enabled = true;
obj29.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj29.domains = ["github.com"];
items[15] = obj29;
const obj31 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network" };
obj31.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj30 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj31.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj31.enabled = true;
items[16] = obj31;
const obj33 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)" };
obj33.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj32 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj33.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj33.enabled = false;
items[17] = obj33;
const obj35 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games" };
const obj34 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj35.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj35.enabled = true;
items[18] = obj35;
const obj37 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games" };
const obj36 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj37.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
obj37.enabled = true;
const obj38 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
obj37.migrationData = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(4157) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(4157) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLinkIntlMessage: require("messagesProxy").LFRm9Y
};
items[19] = obj37;
const obj40 = { type: PlatformTypes.ROBLOX, name: "Roblox" };
const obj39 = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(4157) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(4157) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLinkIntlMessage: require("messagesProxy").LFRm9Y
};
obj40.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj40.enabled = true;
obj40.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj40;
const obj42 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj41 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj42.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[21] = obj42;
const obj44 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true };
const obj43 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj44.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj44.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj44;
const obj46 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true };
const obj45 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj46.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj46.domains = ["tiktok.com"];
obj46.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj46;
const obj48 = { type: PlatformTypes.INSTAGRAM, name: "Instagram" };
const obj47 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj48.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj48.enabled = false;
obj48.domains = ["instagram.com"];
obj48.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj48;
const obj50 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj49 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj50.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj50.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj50;
const obj52 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll" };
obj52.color = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj51 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj52.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj52.enabled = true;
items[26] = obj52;
const obj54 = { type: PlatformTypes.DOMAIN, name: "Domain" };
const obj53 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj54.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
obj54.enabled = true;
items[27] = obj54;
const obj56 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music" };
const obj55 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj56.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj56.enabled = true;
items[28] = obj56;
const obj58 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest" };
const obj57 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj58.icon = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj58.enabled = false;
items[29] = obj58;
const obj59 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
let closure_4 = require("registerAsset").keyBy(items, "type");
let closure_5 = {};
let item = items.forEach((domains) => {
  let closure_0 = domains;
  domains = domains.domains;
  if (null != domains) {
    const item = domains.forEach((arg0) => {
      outer1_5[arg0] = closure_0;
    });
  }
});
const obj60 = {
  get(arg0) {
    let tmp2 = null;
    if (null != table[arg0]) {
      tmp2 = tmp;
    }
    return tmp2;
  },
  getByUrl(outer1_0) {
    const toURLSafeResult = importDefault(1443).toURLSafe(outer1_0);
    if (null != toURLSafeResult) {
      const hostname = toURLSafeResult.hostname;
      let substr = hostname;
      if (hostname.startsWith("www.")) {
        substr = hostname.slice(4);
      }
      return table2[substr];
    }
    const obj = importDefault(1443);
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
const result = require("unsafe_getRawColor").fileFinishedImporting("lib/Platforms.tsx");

export default obj60;
