// Module ID: 10249
// Function ID: 79094
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4044, 1316, 1838, 3758, 7791, 566, 686, 2]

// Module 10249 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function computeAlertSettings() {
  let done;
  guildsProto = guildsProto.getGuildsProto();
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
let closure_11 = {};
let closure_12 = {};
let tmp2 = ((Store) => {
  class GuildIncidentsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildIncidentsStore);
      obj = outer1_5(GuildIncidentsStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildIncidentsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9, outer1_10, outer1_7);
      const items = [outer1_8, outer1_9, outer1_10, outer1_7];
      this.syncWith(items, outer1_16);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getGuildIncident",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getIncidentsByGuild",
    value() {
      return outer1_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildAlertSettings",
    value() {
      return outer1_12;
    }
  };
  return callback(GuildIncidentsStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildIncidentsStore";
tmp2 = new tmp2(require("dispatcher"), {
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
        let tmp2 = incidentsDataFromServer;
        if (null != properties) {
          incidents_data = properties.incidents_data;
        }
        let tmp2Result = tmp2(incidents_data);
        let tmp5 = null != tmp2Result;
        if (tmp5) {
          let tmp6 = require;
          let tmp7 = dependencyMap;
          let obj = require(7791) /* hasDetectedRaid */;
          let hasDetectedActivityResult = obj.hasDetectedActivity(tmp2Result);
          if (!hasDetectedActivityResult) {
            let tmp9 = require;
            let tmp10 = dependencyMap;
            let obj2 = require(7791) /* hasDetectedRaid */;
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
      let hasDetectedActivityResult = require(7791) /* hasDetectedRaid */.hasDetectedActivity(tmpResult);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = require(7791) /* hasDetectedRaid */.isUnderLockdown(tmpResult);
        const obj2 = require(7791) /* hasDetectedRaid */;
      }
      tmp4 = hasDetectedActivityResult;
      const obj = require(7791) /* hasDetectedRaid */;
    }
    if (tmp4) {
      closure_11[guild.id] = tmpResult;
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    const tmp3 = incidentsDataFromServer(guild.incidents_data);
    if (null == tmp3) {
      const id = guild.id;
      delete tmp2[tmp];
    } else {
      if (!obj.hasDetectedActivity(tmp3)) {
        const obj2 = require(7791) /* hasDetectedRaid */;
      }
      closure_11[guild.id] = tmp3;
      obj = require(7791) /* hasDetectedRaid */;
    }
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete tmp2[tmp];
  },
  LOGOUT: function handleLogout() {
    let closure_11 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_antiraid/GuildIncidentsStore.tsx");

export default tmp2;
