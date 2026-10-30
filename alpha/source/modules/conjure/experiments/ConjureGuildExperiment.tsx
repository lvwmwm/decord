// Module ID: 6873
// Function ID: 6874
// Name: ConjureGuildExperiment
// Dependencies: [4880, 1072, 1448, 6874, 504, 2]
// Exports: useHasConjureGuild, useIsConjureGuildEnabled

// Module 6873 (ConjureGuildExperiment)
import Constants from "Constants" /* 1072 */;
import ConjureUserExperiment from "ConjureUserExperiment" /* 6874 */;
import GuildStore from "GuildStore" /* 4880 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

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
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureGuildExperiment.tsx");

export function useIsConjureGuildEnabled(arg0) {
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
  const tmp3 = _location(enabled[4]);
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
}
export { isConjureGuildEnabled };
export { hasConjureGuild };
export { hasConjureGuildWithoutExposure };
export function useHasConjureGuild(DMAppChannel, arg1) {
  _require = DMAppChannel;
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
  const items1 = [DMAppChannel, flag];
  return useStateFromStores(items, () => {
    let tmp4;
    const tmp = flag;
    if (tmp) {
      const _Object = Object;
      tmp4 = hasConjureGuild(Object.values(GuildStore.getGuilds()), DMAppChannel);
    } else {
      tmp4 = hasConjureGuildWithoutExposure(DMAppChannel);
    }
    return tmp4;
  }, items1);
}
