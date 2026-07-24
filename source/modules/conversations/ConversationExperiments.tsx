// Module ID: 9307
// Function ID: 72629
// Name: useGuildHasFeature
// Dependencies: [1838, 653, 1428, 566, 2]
// Exports: isTopicalNavEnabled, useIsTopicalNavEnabled

// Module 9307 (useGuildHasFeature)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

const require = arg1;
function useGuildHasFeature(guild_id, CONVERSATIONS_EXTRACTION_PROCESSING) {
  const _require = guild_id;
  const dependencyMap = CONVERSATIONS_EXTRACTION_PROCESSING;
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      const guild = outer1_2.getGuild(closure_0);
      let hasItem;
      if (null != guild) {
        const features = guild.features;
        hasItem = features.has(closure_1);
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
    enabled = ApexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
function useIsConversationDebugUXEnabled(guild_id, location) {
  return useGuildHasFeature(guild_id, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) && ApexExperiment.useConfig({ location }).enabled;
}
ApexExperiment = { kind: "user", name: "2026-03-conversation-highlighting-utility", defaultConfig: { enabled: false }, variations: { [1]: { enabled: false }, [2]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
ApexExperiment = { kind: "guild", name: "2026-06-topical-navigation-guild", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const obj1 = { kind: "user", name: "2026-04-topical-navigation-staff-control", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj1);
const result = require("ApexExperiment").fileFinishedImporting("modules/conversations/ConversationExperiments.tsx");

export const ConversationHighlightingExperiment = ApexExperiment;
export const TopicalNavGuildExperiment = ApexExperiment;
export const TopicalNavUserGateExperiment = apexExperiment2;
export { isConversationDebugUXEnabled };
export const isTopicalNavEnabled = function isTopicalNavEnabled(guildId, fetch_channel_conversations) {
  if (null == guildId) {
    return false;
  } else if (isConversationDebugUXEnabled(guildId, fetch_channel_conversations)) {
    return true;
  } else {
    let obj = { location: fetch_channel_conversations };
    if (apexExperiment2.getConfig(obj).enabled) {
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
        enabled = ApexExperiment.getConfig(obj).enabled;
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
      const tmp7 = !apexExperiment2.useConfig(obj).enabled;
      let tmp8 = !tmp7;
      if (!tmp7) {
        if (enabled) {
          enabled = !tmp3;
        }
        if (enabled) {
          enabled = ApexExperiment.useConfig(obj).enabled;
        }
        tmp8 = enabled;
      }
      tmp6 = tmp8;
    }
    tmp4 = tmp6;
  }
  return tmp4;
};
