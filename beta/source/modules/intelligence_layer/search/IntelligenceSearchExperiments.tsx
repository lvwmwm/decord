// Module ID: 11858
// Function ID: 11859
// Name: IntelligenceSearchExperiments
// Dependencies: [2067, 1074, 1435, 504, 2]
// Exports: isNlpSearchEnabled, useIsNlpSearchEnabled

// Module 11858 (IntelligenceSearchExperiments)
import Constants from "Constants" /* 1074 */;
import GuildStore from "GuildStore" /* 2067 */;
import ApexExperiment_mod from "ApexExperiment" /* 1435 */;
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
const result = size.fileFinishedImporting("modules/intelligence_layer/search/IntelligenceSearchExperiments.tsx");

export const NlpSearchUserExperiment = apexExperiment;
export const NlpSearchGuildExperiment = apexExperiment1;
export const isNlpSearchEnabled = function isNlpSearchEnabled(guildId, fetch_answer) {
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
    const obj = { location: fetch_answer };
    let enabled = apexExperiment.getConfig(obj).enabled;
    const obj2 = { guildId, location: fetch_answer };
    if (enabled) {
      enabled = apexExperiment1.getConfig(obj2).enabled;
    }
    return enabled;
  } else {
    return false;
  }
};
export const useIsNlpSearchEnabled = function useIsNlpSearchEnabled(guildIdFromSearchContext, search) {
  let str = guildIdFromSearchContext;
  _require = guildIdFromSearchContext;
  const items = [GuildStore];
  const items1 = [guildIdFromSearchContext];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != guildIdFromSearchContext;
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
  const obj2 = { location: search };
  const enabled = apexExperiment.useConfig(obj2).enabled;
  let tmp2 = apexExperiment1;
  const useConfig = apexExperiment1.useConfig;
  if (guildIdFromSearchContext == null) {
    str = "";
  }
  const obj3 = { guildId: str, location: search };
  const enabled2 = useConfig(obj3).enabled;
  if (stateFromStores) {
    stateFromStores = enabled;
  }
  if (stateFromStores) {
    stateFromStores = enabled2;
  }
  return stateFromStores;
};
