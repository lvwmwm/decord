// Module ID: 6866
// Function ID: 6867
// Name: ConjureGuildExperiment
// Dependencies: [4879, 1084, 1453, 6867, 558, 576, 504, 2]

// Module 6866 (ConjureGuildExperiment)
import Constants from "Constants" /* 1084 */;
import ConjureUserExperiment from "ConjureUserExperiment" /* 6867 */;
import GuildStore from "GuildStore" /* 4879 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, tmp5, tmp7;

function isEnabledForUser(config, location) {
  let enabled;
  let requiresUserExperiment;
  ({ enabled, requiresUserExperiment } = config);
  if (enabled) {
    let isConjureUserEnabledResult = !requiresUserExperiment;
    if (requiresUserExperiment) {
      const obj2 = { location };
      const obj3 = { autoTrackExposure: false };
      const obj = ConjureUserExperiment;
      isConjureUserEnabledResult = obj.isConjureUserEnabled(obj2, obj3);
    }
    enabled = isConjureUserEnabledResult;
  }
  return enabled;
}
function isConjureGuildEnabled(arg0) {
  let _location;
  let enabled;
  let guildId;
  let requiresUserExperiment;
  ({ guildId, location: _location } = arg0);
  let tmp = null != guildId;
  if (tmp) {
    const obj = { guildId, location: _location };
    const config = closure_4.getConfig(obj);
    ({ enabled, requiresUserExperiment } = config);
    if (enabled) {
      let isConjureUserEnabledResult = !requiresUserExperiment;
      if (requiresUserExperiment) {
        const obj3 = { location: _location };
        const obj4 = { autoTrackExposure: true };
        const obj2 = ConjureUserExperiment;
        isConjureUserEnabledResult = obj2.isConjureUserEnabled(obj3, obj4);
      }
      enabled = isConjureUserEnabledResult;
    }
    tmp = enabled;
  }
  return tmp;
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
  const obj = values[Symbol.iterator]();
  while (obj !== undefined) {
    let obj2 = { guildId: tmp2.id, location: conjure_resume };
    if (isEnabledForUser(closure_4.getConfig(obj2, { autoTrackExposure: false }), conjure_resume, false)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = { name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false, requiresUserExperiment: false }, variations: { 0: { enabled: false, requiresUserExperiment: false }, 1: { enabled: true, requiresUserExperiment: false }, 2: { enabled: true, requiresUserExperiment: true } } };
let closure_4 = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureGuildEnabled(arg0) {
  let _location;
  let enabled;
  let guildId;
  let tmp = _location;
  const tmp2 = enabled;
  let obj = _location(enabled[5]);
  const cResult = obj.c(9);
  ({ guildId, location: _location } = arg0);
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  if (cResult[0] === _location) {
    let tmp4;
    let tmp8;
    if (cResult[1] === guildId) {
      tmp4 = cResult[2];
    }
    const config = closure_4.useConfig(tmp4);
    enabled = config.enabled;
    const requiresUserExperiment = config.requiresUserExperiment;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [tmp(tmp2[2]).ApexExperimentStore];
      cResult[3] = items;
      tmp8 = items;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === enabled) {
      if (cResult[5] === _location) {
        let tmp9;
        let tmp10;
        if (cResult[6] === requiresUserExperiment) {
          tmp9 = cResult[7];
          tmp10 = cResult[8];
        }
        const tmpResult = tmp(tmp2[6]);
        return tmpResult.useStateFromStores(tmp8, tmp9, tmp10);
      }
    }
    const fn = function b() {
      let tmp = enabled;
      if (tmp) {
        let isConjureUserEnabledResult = !tmp2;
        if (requiresUserExperiment) {
          const obj2 = { location: tmp3 };
          const obj3 = { autoTrackExposure: true };
          const obj = ConjureUserExperiment;
          isConjureUserEnabledResult = obj.isConjureUserEnabled(obj2, obj3);
        }
        tmp = isConjureUserEnabledResult;
      }
      return tmp;
    };
    const items1 = [enabled, requiresUserExperiment, _location];
    cResult[4] = enabled;
    cResult[5] = _location;
    cResult[6] = requiresUserExperiment;
    cResult[7] = fn;
    cResult[8] = items1;
    tmp10 = items1;
    tmp9 = fn;
  }
  let obj2 = { guildId, location: _location };
  cResult[0] = _location;
  cResult[1] = guildId;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : (function useIsConjureGuildEnabled(arg0) {
  let _location;
  let guildId;
  ({ guildId, location: _location } = arg0);
  let enabled;
  let requiresUserExperiment;
  let tmp = closure_4;
  const useConfig = closure_4.useConfig;
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const config = useConfig({ guildId, location: _location });
  enabled = config.enabled;
  requiresUserExperiment = config.requiresUserExperiment;
  const tmp3 = _location(enabled[6]);
  const useStateFromStores = tmp3.useStateFromStores;
  const items = [_location(enabled[2]).ApexExperimentStore];
  const items1 = [enabled, requiresUserExperiment, _location];
  return useStateFromStores(items, () => {
    let tmp = enabled;
    if (tmp) {
      let isConjureUserEnabledResult = !tmp2;
      if (requiresUserExperiment) {
        const obj2 = { location: tmp3 };
        const obj3 = { autoTrackExposure: true };
        const obj = ConjureUserExperiment;
        isConjureUserEnabledResult = obj.isConjureUserEnabled(obj2, obj3);
      }
      tmp = isConjureUserEnabledResult;
    }
    return tmp;
  }, items1);
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
    const items = [GuildStore, tmp(1453).ApexExperimentStore];
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
  class E {
    constructor() {
      tmp = autoTrackExposure;
      if (tmp) {
        tmp5 = hasConjureGuild;
        tmp6 = globalThis;
        _Object = Object;
        tmp7 = closure_2;
        tmp8 = closure_0;
        tmp4 = hasConjureGuild(Object.values(closure_2.getGuilds()), closure_0);
      } else {
        tmp2 = hasConjureGuildWithoutExposure;
        tmp3 = closure_0;
        tmp4 = hasConjureGuildWithoutExposure(closure_0);
      }
      return tmp4;
    }
  }
  const items1 = [arg0, tmp5];
  cResult[3] = undefined === autoTrackExposure || autoTrackExposure;
  cResult[4] = arg0;
  cResult[5] = E;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = E;
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
