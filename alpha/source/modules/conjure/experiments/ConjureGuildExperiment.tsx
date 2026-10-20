// Module ID: 6759
// Function ID: 6760
// Name: ConjureGuildExperiment
// Dependencies: [4822, 1087, 1455, 558, 576, 504, 2]

// Module 6759 (ConjureGuildExperiment)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import GuildStore from "GuildStore" /* 4822 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function isConjureGuildEnabled(guildId) {
  guildId = guildId.guildId;
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location: tmp };
    enabled = closure_4.getConfig(obj).enabled;
  }
  return enabled;
}
function hasConjureGuild(arg0, DMAppChannel) {
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let obj2 = { guildId: tmp.id, location: DMAppChannel };
    if (isConjureGuildEnabled(obj2)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
function hasConjureGuildWithoutExposure(conjure_resume) {
  const values = Object.values(GuildStore.getGuilds());
  for (const item10012 of values) {
    let obj2 = { guildId: item10012.id, location: conjure_resume };
    if (closure_4.getConfig(obj2, { autoTrackExposure: false }).enabled) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = { name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_4 = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureGuildEnabled(arg0) {
  let _location;
  let guildId;
  const obj = react;
  const cResult = obj.c(3);
  ({ guildId, location: _location } = arg0);
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  if (cResult[0] === _location) {
    let tmp2;
    if (cResult[1] === guildId) {
      tmp2 = cResult[2];
    }
    return closure_4.useConfig(tmp2).enabled;
  }
  const obj2 = { guildId, location: _location };
  cResult[0] = _location;
  cResult[1] = guildId;
  cResult[2] = obj2;
  tmp2 = obj2;
}) : (function useIsConjureGuildEnabled(guildId) {
  guildId = guildId.guildId;
  const _location = guildId.location;
  const useConfig = closure_4.useConfig;
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  return useConfig({ guildId, location: _location }).enabled;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasConjureGuild(arg0, arg1) {
  let closure_0;
  let closure_1;
  let tmp4;
  let tmp6;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const autoTrackExposure = tmp4.autoTrackExposure;
  dependencyMap = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, tmp(1455).ApexExperimentStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === (undefined === autoTrackExposure || autoTrackExposure)) {
    let tmp8;
    let tmp9;
    if (cResult[4] === arg0) {
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(tmp6, tmp8, tmp9);
  }
  const fn = function c() {
    let tmp4;
    const tmp = closure_1;
    if (tmp) {
      const _Object = Object;
      tmp4 = hasConjureGuild(Object.values(GuildStore.getGuilds()), closure_0);
    } else {
      tmp4 = hasConjureGuildWithoutExposure(closure_0);
    }
    return tmp4;
  };
  const items1 = [arg0, tmp5];
  cResult[3] = undefined === autoTrackExposure || autoTrackExposure;
  cResult[4] = arg0;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : (function useHasConjureGuild(arg0) {
  let closure_0;
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.autoTrackExposure;
  if (flag === undefined) {
    flag = true;
  }
  let tmp = require("get initialized");
  const items = [GuildStore, ];
  const useStateFromStores = tmp.useStateFromStores;
  items[1] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg0, flag];
  return useStateFromStores(items, () => {
    let tmp4;
    const tmp = flag;
    if (tmp) {
      const _Object = Object;
      tmp4 = hasConjureGuild(Object.values(GuildStore.getGuilds()), closure_0);
    } else {
      tmp4 = hasConjureGuildWithoutExposure(closure_0);
    }
    return tmp4;
  }, items1);
});
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureGuildExperiment.tsx");

export const useIsConjureGuildEnabled = tmp2;
export { isConjureGuildEnabled };
export { hasConjureGuild };
export { hasConjureGuildWithoutExposure };
export const useHasConjureGuild = tmp3;
