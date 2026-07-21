// Module ID: 10226
// Function ID: 79001
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getDisabledActions, shouldShowRaidInAppNotification, shouldShowRaidNotificationNagbar, useDisabledActions, useFirstGuildIncidentId, useGuildIncidentsState, useShowAntiRaidInGuildNotifSettings

// Module 10226 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const currentUser = currentUser.getCurrentUser();
  const incidentsByGuild = store3.getIncidentsByGuild();
  let obj = importDefault(dependencyMap[9]);
  const keys = obj.keys(incidentsByGuild);
  const tmp3 = _createForOfIteratorHelperLoose(keys.map((guildId) => guild.getGuild(guildId)));
  const iter = tmp3();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      value = iter2.value;
      if (null != value) {
        let tmp14 = incidentsByGuild[value.id];
        let tmp15 = tmp14;
        if (null != tmp14) {
          let tmp16 = arg1;
          let tmp17 = dependencyMap;
          let obj7 = arg1(dependencyMap[10]);
          if (obj7.hasDetectedActivity(tmp14)) {
            let tmp7 = arg1;
            let tmp8 = dependencyMap;
            let obj3 = arg1(dependencyMap[10]);
            if (!obj3.isUnderLockdown(tmp14)) {
              let tmp10 = importAll;
              let tmp11 = dependencyMap;
              let obj4 = importAll(dependencyMap[11]);
              let obj5 = importAll(dependencyMap[12]);
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
            let tmp4 = arg1;
            let tmp5 = dependencyMap;
            let obj2 = arg1(dependencyMap[10]);
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
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).IncidentAlertModeratorPermissions;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_11, GuildFeatures: closure_12 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidHooks.tsx");

export const useFirstGuildIncidentId = function useFirstGuildIncidentId() {
  let value;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_9];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => incidentsByGuild.getIncidentsByGuild());
  const arg1 = stateFromStores1;
  const obj2 = arg1(dependencyMap[8]);
  const items2 = [closure_5];
  const tmp3 = _createForOfIteratorHelperLoose(arg1(dependencyMap[8]).useStateFromStoresArray(items2, () => {
    const keys = callback(closure_3[9]).keys(stateFromStores1);
    return keys.map((guildId) => guild.getGuild(guildId));
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
          let tmp13 = arg1;
          let tmp14 = dependencyMap;
          let obj8 = arg1(dependencyMap[10]);
          if (obj8.hasDetectedActivity(tmp11)) {
            let tmp7 = importAll;
            let tmp8 = dependencyMap;
            let obj5 = importAll(dependencyMap[11]);
            let obj6 = importAll(dependencyMap[12]);
            obj = { user: stateFromStores, context: value, checkElevated: false };
            let tmp9 = closure_10;
            let tmp10 = tmp11;
            if (obj5.hasAny(obj6.computePermissions(obj), closure_10)) {
              break;
            }
          } else {
            let tmp4 = arg1;
            let tmp5 = dependencyMap;
            let obj4 = arg1(dependencyMap[10]);
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
  const arg1 = id;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    if (null == guild) {
      return false;
    } else {
      const guildPermissions = guildPermissions.getGuildPermissions(guild);
      let hasAnyResult = null != guildPermissions;
      if (hasAnyResult) {
        hasAnyResult = callback(closure_3[11]).hasAny(guildPermissions, closure_10);
        const obj = callback(closure_3[11]);
      }
      return hasAnyResult;
    }
  });
  const items1 = [closure_9];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => {
    let guildIncident = null;
    if (null != arg0) {
      guildIncident = guildIncident.getGuildIncident(arg0);
    }
    return guildIncident;
  });
  obj = { shouldShowIncidentActions: stateFromStores, incidentData: stateFromStores1 };
  let isUnderLockdownResult = null != stateFromStores1;
  if (isUnderLockdownResult) {
    isUnderLockdownResult = arg1(dependencyMap[10]).isUnderLockdown(stateFromStores1);
    const obj4 = arg1(dependencyMap[10]);
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
    isUnderLockdownResult = arg1(dependencyMap[10]).isUnderLockdown(guildIncident);
    const obj2 = arg1(dependencyMap[10]);
  }
  const show = null != guildId && !isUnderLockdownResult && !(null != tmp2 && tmp2.disableRaidAlertNag);
  return { show, guildId };
};
export const getDisabledActions = function getDisabledActions(id) {
  if (null == id) {
    return { surrogates: null, replace: null };
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
  const arg1 = id;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_9];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => guildIncident.getGuildIncident(id), items1);
  if (null == id) {
    obj = { surrogates: null, replace: null };
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
  const arg1 = arg0;
  const items = [closure_6, closure_5];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    return arg0(closure_3[13]).canReportRaid(guild, closure_6);
  });
};
