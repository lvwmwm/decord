// Module ID: 10889
// Function ID: 10890
// Name: ChannelSummariesExperiment
// Dependencies: [2063, 2067, 1074, 2052, 2070, 563, 2]
// Exports: canGuildUseConversationSummaries, channelEligibleForSummaries, useChannelSummariesExperiment, useGuildEligibleForSummaries

// Module 10889 (ChannelSummariesExperiment)
import ChannelConstants from "ChannelConstants" /* 2052 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function canSeeChannelSummaries(channel, flag, arg2) {
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  let tmp = null != channel;
  if (tmp) {
    let flag4 = false;
    if (null != channel) {
      let str;
      const getGuild = GuildStore.getGuild;
      if (channel != null) {
        str = channel.guild_id;
      }
      if (str == null) {
        str = "";
      }
      const guild = getGuild(str);
      const SUMMARIZEABLE = hasOwnProperty.SUMMARIZEABLE;
      const tmp6 = isGuildNSFW(guild);
      flag4 = SUMMARIZEABLE.has(channel.type) && !channel.isNSFW() && !tmp4 && !tmp6;
      SUMMARIZEABLE.has(channel.type) && !channel.isNSFW() && !(null != guild && guild.rulesChannelId === channel.id) && !tmp6;
    }
    let tmp9 = flag4;
    if (tmp9) {
      let tmp10 = false !== flag || !channel.hasFlag(ChannelFlags.SUMMARIES_DISABLED);
      if (tmp10) {
        const guild1 = GuildStore.getGuild(channel.guild_id);
        if (flag2 === undefined) {
          flag2 = true;
        }
        let tmp14 = null != guild1;
        if (tmp14) {
          const id = guild1.id;
          let tmp15 = null != id;
          if (tmp15) {
            let isFavoritesGuildIdResult = id === React3;
            if (!isFavoritesGuildIdResult) {
              const obj = FavoritesUtils;
              isFavoritesGuildIdResult = obj.isFavoritesGuildId(id);
            }
            tmp15 = isFavoritesGuildIdResult;
          }
          let tmp20 = !tmp15;
          if (tmp20) {
            const features = guild1.features;
            let hasItem1 = features.has(metroRequire.SUMMARIES_ENABLED_GA);
            const tmp21 = metroRequire;
            if (hasItem1) {
              let hasItem = !flag2;
              if (flag2) {
                const features2 = guild1.features;
                hasItem = features2.has(tmp21.SUMMARIES_ENABLED_BY_USER);
              }
              hasItem1 = hasItem;
            }
            tmp20 = hasItem1;
          }
          tmp14 = tmp20;
        }
        tmp10 = tmp14;
      }
      tmp9 = tmp10;
    }
    tmp = tmp9;
  }
  return tmp;
}
const isGuildNSFW = GuildRecord.isGuildNSFW;
({ ME: closure_4, ChannelTypesSets: hasOwnProperty, GuildFeatures: metroRequire, EMPTY_STRING_SNOWFLAKE_ID: metroImportDefault } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("experiments/ChannelSummariesExperiment.tsx");

export const channelEligibleForSummaries = function channelEligibleForSummaries(channel) {
  return canSeeChannelSummaries(channel, true, false);
};
export { canSeeChannelSummaries };
export const canGuildUseConversationSummaries = function canGuildUseConversationSummaries(guild, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let tmp = null != guild;
  if (tmp) {
    const id = guild.id;
    let tmp2 = null != id;
    if (tmp2) {
      let isFavoritesGuildIdResult = id === React3;
      if (!isFavoritesGuildIdResult) {
        const obj = FavoritesUtils;
        isFavoritesGuildIdResult = obj.isFavoritesGuildId(id);
      }
      tmp2 = isFavoritesGuildIdResult;
    }
    let tmp7 = !tmp2;
    if (tmp7) {
      const features = guild.features;
      let hasItem1 = features.has(metroRequire.SUMMARIES_ENABLED_GA);
      const tmp8 = metroRequire;
      if (hasItem1) {
        let hasItem = !flag;
        if (flag) {
          const features2 = guild.features;
          hasItem = features2.has(tmp8.SUMMARIES_ENABLED_BY_USER);
        }
        hasItem1 = hasItem;
      }
      tmp7 = hasItem1;
    }
    tmp = tmp7;
  }
  return tmp;
};
export const useChannelSummariesExperiment = function useChannelSummariesExperiment(channel) {
  let flag;
  if (flag === undefined) {
    flag = false;
  }
  return canSeeChannelSummaries(channel, flag);
};
export const useGuildEligibleForSummaries = function useGuildEligibleForSummaries(arg0) {
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [GuildStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let id1;
    const getGuild = GuildStore.getGuild;
    if (id != null) {
      id1 = id.id;
    }
    if (id1 == null) {
      id1 = metroImportDefault;
    }
    const guild = getGuild(id1);
    let tmp4 = null != guild;
    if (tmp4) {
      id = guild.id;
      let tmp5 = null != id;
      if (tmp5) {
        let isFavoritesGuildIdResult = id === React3;
        if (!isFavoritesGuildIdResult) {
          const obj = FavoritesUtils;
          isFavoritesGuildIdResult = obj.isFavoritesGuildId(id);
        }
        tmp5 = isFavoritesGuildIdResult;
      }
      let tmp10 = !tmp5;
      if (tmp10) {
        const features = guild.features;
        let hasItem = features.has(metroRequire.SUMMARIES_ENABLED_GA);
        if (hasItem) {
          // // eliminated: always false
          hasItem = flag2;
        }
        tmp10 = hasItem;
      }
      tmp4 = tmp10;
    }
    return tmp4;
  }, items1);
};
