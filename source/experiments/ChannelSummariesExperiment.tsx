// Module ID: 9443
// Function ID: 73736
// Name: canSeeChannelSummaries
// Dependencies: [1391, 1838, 653, 1355, 1841, 624, 2]
// Exports: channelEligibleForSummaries, useChannelSummariesExperiment, useGuildEligibleForSummaries

// Module 9443 (canSeeChannelSummaries)
import { isGuildNSFW } from "isGuildOwner";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import { ChannelFlags } from "set";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
function canSeeChannelSummaries(channel, flag, flag2) {
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  let tmp = null != channel;
  if (tmp) {
    let flag4 = false;
    if (null != channel) {
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      let str = "";
      if (null != guild_id) {
        str = guild_id;
      }
      const guild = store.getGuild(str);
      const SUMMARIZEABLE = constants.SUMMARIZEABLE;
      const tmp5 = null != guild && guild.rulesChannelId === channel.id;
      const tmp7 = isGuildNSFW(guild);
      flag4 = SUMMARIZEABLE.has(channel.type) && !channel.isNSFW() && !(null != guild && guild.rulesChannelId === channel.id) && !isGuildNSFW(guild);
      const tmp9 = SUMMARIZEABLE.has(channel.type) && !channel.isNSFW() && !(null != guild && guild.rulesChannelId === channel.id) && !isGuildNSFW(guild);
    }
    let tmp11 = !tmp10;
    if (!!flag4) {
      let tmp12 = false !== flag;
      if (!tmp12) {
        tmp12 = !channel.hasFlag(ChannelFlags.SUMMARIES_DISABLED);
      }
      if (tmp12) {
        tmp12 = canGuildUseConversationSummaries(store.getGuild(channel.guild_id), flag2);
      }
      tmp11 = tmp12;
    }
    tmp = tmp11;
  }
  return tmp;
}
function canGuildUseConversationSummaries(guild, flag2) {
  let flag = flag2;
  if (flag2 === undefined) {
    flag = true;
  }
  let tmp = null != guild;
  if (tmp) {
    const id = guild.id;
    let tmp2 = null != id;
    if (tmp2) {
      let isFavoritesGuildIdResult = id === closure_4;
      if (!isFavoritesGuildIdResult) {
        isFavoritesGuildIdResult = require(1841) /* isFavoritesGuildId */.isFavoritesGuildId(id);
        const obj = require(1841) /* isFavoritesGuildId */;
      }
      tmp2 = isFavoritesGuildIdResult;
    }
    let tmp7 = !tmp2;
    if (tmp7) {
      const features = guild.features;
      const tmp9 = !features.has(constants2.SUMMARIES_ENABLED_GA);
      let tmp10 = !tmp9;
      if (!tmp9) {
        let hasItem = !flag;
        if (!hasItem) {
          const features2 = guild.features;
          hasItem = features2.has(constants2.SUMMARIES_ENABLED_BY_USER);
        }
        tmp10 = hasItem;
      }
      tmp7 = tmp10;
    }
    tmp = tmp7;
  }
  return tmp;
}
({ ME: closure_4, ChannelTypesSets: closure_5, GuildFeatures: closure_6, EMPTY_STRING_SNOWFLAKE_ID: closure_7 } = ME);
const result = require("ME").fileFinishedImporting("experiments/ChannelSummariesExperiment.tsx");

export const channelEligibleForSummaries = function channelEligibleForSummaries(channel) {
  return canSeeChannelSummaries(channel, true, false);
};
export { canSeeChannelSummaries };
export { canGuildUseConversationSummaries };
export const useChannelSummariesExperiment = function useChannelSummariesExperiment(channel, arg1, flag) {
  if (flag === undefined) {
    flag = false;
  }
  return canSeeChannelSummaries(channel, flag);
};
export const useGuildEligibleForSummaries = function useGuildEligibleForSummaries(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [arg0];
  return _require(624).useStateFromStores(items, () => {
    let id;
    if (null != id) {
      id = id.id;
    }
    if (null == id) {
      id = outer1_7;
    }
    return outer1_10(outer1_3.getGuild(id), false);
  }, items1);
};
