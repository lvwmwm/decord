// Module ID: 7331
// Function ID: 7332
// Name: ConversationExperiments
// Dependencies: [2067, 1074, 1435, 504, 2]
// Exports: isConversationDebugUXEnabled, isTopicalNavEnabled, useIsConversationDebugUXEnabled, useIsConversationTopicHeaderEnabled

// Module 7331 (ConversationExperiments)
import Constants from "Constants" /* 1074 */;
import GuildStore from "GuildStore" /* 2067 */;
import ApexExperiment_mod from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
let obj4;
let obj6;
let obj8;
function useIsTopicalNavEnabled(guild_id, channel_header) {
  const tmp = GuildFeatures;
  const CONVERSATIONS_EXTRACTION_PROCESSING = GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING;
  _require = guild_id;
  let tmp2 = _require;
  const obj = { location: channel_header };
  const enabled = apexExperiment.useConfig(obj).enabled;
  const items = [GuildStore];
  const items1 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING];
  const obj2 = require("get initialized");
  let str = guild_id;
  const obj3 = { location: channel_header };
  const tmp5 = obj2.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      guild = guild.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(SUMMARIES_ENABLED_GA);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1) && enabled;
  const enabled2 = apexExperiment3.useConfig(obj3).enabled;
  const useConfig = apexExperiment1.useConfig;
  if (guild_id == null) {
    str = "";
  }
  const CONVERSATIONS_EXTRACTION_PROCESSING2 = tmp.CONVERSATIONS_EXTRACTION_PROCESSING;
  const obj4 = { guildId: str, location: channel_header };
  const enabled3 = useConfig(obj4).enabled;
  const items2 = [GuildStore];
  const items3 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING2];
  const tmp2Result = tmp2(CONVERSATIONS_EXTRACTION_PROCESSING[3]);
  let stateFromStores = tmp2Result.useStateFromStores(items2, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      guild = guild.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(SUMMARIES_ENABLED_GA);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items3);
  const SUMMARIES_ENABLED_GA = tmp.SUMMARIES_ENABLED_GA;
  _require = guild_id;
  tmp2(CONVERSATIONS_EXTRACTION_PROCESSING[3]);
  [][0] = GuildStore;
  const items4 = [guild_id, SUMMARIES_ENABLED_GA];
  let tmp10 = null != guild_id;
  if (tmp10) {
    let tmp11 = tmp5;
    if (!tmp11) {
      let tmp12 = enabled2;
      if (tmp12) {
        if (stateFromStores) {
          stateFromStores = !tmp9;
        }
        if (stateFromStores) {
          stateFromStores = enabled3;
        }
        tmp12 = stateFromStores;
      }
      tmp11 = tmp12;
    }
    tmp10 = tmp11;
  }
  return tmp10;
}
const GuildFeatures = Constants.GuildFeatures;
let ApexExperiment = ApexExperiment_mod;
let obj = { kind: "user", name: "2026-03-conversation-highlighting-utility", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: false } };
obj2[2] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj3 = { kind: "guild", name: "2026-06-topical-navigation-guild", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj5 = { kind: "user", name: "2026-09-conversation-topic-header", defaultConfig: { enabled: false }, variations: obj6 };
obj6 = { 1: null };
obj6[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
ApexExperiment = ApexExperiment_mod;
const obj7 = { kind: "user", name: "2026-04-topical-navigation-staff-control", defaultConfig: { enabled: false }, variations: obj8 };
obj8 = { 1: null };
obj8[1] = { enabled: true };
const apexExperiment3 = ApexExperiment.createApexExperiment(obj7);
const result = size.fileFinishedImporting("modules/conversations/ConversationExperiments.tsx");

export const ConversationHighlightingExperiment = apexExperiment;
export const TopicalNavGuildExperiment = apexExperiment1;
export const ConversationTopicHeaderExperiment = apexExperiment2;
export const TopicalNavUserGateExperiment = apexExperiment3;
export const isConversationDebugUXEnabled = function isConversationDebugUXEnabled(arg0, location) {
  let tmp2 = null != arg0;
  if (tmp2) {
    const guild = GuildStore.getGuild(arg0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(tmp);
    }
    if (flag == null) {
      flag = false;
    }
    tmp2 = flag;
  }
  let enabled = tmp2;
  if (enabled) {
    const obj = { location };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const isTopicalNavEnabled = function isTopicalNavEnabled(c1, fetch_channel_conversations) {
  if (null == c1) {
    return false;
  } else {
    let tmp3 = null != c1;
    if (tmp3) {
      const guild = GuildStore.getGuild(c1);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(tmp11);
      }
      if (flag == null) {
        flag = false;
      }
      tmp3 = flag;
    }
    let enabled = tmp3;
    if (enabled) {
      const obj = { location: fetch_channel_conversations };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    if (enabled) {
      return true;
    } else {
      const obj2 = { location: fetch_channel_conversations };
      if (apexExperiment3.getConfig(obj2).enabled) {
        const guild1 = GuildStore.getGuild(c1);
        let enabled2 = null != guild1;
        if (enabled2) {
          const features2 = guild1.features;
          enabled2 = !features2.has(tmp10.SUMMARIES_ENABLED_GA);
        }
        if (enabled2) {
          const features3 = guild1.features;
          enabled2 = features3.has(tmp10.CONVERSATIONS_EXTRACTION_PROCESSING);
        }
        if (enabled2) {
          const obj3 = { guildId: c1, location: fetch_channel_conversations };
          enabled2 = apexExperiment1.getConfig(obj3).enabled;
        }
        return enabled2;
      } else {
        return false;
      }
    }
  }
};
export const useIsConversationDebugUXEnabled = function useIsConversationDebugUXEnabled(arg0, location) {
  let closure_0;
  const CONVERSATIONS_EXTRACTION_PROCESSING = GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING;
  _require = arg0;
  const obj = { location };
  const enabled = apexExperiment.useConfig(obj).enabled;
  const items = [GuildStore];
  const items1 = [arg0, CONVERSATIONS_EXTRACTION_PROCESSING];
  const obj2 = require("get initialized");
  const tmp = obj2.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      guild = guild.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(SUMMARIES_ENABLED_GA);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1) && enabled;
  return tmp;
};
export { useIsTopicalNavEnabled };
export const useIsConversationTopicHeaderEnabled = function useIsConversationTopicHeaderEnabled(guild_id, messages_conversation_header) {
  let enabled = useIsTopicalNavEnabled(guild_id, messages_conversation_header);
  const obj = { location: messages_conversation_header };
  if (enabled) {
    enabled = apexExperiment2.useConfig(obj).enabled;
  }
  return enabled;
};
