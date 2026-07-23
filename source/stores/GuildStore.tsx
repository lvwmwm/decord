// Module ID: 1838
// Function ID: 20067
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 1388, 1839, 1391, 1194, 653, 1386, 1390, 21, 1387, 1841, 2]

// Module 1838 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "isGuildOwner";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import constructInPlace from "constructInPlace";
import isGuildOwner from "isGuildOwner";
import closure_14 from "_isNativeReflectConstruct";
import { FAVORITES } from "ME";
import { FAVORITES_GUILD_RECORD } from "date";
import { LibdiscoreBatchStoreRefactorExperiment } from "_callSuper";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_9;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createGuildRecordFromRust(features) {
  const obj = {};
  const merged = Object.assign(features);
  obj["features"] = require(1390) /* _createForOfIteratorHelperLoose */.toSetInplace(features.features);
  let date = null;
  if (null != features.joinedAt) {
    const _Date = Date;
    date = new Date(features.joinedAt);
  }
  obj["joinedAt"] = date;
  let date1 = null;
  if (null != features.premiumProgressBarEnabledUserUpdatedAt) {
    const _Date2 = Date;
    date1 = new Date(features.premiumProgressBarEnabledUserUpdatedAt);
  }
  obj["premiumProgressBarEnabledUserUpdatedAt"] = date1;
  return closure_9(closure_11, obj);
}
function updateGuildTheme(get, guildId, guildTheme) {
  const value = get.get(guildId);
  if (null != value) {
    const result = get.set(guildId, callback3(value, "guildTheme", guildTheme));
  }
}
({ constructInPlace: closure_9, set: closure_10 } = constructInPlace);
({ GuildRecordTypeTag: closure_11, updateJoinedAt: closure_12, updateGameApplications: closure_13 } = isGuildOwner);
let tmp4 = ((LibdiscoreStore) => {
  class GuildStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.database = tmp2Result.addKVDatabase("guilds", outer1_20);
      tmp2Result.getGuild = (arg0) => {
        if (null != arg0) {
          if (arg0 === outer2_15) {
            let value = outer2_16;
          } else {
            const database = tmp2Result.database;
            value = database.get(arg0);
          }
          return value;
        }
      };
      database = tmp2Result.database;
      tmp2Result.getGuilds = database.memoized((arg0) => {
        const merged = Object.assign(arg0);
        return {};
      });
      database2 = tmp2Result.database;
      tmp2Result.getGuildsArray = database2.memoized((arg0) => Object.values(arg0));
      database3 = tmp2Result.database;
      tmp2Result.getGuildIds = database3.memoized((arg0) => outer2_1(outer2_3[12]).keys(arg0));
      return tmp2Result;
    }
  }
  callback2(GuildStore, LibdiscoreStore);
  let obj = {
    key: "stateWrapper",
    value() {
      return this.database;
    }
  };
  let items = [obj, ];
  obj = {
    key: "getGuildCount",
    value() {
      const database = this.database;
      return database.length();
    }
  };
  items[1] = obj;
  return callback(GuildStore, items);
})(require("_isNativeReflectConstruct").LibdiscoreStore);
tmp4.displayName = "GuildStore";
tmp4 = new tmp4({
  BACKGROUND_SYNC(guilds, get) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(guilds.guilds);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        value = get.get(value.id);
        let tmp3 = null != value && "unavailable" !== value.data_mode;
        if (tmp3) {
          let tmp4 = importAll;
          let tmp5 = dependencyMap;
          let obj = importAll(1387);
          let result = get.set(value.id, obj.fromBackgroundSync(value, value));
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  LOGOUT(arg0, clear) {
    clear.clear();
  },
  RESET_SOCKET(arg0, clear) {
    clear.clear();
  },
  CONNECTION_OPEN(arg0, getAllRecords) {
    let done;
    let done2;
    let guilds;
    let unavailableGuilds;
    ({ guilds, unavailableGuilds } = arg0);
    const allRecords = getAllRecords.getAllRecords();
    const set = new Set(Object.keys(allRecords));
    const tmp2 = _createForOfIteratorHelperLoose(guilds);
    let iter = tmp2();
    if (!iter.done) {
      while (true) {
        let value = iter.value;
        let deleteResult = set.delete(value.id);
        if (null == value.properties) {
          if (null == allRecords[value.id]) {
            break;
          }
        }
        let tmp4 = importAll;
        let tmp5 = dependencyMap;
        let obj2 = importAll(1387);
        let result = getAllRecords.set(value.id, obj2.fromServer(value, allRecords[value.id]));
        let iter2 = tmp2();
        iter = iter2;
      }
      const _Error = Error;
      const error = new Error("Guild data was missing from store, but hash was still available.");
      throw error;
    }
    const tmp11 = _createForOfIteratorHelperLoose(unavailableGuilds);
    let iter3 = tmp11();
    if (!iter3.done) {
      do {
        let deleteResult1 = set.delete(iter3.value);
        let iter4 = tmp11();
        iter3 = iter4;
        done = iter4.done;
      } while (!done);
    }
    const tmp13 = _createForOfIteratorHelperLoose(set);
    let iter5 = tmp13();
    if (!iter5.done) {
      do {
        let removeResult = getAllRecords.remove(iter5.value);
        let iter6 = tmp13();
        iter5 = iter6;
        done2 = iter6.done;
      } while (!done2);
    }
  },
  OVERLAY_INITIALIZE(guilds, clear) {
    let additionalFields;
    let iter;
    let properties;
    guilds = guilds.guilds;
    clear.clear();
    if (null != guilds) {
      const tmp9 = _createForOfIteratorHelperLoose(guilds);
      let iter2 = tmp9();
      if (!iter2.done) {
        do {
          ({ properties, additionalFields } = iter2.value);
          let tmp2 = importAll;
          let tmp3 = dependencyMap;
          let obj = importAll(1387);
          obj = {};
          let date = null;
          if (null != additionalFields.joinedAt) {
            let _Date = Date;
            let tmp5 = new.target;
            let tmp6 = new.target;
            date = new Date(additionalFields.joinedAt);
          }
          obj.joinedAt = date;
          obj.premiumSubscriberCount = additionalFields.premiumSubscriberCount;
          let result = clear.set(properties.id, obj.fromGuildPropertiesWithAdditionalFields(properties, obj));
          iter = tmp9();
          iter2 = iter;
        } while (!iter.done);
      }
    }
  },
  CACHE_LOADED(guilds, clear) {
    let done;
    clear.clear();
    const tmp2 = _createForOfIteratorHelperLoose(guilds.guilds);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = importAll;
        let tmp4 = dependencyMap;
        let obj = importAll(1387);
        let result = clear.set(value.id, obj.fromSerializedGuildRecord(value));
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  CACHE_LOADED_LAZY(guilds, clear) {
    let done;
    guilds = guilds.guilds;
    if (0 !== guilds.length) {
      clear.clear();
      const tmp3 = _createForOfIteratorHelperLoose(guilds);
      let iter = tmp3();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp4 = importAll;
          let tmp5 = dependencyMap;
          let obj = importAll(1387);
          let result = clear.set(value.id, obj.fromSerializedGuildRecord(value));
          let iter2 = tmp3();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  },
  GUILD_CREATE(guild, get) {
    guild = guild.guild;
    const value = get.get(guild.id);
    if (null == guild.properties) {
      if (null == value) {
        const _Error = Error;
        const error = new Error("Guild data was missing from store, but hash was still available.");
        throw error;
      }
    }
    const result = get.set(guild.id, importAll(1387).fromServer(guild, value));
  },
  GUILD_UPDATE(guild, get) {
    guild = guild.guild;
    const value = get.get(guild.id);
    const result = get.set(guild.id, importAll(1387).fromGuild(guild, value));
  },
  GUILD_THEME_PREVIEW_SAVE_SUCCESS(guildId, get) {
    updateGuildTheme(get, guildId.guildId, guildId.guildTheme);
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS(guildId, get) {
    updateGuildTheme(get, guildId.guildId, guildId.guildTheme);
  },
  GUILD_DELETE(guild, remove) {
    guild = guild.guild;
    if (!guild.unavailable) {
      remove.remove(guild.id);
    }
  },
  GUILD_MEMBER_ADD(user, get) {
    let guildId;
    let joinedAt;
    ({ guildId, joinedAt } = user);
    id = id.getId();
    const value = get.get(guildId);
    if (id === user.user.id) {
      if (null != value) {
        let date = joinedAt;
        if ("string" === typeof joinedAt) {
          const _Date = Date;
          date = new Date(joinedAt);
        }
        if (tmp9) {
          const result = get.set(guildId, callback4(value, date));
        }
        tmp9 = date !== value.joinedAt && null != date;
      }
    }
  },
  GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE(arg0, get) {
    let gameApplicationIds;
    let guildId;
    ({ guildId, gameApplicationIds } = arg0);
    const value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, callback5(value, gameApplicationIds));
    }
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GuildStore.tsx");

export default tmp4;
