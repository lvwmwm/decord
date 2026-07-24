// Module ID: 10269
// Function ID: 79288
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1316, 1838, 3758, 3947, 1849, 10249, 7792, 653, 624, 21, 7791, 483, 3763, 10270, 2]
// Exports: getDisabledActions, shouldShowRaidInAppNotification, shouldShowRaidNotificationNagbar, useDisabledActions, useFirstGuildIncidentId, useGuildIncidentsState, useShowAntiRaidInGuildNotifSettings

// Module 10269 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { IncidentAlertModeratorPermissions as closure_10 } from "GUILD_REPORT_RAID_MOBILE_KEY";
import ME from "ME";

let closure_11;
let closure_12;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getFirstGuildIncidentId(guildId) {
  let value;
  currentUser = currentUser.getCurrentUser();
  const incidentsByGuild = store3.getIncidentsByGuild();
  let obj = importDefault(21);
  const keys = obj.keys(incidentsByGuild);
  const tmp3 = _createForOfIteratorHelperLoose(keys.map((guildId) => outer1_5.getGuild(guildId)));
  const iter = tmp3();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      value = iter2.value;
      if (null != value) {
        let tmp14 = incidentsByGuild[value.id];
        let tmp15 = tmp14;
        if (null != tmp14) {
          let tmp16 = require;
          let tmp17 = dependencyMap;
          let obj7 = require(7791) /* hasDetectedRaid */;
          if (obj7.hasDetectedActivity(tmp14)) {
            let tmp7 = require;
            let tmp8 = dependencyMap;
            let obj3 = require(7791) /* hasDetectedRaid */;
            if (!obj3.isUnderLockdown(tmp14)) {
              let tmp10 = importAll;
              let tmp11 = dependencyMap;
              let obj4 = importAll(483);
              let obj5 = importAll(3763);
              obj = { user: currentUser, context: value, checkElevated: false };
              let tmp12 = closure_10;
              let tmp13 = tmp14;
              if (obj4.hasAny(obj5.computePermissions(obj), closure_10)) {
                break;
              }
            } else {
              let tmp9 = tmp14;
            }
          } else {
            let tmp4 = require;
            let tmp5 = dependencyMap;
            let obj2 = require(7791) /* hasDetectedRaid */;
            let tmp6 = tmp14;
          }
        }
      }
      let iter3 = tmp3();
      iter2 = iter3;
    }
    return value.id;
  }
  return null;
}
({ EMPTY_STRING_SNOWFLAKE_ID: closure_11, GuildFeatures: closure_12 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidHooks.tsx");

export const useFirstGuildIncidentId = function useFirstGuildIncidentId() {
  let value;
  let obj = stateFromStores1(624);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getCurrentUser());
  const items1 = [closure_9];
  stateFromStores1 = stateFromStores1(624).useStateFromStores(items1, () => outer1_9.getIncidentsByGuild());
  const obj2 = stateFromStores1(624);
  const items2 = [_createForOfIteratorHelperLoose];
  const tmp3 = _createForOfIteratorHelperLoose(stateFromStores1(624).useStateFromStoresArray(items2, () => {
    const keys = outer1_1(outer1_3[9]).keys(stateFromStores1);
    return keys.map((guildId) => outer2_5.getGuild(guildId));
  }));
  const iter = tmp3();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      value = iter2.value;
      if (null != value) {
        let tmp11 = stateFromStores1[value.id];
        let tmp12 = tmp11;
        if (null != tmp11) {
          let tmp13 = stateFromStores1;
          let tmp14 = dependencyMap;
          let obj8 = stateFromStores1(7791);
          if (obj8.hasDetectedActivity(tmp11)) {
            let tmp7 = importAll;
            let tmp8 = dependencyMap;
            let obj5 = importAll(483);
            let obj6 = importAll(3763);
            obj = { user: stateFromStores, context: value, checkElevated: false };
            let tmp9 = closure_10;
            let tmp10 = tmp11;
            if (obj5.hasAny(obj6.computePermissions(obj), closure_10)) {
              break;
            }
          } else {
            let tmp4 = stateFromStores1;
            let tmp5 = dependencyMap;
            let obj4 = stateFromStores1(7791);
            let tmp6 = tmp11;
          }
        }
      }
      let iter3 = tmp3();
      iter2 = iter3;
    }
    return value.id;
  }
  return null;
};
export const useGuildIncidentsState = function useGuildIncidentsState(id) {
  const _require = id;
  let obj = _require(624);
  const items = [_createForOfIteratorHelperLoose, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(closure_0);
    if (null == guild) {
      return false;
    } else {
      const guildPermissions = outer1_6.getGuildPermissions(guild);
      let hasAnyResult = null != guildPermissions;
      if (hasAnyResult) {
        hasAnyResult = outer1_2(outer1_3[11]).hasAny(guildPermissions, outer1_10);
        const obj = outer1_2(outer1_3[11]);
      }
      return hasAnyResult;
    }
  });
  const items1 = [closure_9];
  const stateFromStores1 = _require(624).useStateFromStores(items1, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = outer1_9.getGuildIncident(closure_0);
    }
    return guildIncident;
  });
  obj = { shouldShowIncidentActions: stateFromStores, incidentData: stateFromStores1 };
  let isUnderLockdownResult = null != stateFromStores1;
  if (isUnderLockdownResult) {
    isUnderLockdownResult = _require(7791).isUnderLockdown(stateFromStores1);
    const obj4 = _require(7791);
  }
  obj.isUnderLockdown = isUnderLockdownResult;
  return obj;
};
export const shouldShowRaidNotificationNagbar = function shouldShowRaidNotificationNagbar() {
  const guildId = getFirstGuildIncidentId(store2.getGuildId());
  let guildsProto = store.getGuildsProto();
  if (null == guildsProto) {
    guildsProto = {};
  }
  let tmp2 = null;
  if (null != guildId) {
    tmp2 = guildsProto[guildId];
  }
  const show = null != guildId && !(null != tmp2 && tmp2.disableRaidAlertNag);
  return { show, guildId };
};
export const shouldShowRaidInAppNotification = function shouldShowRaidInAppNotification() {
  const guildId = getFirstGuildIncidentId(store2.getGuildId());
  let guildsProto = store.getGuildsProto();
  if (null == guildsProto) {
    guildsProto = {};
  }
  let tmp2 = null;
  if (null != guildId) {
    tmp2 = guildsProto[guildId];
  }
  let guildIncident = null;
  if (null != guildId) {
    guildIncident = store3.getGuildIncident(guildId);
  }
  let isUnderLockdownResult = null != guildIncident;
  if (isUnderLockdownResult) {
    isUnderLockdownResult = require(7791) /* hasDetectedRaid */.isUnderLockdown(guildIncident);
    const obj2 = require(7791) /* hasDetectedRaid */;
  }
  const show = null != guildId && !isUnderLockdownResult && !(null != tmp2 && tmp2.disableRaidAlertNag);
  return { show, guildId };
};
export const getDisabledActions = function getDisabledActions(id) {
  if (null == id) {
    return { dmsDisabled: false, invitesDisabled: false };
  } else {
    const guildIncident = store3.getGuildIncident(id.id);
    const obj = {};
    let hasItem;
    if (null != id) {
      const features = id.features;
      hasItem = features.has(constants.INVITES_DISABLED);
    }
    if (!hasItem) {
      let invitesDisabledUntil;
      if (null != guildIncident) {
        invitesDisabledUntil = guildIncident.invitesDisabledUntil;
      }
      let tmp4 = null != invitesDisabledUntil;
      if (tmp4) {
        const _Date = Date;
        const date = new Date(guildIncident.invitesDisabledUntil);
        const _Date2 = Date;
        const date1 = new Date();
        tmp4 = date > date1;
      }
      hasItem = tmp4;
    }
    obj.invitesDisabled = hasItem;
    let dmsDisabledUntil;
    if (null != guildIncident) {
      dmsDisabledUntil = guildIncident.dmsDisabledUntil;
    }
    let tmp15 = null != dmsDisabledUntil;
    if (tmp15) {
      const _Date3 = Date;
      const date2 = new Date(guildIncident.dmsDisabledUntil);
      const _Date4 = Date;
      const date3 = new Date();
      tmp15 = date2 > date3;
    }
    obj.dmsDisabled = tmp15;
    return obj;
  }
};
export const useDisabledActions = function useDisabledActions(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  if (null == id) {
    id = closure_11;
  }
  let obj = id(624);
  const items = [closure_9];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getGuildIncident(id), items1);
  if (null == id) {
    obj = { dmsDisabled: false, invitesDisabled: false };
  } else {
    obj = {};
    let hasItem;
    if (null != id) {
      const features = id.features;
      hasItem = features.has(constants.INVITES_DISABLED);
    }
    if (!hasItem) {
      let invitesDisabledUntil;
      if (null != stateFromStores) {
        invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
      }
      let tmp6 = null != invitesDisabledUntil;
      if (tmp6) {
        const _Date = Date;
        const date = new Date(stateFromStores.invitesDisabledUntil);
        const _Date2 = Date;
        const date1 = new Date();
        tmp6 = date > date1;
      }
      hasItem = tmp6;
    }
    obj.invitesDisabled = hasItem;
    let dmsDisabledUntil;
    if (null != stateFromStores) {
      dmsDisabledUntil = stateFromStores.dmsDisabledUntil;
    }
    let tmp17 = null != dmsDisabledUntil;
    if (tmp17) {
      const _Date3 = Date;
      const date2 = new Date(stateFromStores.dmsDisabledUntil);
      const _Date4 = Date;
      const date3 = new Date();
      tmp17 = date2 > date3;
    }
    obj.dmsDisabled = tmp17;
  }
  return obj;
};
export const useShowAntiRaidInGuildNotifSettings = function useShowAntiRaidInGuildNotifSettings(arg0) {
  const _require = arg0;
  const items = [closure_6, _createForOfIteratorHelperLoose];
  return _require(624).useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(callback);
    return callback(outer1_3[13]).canReportRaid(guild, outer1_6);
  });
};
