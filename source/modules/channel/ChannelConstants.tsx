// Module ID: 1355
// Function ID: 16270
// Name: set
// Dependencies: []
// Exports: buildGuildStaticChannelId, isGuildHomeChannel, isStaticChannelRoute

// Module 1355 (set)
let obj = { ROLE_SUBSCRIPTIONS: "role-subscriptions", SERVER_MONETIZATION_ONBOARDING: "server-monetization-onboarding", GAME_SHOP: "game-shop", GUILD_SHOP: "shop", MEMBER_APPLICATIONS: "member-applications", GUILD_HOME: "@home", CHANNEL_BROWSER: "channel-browser", GUILD_ONBOARDING: "onboarding", CUSTOMIZE_COMMUNITY: "customize-community", MEMBER_SAFETY: "member-safety", GUILD_BOOSTS: "boosts", GAME_SERVERS: "game-servers", REPORT_TO_MOD: "report-to-mod", GUILD_OFFICIAL_MESSAGES: "official-messages" };
const set = new Set(Object.values(obj));
obj = { GUILD_HOME: "home", SERVER_GUIDE: "guide", CHANNEL_BROWSER: "browse", CUSTOMIZE_COMMUNITY: "customize", LINKED_ROLES: "linked-roles" };
const frozen = Object.freeze({});
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/channel/ChannelConstants.tsx");

export const StaticChannelRoute = obj;
export const StaticChannelRoutes = set;
export const isStaticChannelRoute = function isStaticChannelRoute(channelId) {
  return set.has(channelId);
};
export const buildGuildStaticChannelId = function buildGuildStaticChannelId(arg0, arg1) {
  return "" + arg0 + "-" + arg1;
};
export const isGuildHomeChannel = function isGuildHomeChannel(channelId) {
  let tmp = null == channelId;
  if (!tmp) {
    tmp = !channelId.includes(obj.GUILD_HOME);
  }
  return !tmp;
};
export const ChannelFlags = frozen;
export const MAX_CHANNEL_TOPIC_LENGTH = 1024;
export const MAX_FORUM_CHANNEL_TOPIC_LENGTH = 4096;
export const StaticChannelId = obj;
export const StaticChannelIds = new Set(Object.values(obj));
