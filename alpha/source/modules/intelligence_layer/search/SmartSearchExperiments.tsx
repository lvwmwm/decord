// Module ID: 13911
// Function ID: 13912
// Name: SmartSearchExperiments
// Dependencies: [4885, 1072, 1447, 9847, 504, 2]
// Exports: isNlpSearchEnabled, useIsNlpSearchEnabled

// Module 13911 (SmartSearchExperiments)
import Constants from "Constants" /* 1072 */;
import ConversationExperiments from "ConversationExperiments" /* 9847 */;
import GuildStore from "GuildStore" /* 4885 */;
import ApexExperiment_mod from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
let ApexExperiment = ApexExperiment_mod;
let obj = { kind: "user", name: "2026-09-mobile-nlp-search-user-flag", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj2 = { kind: "guild", name: "2026-09-mobile-nlp-search-guild-experiment", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchExperiments.tsx");

export const NlpSearchUserExperiment = apexExperiment;
export const NlpSearchGuildExperiment = apexExperiment1;
export function isNlpSearchEnabled(guildId, suggested_searches) {
  const guild = GuildStore.getGuild(guildId);
  let flag;
  if (guild != null) {
    const features = guild.features;
    flag = features.has(GuildFeatures.DISCOVERABLE);
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    const obj = ConversationExperiments;
    if (obj.isConversationDebugUXEnabled(guildId, suggested_searches)) {
      return true;
    } else {
      const obj2 = { location: suggested_searches };
      let enabled = apexExperiment.getConfig(obj2).enabled;
      const obj3 = { guildId, location: suggested_searches };
      if (enabled) {
        enabled = apexExperiment1.getConfig(obj3).enabled;
      }
      return enabled;
    }
  } else {
    return false;
  }
}
export function useIsNlpSearchEnabled(guildId, fetch_answer) {
  _require = guildId;
  const items = [GuildStore];
  const items1 = [guildId];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    if (tmp2) {
      const guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(GuildFeatures.DISCOVERABLE);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1);
  const obj2 = require("ConversationExperiments");
  let isConversationDebugUXEnabled = obj2.useIsConversationDebugUXEnabled(guildId, fetch_answer);
  const obj3 = { location: fetch_answer };
  let enabled = apexExperiment.useConfig(obj3).enabled;
  let str = guildId;
  const useConfig = apexExperiment1.useConfig;
  if (guildId == null) {
    str = "";
  }
  const obj4 = { guildId: str, location: fetch_answer };
  if (stateFromStores) {
    if (!isConversationDebugUXEnabled) {
      if (enabled) {
        enabled = useConfig(obj4).enabled;
      }
      isConversationDebugUXEnabled = enabled;
    }
    stateFromStores = isConversationDebugUXEnabled;
  }
  return stateFromStores;
}
