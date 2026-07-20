// Module ID: 1838
// Function ID: 20061
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 1838 (_createForOfIteratorHelperLoose)
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
  obj["features"] = arg1(dependencyMap[11]).toSetInplace(features.features);
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
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
({ constructInPlace: closure_9, set: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ GuildRecordTypeTag: closure_11, updateJoinedAt: closure_12, updateGameApplications: closure_13 } = arg1(dependencyMap[7]));
let closure_14 = importDefault(dependencyMap[8]);
const FAVORITES = arg1(dependencyMap[9]).FAVORITES;
const FAVORITES_GUILD_RECORD = arg1(dependencyMap[10]).FAVORITES_GUILD_RECORD;
let tmp4 = (LibdiscoreStore) => {
  class GuildStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, GuildStore);
      items1 = [...items];
      obj = closure_7(GuildStore);
      tmp2 = closure_6;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GuildStore = tmp2Result;
      tmp2Result.database = tmp2Result.addKVDatabase("guilds", closure_20);
      tmp2Result.getGuild = (arg0) => {
        if (null != arg0) {
          if (arg0 === closure_15) {
            let value = closure_16;
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
      tmp2Result.getGuildIds = database3.memoized((arg0) => callback(closure_3[12]).keys(arg0));
      return tmp2Result;
    }
  }
  const arg1 = GuildStore;
  callback2(GuildStore, LibdiscoreStore);
  let obj = {
    key: "stateWrapper",
    value() {
      return this.database;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGuildCount",
    value() {
      const database = this.database;
      return database.length();
    }
  };
  items[1] = obj;
  return callback(GuildStore, items);
}(arg1(dependencyMap[6]).LibdiscoreStore);
tmp4.displayName = "GuildStore";
const LibdiscoreBatchStoreRefactorExperiment = arg1(dependencyMap[14]).LibdiscoreBatchStoreRefactorExperiment;
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
          let tmp4 = closure_2;
          let tmp5 = closure_3;
          let obj = closure_2(closure_3[13]);
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
        let obj2 = importAll(dependencyMap[13]);
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
          let tmp2 = closure_2;
          let tmp3 = closure_3;
          let obj = closure_2(closure_3[13]);
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
        let tmp3 = closure_2;
        let tmp4 = closure_3;
        let obj = closure_2(closure_3[13]);
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
          let tmp4 = closure_2;
          let tmp5 = closure_3;
          let obj = closure_2(closure_3[13]);
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
    const result = get.set(guild.id, importAll(dependencyMap[13]).fromServer(guild, value));
  },
  GUILD_UPDATE(guild, get) {
    guild = guild.guild;
    const value = get.get(guild.id);
    const result = get.set(guild.id, importAll(dependencyMap[13]).fromGuild(guild, value));
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
    const id = id.getId();
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
        const tmp9 = date !== value.joinedAt && null != date;
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
const obj = {
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
          let tmp4 = closure_2;
          let tmp5 = closure_3;
          let obj = closure_2(closure_3[13]);
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
        let obj2 = importAll(dependencyMap[13]);
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
          let tmp2 = closure_2;
          let tmp3 = closure_3;
          let obj = closure_2(closure_3[13]);
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
        let tmp3 = closure_2;
        let tmp4 = closure_3;
        let obj = closure_2(closure_3[13]);
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
          let tmp4 = closure_2;
          let tmp5 = closure_3;
          let obj = closure_2(closure_3[13]);
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
    const result = get.set(guild.id, importAll(dependencyMap[13]).fromServer(guild, value));
  },
  GUILD_UPDATE(guild, get) {
    guild = guild.guild;
    const value = get.get(guild.id);
    const result = get.set(guild.id, importAll(dependencyMap[13]).fromGuild(guild, value));
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
    const id = id.getId();
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
        const tmp9 = date !== value.joinedAt && null != date;
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
};
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("stores/GuildStore.tsx");

export default tmp4;
