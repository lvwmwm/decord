// Module ID: 9478
// Function ID: 73875
// Name: canSeeChannelSummaries
// Dependencies: []
// Exports: channelEligibleForSummaries, useChannelSummariesExperiment, useGuildEligibleForSummaries

// Module 9478 (canSeeChannelSummaries)
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
      let tmp4 = id === closure_4;
      if (!tmp4) {
        tmp4 = id === closure_5;
      }
      tmp2 = tmp4;
    }
    let tmp6 = !tmp2;
    if (!tmp2) {
      const features = guild.features;
      const tmp8 = !features.has(constants2.SUMMARIES_ENABLED_GA);
      let tmp9 = !tmp8;
      if (!tmp8) {
        let hasItem = !flag;
        if (!hasItem) {
          const features2 = guild.features;
          hasItem = features2.has(constants2.SUMMARIES_ENABLED_BY_USER);
        }
        tmp9 = hasItem;
      }
      tmp6 = tmp9;
    }
    tmp = tmp6;
  }
  return tmp;
}
const isGuildNSFW = require(dependencyMap[0]).isGuildNSFW;
let closure_3 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[2]);
({ ME: closure_4, FAVORITES: closure_5, ChannelTypesSets: closure_6, GuildFeatures: closure_7, EMPTY_STRING_SNOWFLAKE_ID: closure_8 } = _module);
const ChannelFlags = require(dependencyMap[3]).ChannelFlags;
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("experiments/ChannelSummariesExperiment.tsx");

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
  const require = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  return require(dependencyMap[4]).useStateFromStores(items, () => {
    let id;
    if (null != arg0) {
      id = arg0.id;
    }
    if (null == id) {
      id = closure_8;
    }
    return closure_11(guild.getGuild(id), false);
  }, items1);
};
