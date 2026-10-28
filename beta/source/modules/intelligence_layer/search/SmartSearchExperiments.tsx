// Module ID: 13295
// Function ID: 13296
// Name: SmartSearchExperiments
// Dependencies: [4877, 1087, 1455, 9766, 558, 576, 504, 2]
// Exports: isNlpSearchEnabled

// Module 13295 (SmartSearchExperiments)
import Constants from "Constants" /* 1087 */;
import ConversationExperiments from "ConversationExperiments" /* 9766 */;
import GuildStore from "GuildStore" /* 4877 */;
import ApexExperiment_mod from "ApexExperiment" /* 1455 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsNlpSearchEnabled(arg0, location) {
  let closure_0;
  let first;
  let tmp10;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let tmp2 = null != closure_0;
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  let stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult2 = tmp(9766);
  let isConversationDebugUXEnabled = tmpResult2.useIsConversationDebugUXEnabled(arg0, location);
  if (cResult[4] !== location) {
    const obj2 = { location };
    cResult[4] = location;
    cResult[5] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[5];
  }
  let enabled = apexExperiment.useConfig(tmp10).enabled;
  let str = arg0;
  if (arg0 == null) {
    str = "";
  }
  if (cResult[6] === location) {
    let tmp11;
    if (cResult[7] === str) {
      tmp11 = cResult[8];
    }
    if (stateFromStores) {
      if (!isConversationDebugUXEnabled) {
        if (enabled) {
          enabled = apexExperiment1.useConfig(tmp11).enabled;
        }
        isConversationDebugUXEnabled = enabled;
      }
      stateFromStores = isConversationDebugUXEnabled;
    }
    return stateFromStores;
  }
  const obj3 = { guildId: str, location };
  cResult[6] = location;
  cResult[7] = str;
  cResult[8] = obj3;
  tmp11 = obj3;
}) : (function useIsNlpSearchEnabled(arg0, location) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
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
  let isConversationDebugUXEnabled = obj2.useIsConversationDebugUXEnabled(arg0, location);
  const obj3 = { location };
  let enabled = apexExperiment.useConfig(obj3).enabled;
  let str = arg0;
  const useConfig = apexExperiment1.useConfig;
  if (arg0 == null) {
    str = "";
  }
  const obj4 = { guildId: str, location };
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
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchExperiments.tsx");

export const NlpSearchUserExperiment = apexExperiment;
export const NlpSearchGuildExperiment = apexExperiment1;
export const isNlpSearchEnabled = function isNlpSearchEnabled(guildId, suggested_searches) {
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
};
export const useIsNlpSearchEnabled = tmp4;
