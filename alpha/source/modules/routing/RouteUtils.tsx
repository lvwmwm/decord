// Module ID: 5367
// Function ID: 5368
// Name: RouteUtils
// Dependencies: [1073, 5162, 2, 5368]
// Exports: isPseudoGuildId, isValidChannelId, isValidGuildId

// Module 5367 (RouteUtils)
import RouteConstants from "RouteConstants" /* 1073 */;
import ChannelConstants from "ChannelConstants" /* 5162 */;
import RouteParam from "RouteParam" /* 5368 */;
import size from "module_2" /* 2 */;

const PSEUDO_GUILD_IDS = RouteConstants.PSEUDO_GUILD_IDS;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const re2 = /^\d+$/;
const result = size.fileFinishedImporting("modules/routing/RouteUtils.tsx");
const RouteParam_export = RouteParam.RouteParam;

export { RouteParam_export as RouteParam };
export function isPseudoGuildId(guildId) {
  return PSEUDO_GUILD_IDS.includes(guildId);
}
export function isValidGuildId(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    const hasItem = PSEUDO_GUILD_IDS.includes(guildId) || re2.test(guildId);
    tmp = hasItem;
  }
  return tmp;
}
export function isValidChannelId(channelId) {
  let tmp = null == channelId;
  if (!tmp) {
    const isMatch = re2.test(channelId) || isStaticChannelRoute(channelId);
    tmp = isMatch;
  }
  return tmp;
}
