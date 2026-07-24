// Module ID: 3965
// Function ID: 32825
// Name: isPseudoGuildId
// Dependencies: [654, 1355, 2, 3966]
// Exports: isValidChannelId, isValidGuildId

// Module 3965 (isPseudoGuildId)
import { PSEUDO_GUILD_IDS } from "APP_WITH_INVITE_AND_GUILD_ONBOARDING";
import { isStaticChannelRoute } from "set";

function isPseudoGuildId(stateFromStores) {
  return PSEUDO_GUILD_IDS.includes(stateFromStores);
}
const re2 = /^\d+$/;
const result = require("set").fileFinishedImporting("modules/routing/RouteUtils.tsx");

export const RouteParam = require("paramPattern").RouteParam;
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
