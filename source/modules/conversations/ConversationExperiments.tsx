// Module ID: 9264
// Function ID: 72379
// Name: useGuildHasFeature
// Dependencies: [0, 0, 0, 0, 0]
// Exports: isTopicalNavEnabled, useIsTopicalNavEnabled

// Module 9264 (useGuildHasFeature)
import closure_2 from "__exportStarResult1";
import { GuildFeatures } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function useGuildHasFeature(guild_id, CONVERSATIONS_EXTRACTION_PROCESSING) {
  CONVERSATIONS_EXTRACTION_PROCESSING = guild_id;
  const dependencyMap = CONVERSATIONS_EXTRACTION_PROCESSING;
  const items = [closure_2];
  const items1 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING];
  return CONVERSATIONS_EXTRACTION_PROCESSING(dependencyMap[3]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      const guild = guild.getGuild(arg0);
      let hasItem;
      if (null != guild) {
        const features = guild.features;
        hasItem = features.has(arg1);
      }
      tmp = null != hasItem && hasItem;
      const tmp7 = null != hasItem && hasItem;
    }
    return tmp;
  }, items1);
}
function isConversationDebugUXEnabled(guildId, location) {
  let tmp2 = null != guildId;
  if (tmp2) {
    const guild = store.getGuild(guildId);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(tmp);
    }
    tmp2 = null != hasItem;
    const tmp3 = hasItem;
  }
  if (tmp2) {
    tmp2 = tmp3;
  }
  let enabled = !tmp7;
  if (!!tmp2) {
    const obj = { location };
    enabled = __exportStarResult1.getConfig(obj).enabled;
  }
  return enabled;
}
function useIsConversationDebugUXEnabled(guild_id, location) {
  return useGuildHasFeature(guild_id, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) && __exportStarResult1.useConfig({ location }).enabled;
}
__exportStarResult1 = { "Bool(false)": "handleMessageListVisibilityChange", "Bool(false)": "%Uint16Array%", defaultConfig: { enabled: false }, variations: { [1]: { enabled: false }, [2]: { enabled: true } } };
__exportStarResult1 = __exportStarResult1.createApexExperiment(__exportStarResult1);
const apexExperiment1 = __exportStarResult1.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
__exportStarResult1 = { "Bool(false)": "a_20", "Bool(false)": "rect", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
__exportStarResult1 = __exportStarResult1.createApexExperiment(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/conversations/ConversationExperiments.tsx");

export const ConversationHighlightingExperiment = __exportStarResult1;
export const TopicalNavGuildExperiment = apexExperiment1;
export const TopicalNavUserGateExperiment = __exportStarResult1;
export { isConversationDebugUXEnabled };
export const isTopicalNavEnabled = function isTopicalNavEnabled(guildId, fetch_channel_conversations) {
  if (null == guildId) {
    return false;
  } else if (isConversationDebugUXEnabled(guildId, fetch_channel_conversations)) {
    return true;
  } else {
    let obj = { location: fetch_channel_conversations };
    if (__exportStarResult1.getConfig(obj).enabled) {
      const guild = store.getGuild(guildId);
      let enabled = null != guild;
      if (enabled) {
        const features = guild.features;
        enabled = !features.has(GuildFeatures.SUMMARIES_ENABLED_GA);
      }
      if (enabled) {
        const features2 = guild.features;
        enabled = features2.has(GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING);
      }
      if (enabled) {
        obj = { guildId, location: fetch_channel_conversations };
        enabled = apexExperiment1.getConfig(obj).enabled;
      }
      return enabled;
    } else {
      return false;
    }
  }
};
export { useIsConversationDebugUXEnabled };
export const useIsTopicalNavEnabled = function useIsTopicalNavEnabled(guild_id, channel_header) {
  let obj = { location: channel_header };
  obj = {};
  let str = "";
  if (null != guild_id) {
    str = guild_id;
  }
  obj.guildId = str;
  obj.location = channel_header;
  let enabled = useGuildHasFeature(guild_id, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING);
  let tmp4 = null != guild_id;
  if (tmp4) {
    let tmp6 = !tmp5;
    if (!tmp) {
      const tmp7 = !__exportStarResult1.useConfig(obj).enabled;
      let tmp8 = !tmp7;
      if (!tmp7) {
        if (enabled) {
          enabled = !tmp3;
        }
        if (enabled) {
          enabled = apexExperiment1.useConfig(obj).enabled;
        }
        tmp8 = enabled;
      }
      tmp6 = tmp8;
    }
    tmp4 = tmp6;
  }
  return tmp4;
};
