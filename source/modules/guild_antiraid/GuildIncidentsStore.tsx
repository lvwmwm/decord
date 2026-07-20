// Module ID: 10200
// Function ID: 78789
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10200 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function computeAlertSettings() {
  let done;
  let guildsProto = guildsProto.getGuildsProto();
  if (null == guildsProto) {
    guildsProto = {};
  }
  let closure_12 = {};
  const tmp = _createForOfIteratorHelperLoose(guildsArray.getGuildsArray());
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = closure_12;
      let obj = { guildId: value.id, guildName: value.name };
      let tmp3 = obj;
      let merged = Object.assign(guildsProto[value.id]);
      closure_12[value.id] = obj;
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function incidentsDataFromServer(incidents_data) {
  let tmp = null;
  if (null != incidents_data) {
    const _Object = Object;
    tmp = null;
    if (Object.keys(incidents_data).length > 0) {
      const obj = {};
      ({ raid_detected_at: obj.raidDetectedAt, dm_spam_detected_at: obj.dmSpamDetectedAt, dms_disabled_until: obj.dmsDisabledUntil, invites_disabled_until: obj.invitesDisabledUntil, lockdown_duration_hours: obj.lockdownDurationHours } = incidents_data);
      tmp = obj;
    }
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = {};
let closure_12 = {};
let tmp2 = (Store) => {
  class GuildIncidentsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildIncidentsStore);
      obj = closure_5(GuildIncidentsStore);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildIncidentsStore;
  callback2(GuildIncidentsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9, closure_10, closure_7);
      const items = [closure_8, closure_9, closure_10, closure_7];
      this.syncWith(items, closure_16);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getGuildIncident",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getIncidentsByGuild",
    value() {
      return closure_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildAlertSettings",
    value() {
      return closure_12;
    }
  };
  return callback(GuildIncidentsStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp2.displayName = "GuildIncidentsStore";
tmp2 = new tmp2(importDefault(dependencyMap[11]), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let iter2;
    let closure_11 = {};
    const tmp = _createForOfIteratorHelperLoose(guilds.guilds);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let properties = value.properties;
        let incidents_data;
        let tmp2 = closure_17;
        if (null != properties) {
          incidents_data = properties.incidents_data;
        }
        let tmp2Result = tmp2(incidents_data);
        let tmp5 = null != tmp2Result;
        if (tmp5) {
          let tmp6 = closure_0;
          let tmp7 = closure_1;
          let obj = closure_0(closure_1[9]);
          let hasDetectedActivityResult = obj.hasDetectedActivity(tmp2Result);
          if (!hasDetectedActivityResult) {
            let tmp9 = closure_0;
            let tmp10 = closure_1;
            let obj2 = closure_0(closure_1[9]);
            hasDetectedActivityResult = obj2.isUnderLockdown(tmp2Result);
          }
          tmp5 = hasDetectedActivityResult;
        }
        if (tmp5) {
          let tmp11 = closure_11;
          closure_11[value.id] = tmp2Result;
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const properties = guild.properties;
    let incidents_data;
    if (null != properties) {
      incidents_data = properties.incidents_data;
    }
    const tmpResult = incidentsDataFromServer(incidents_data);
    let tmp4 = null != tmpResult;
    if (tmp4) {
      let hasDetectedActivityResult = arg1(dependencyMap[9]).hasDetectedActivity(tmpResult);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = arg1(dependencyMap[9]).isUnderLockdown(tmpResult);
        const obj2 = arg1(dependencyMap[9]);
      }
      tmp4 = hasDetectedActivityResult;
      const obj = arg1(dependencyMap[9]);
    }
    if (tmp4) {
      closure_11[guild.id] = tmpResult;
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    const tmp = incidentsDataFromServer(guild.incidents_data);
    if (null == tmp) {
      const id = guild.id;
      delete r5[r4];
    } else {
      if (!obj.hasDetectedActivity(tmp)) {
        const obj2 = arg1(dependencyMap[9]);
      }
      closure_11[guild.id] = tmp;
      const obj = arg1(dependencyMap[9]);
    }
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete r1[r0];
  },
  LOGOUT: function handleLogout() {
    let closure_11 = {};
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_antiraid/GuildIncidentsStore.tsx");

export default tmp2;
