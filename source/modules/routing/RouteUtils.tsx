// Module ID: 3963
// Function ID: 32817
// Name: isPseudoGuildId
// Dependencies: []
// Exports: isValidChannelId, isValidGuildId

// Module 3963 (isPseudoGuildId)
function isPseudoGuildId(stateFromStores) {
  return PSEUDO_GUILD_IDS.includes(stateFromStores);
}
const PSEUDO_GUILD_IDS = require(dependencyMap[0]).PSEUDO_GUILD_IDS;
const isStaticChannelRoute = require(dependencyMap[1]).isStaticChannelRoute;
let closure_2 = /^\d+$/;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/routing/RouteUtils.tsx");

export const RouteParam = require(dependencyMap[3]).RouteParam;
export { isPseudoGuildId };
export const isValidGuildId = function isValidGuildId(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    const tmp3 = !isPseudoGuildId(guildId);
    let isMatch = !tmp3;
    if (tmp3) {
      isMatch = regex.test(guildId);
    }
    tmp = isMatch;
  }
  return tmp;
};
export const isValidChannelId = function isValidChannelId(channelId) {
  let tmp = null == channelId;
  if (!tmp) {
    const tmp3 = !regex.test(channelId);
    let tmp4 = !tmp3;
    if (tmp3) {
      tmp4 = isStaticChannelRoute(channelId);
    }
    tmp = tmp4;
  }
  return tmp;
};
