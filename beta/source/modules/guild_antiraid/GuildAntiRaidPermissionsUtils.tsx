// Module ID: 12225
// Function ID: 12226
// Name: GuildAntiRaidPermissionsUtils
// Dependencies: [4472, 10906, 1086, 558, 576, 504, 7462, 12226, 2]
// Exports: canEnableRaidAlerts, canReportRaid

// Module 12225 (GuildAntiRaidPermissionsUtils)
import PermissionStore from "PermissionStore" /* 4472 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10906 */;
import Constants from "Constants" /* 1086 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, id;

let closure_4;
let hasOwnProperty;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, Permissions: hasOwnProperty } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      if (PermissionStore !== undefined) {
        const tmp3 = PermissionStore.can(hasOwnProperty.BAN_MEMBERS, closure_0) || PermissionStore.can(hasOwnProperty.KICK_MEMBERS, closure_0) || PermissionStore.can(hasOwnProperty.MODERATE_MEMBERS, closure_0) || PermissionStore.can(hasOwnProperty.MANAGE_GUILD, closure_0);
        return tmp3;
      }
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
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildIncidentsStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class E {
      constructor() {
        let guildIncident = null;
        if (null != closure_0) {
          guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
        }
        return guildIncident;
      }
    }
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = E;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = E;
  } else {
    class E {
      constructor() {
        let guildIncident = null;
        if (null != closure_0) {
          guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
        }
        return guildIncident;
      }
    }
    tmp12 = cResult[7];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[8] !== stateFromStores1) {
    class E {
      constructor() {
        let guildIncident = null;
        if (null != closure_0) {
          guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
        }
        return guildIncident;
      }
    }
    let hasDetectedActivityResult = null != stateFromStores1;
    if (hasDetectedActivityResult) {
      class E {
        constructor() {
          let guildIncident = null;
          if (null != closure_0) {
            guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
          }
          return guildIncident;
        }
      }
      hasDetectedActivityResult = obj4.hasDetectedActivity(stateFromStores1);
    }
    cResult[8] = stateFromStores1;
    cResult[9] = hasDetectedActivityResult;
    tmp14 = hasDetectedActivityResult;
  } else {
    class E {
      constructor() {
        let guildIncident = null;
        if (null != closure_0) {
          guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
        }
        return guildIncident;
      }
    }
  }
  return !tmp14 && stateFromStores;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  const items = [PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      const tmp3 = PermissionStore.can(hasOwnProperty.BAN_MEMBERS, closure_0) || PermissionStore.can(hasOwnProperty.KICK_MEMBERS, closure_0) || PermissionStore.can(hasOwnProperty.MODERATE_MEMBERS, closure_0) || PermissionStore.can(hasOwnProperty.MANAGE_GUILD, closure_0);
      return tmp3;
    }
  }, items1);
  const items2 = [GuildIncidentsStore];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
    }
    return guildIncident;
  }, items3);
  let hasDetectedActivityResult = null != stateFromStores1;
  if (hasDetectedActivityResult) {
    const tmpResult = tmp(7462);
    hasDetectedActivityResult = tmpResult.hasDetectedActivity(stateFromStores1);
  }
  return !hasDetectedActivityResult && stateFromStores;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const obj = PermissionStore;
      if (PermissionStore !== undefined) {
        return obj.can(hasOwnProperty.MANAGE_GUILD, tmp);
      }
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
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    const obj = PermissionStore;
    if (PermissionStore !== undefined) {
      return obj.can(hasOwnProperty.MANAGE_GUILD, tmp);
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
function canReportRaid(guild, PermissionStore) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  const canResult = obj.can(hasOwnProperty.BAN_MEMBERS, guild) || obj.can(tmp.KICK_MEMBERS, guild) || obj.can(tmp.MODERATE_MEMBERS, guild) || obj.can(tmp.MANAGE_GUILD, guild);
  return canResult;
}
function canEnableRaidAlerts(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = PermissionStore;
  }
  return obj.can(hasOwnProperty.MANAGE_GUILD, arg0);
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let first;
  let tmp6;
  let tmp7;
  _require = id;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function s() {
      const obj = PermissionStore;
      if (PermissionStore !== undefined) {
        return obj.can(hasOwnProperty.MANAGE_GUILD, tmp);
      }
    };
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  id = undefined;
  const useIsMentionRaidExperimentEnabled = tmp(12226).useIsMentionRaidExperimentEnabled;
  tmp(12226);
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_4;
  }
  const tmp11 = useIsMentionRaidExperimentEnabled(id, false) && stateFromStores;
  return tmp11;
}) : ((id) => {
  _require = id;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = PermissionStore;
    if (PermissionStore !== undefined) {
      return obj.can(hasOwnProperty.MANAGE_GUILD, tmp);
    }
  }, items1);
  id = undefined;
  const useIsMentionRaidExperimentEnabled = require("guild_automod/ExperimentUtils").useIsMentionRaidExperimentEnabled;
  const tmp2 = require("guild_automod/ExperimentUtils");
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_4;
  }
  const tmp4 = useIsMentionRaidExperimentEnabled(id, false) && stateFromStores;
  return tmp4;
});
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export { canReportRaid };
export const useCanReportRaid = tmp3;
export { canEnableRaidAlerts };
export const useCanEnableRaidAlerts = tmp4;
export const useShowMentionRaidLimitUpsell = tmp5;
