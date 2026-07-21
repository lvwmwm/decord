// Module ID: 1910
// Function ID: 21527
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 1910 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importAll = Symbol_iterator;
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
      importAll = tmp;
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
function createGuildRoleRecordFromRust(permissions) {
  const obj = {};
  const merged = Object.assign(permissions);
  obj["permissions"] = importAll(dependencyMap[9]).deserialize(permissions.permissions);
  return constructInPlace(GuildRoleRecordTypeTag, obj);
}
function syncRoles(id, op, setPartition) {
  let tmp = "update" === op.op;
  if (tmp) {
    tmp = 0 === op.writes.length;
  }
  if (tmp) {
    tmp = 0 === op.deletes.length;
  }
  if (!tmp) {
    setPartition.setPartition(id, importAll(dependencyMap[11]).fromSyncOperation(id, op, setPartition.getPartition(id)));
    const obj = importAll(dependencyMap[11]);
  }
}
function checkGuildRolesExist(guild_create, id, partitionLength) {
  if (0 === partitionLength.partitionLength(id)) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Guild data was missing from store for guild " + id + ": missing roles. (phase: " + guild_create + ")");
    throw error;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const constructInPlace = arg1(dependencyMap[5]).constructInPlace;
const getGuildEveryoneRoleId = arg1(dependencyMap[7]).getGuildEveryoneRoleId;
const GuildRoleRecordTypeTag = arg1(dependencyMap[8]).GuildRoleRecordTypeTag;
let tmp2 = (LibdiscoreStore) => {
  class GuildRoleStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, GuildRoleStore);
      items1 = [...items];
      obj = closure_5(GuildRoleStore);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.database = tmp2Result.addKKVDatabase("guild_roles", closure_13);
      database = tmp2Result.database;
      tmp2Result.getSortedRoles = database.memoizedPartition((arg0, arg1) => callback(closure_1[10]).sortGuildRoleRecords(Object.values(arg1)));
      database2 = tmp2Result.database;
      tmp2Result.getRolesSnapshot = database2.memoizedPartition((arg0, arg1) => {
        const merged = Object.assign(arg1);
        return {};
      });
      return tmp2Result;
    }
  }
  const importAll = GuildRoleStore;
  callback2(GuildRoleStore, LibdiscoreStore);
  let obj = {
    key: "stateWrapper",
    value() {
      return this.database;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "serializeAllGuildRoles",
    value() {
      const database = this.database;
      return database.mapPartitions(GuildRoleStore(closure_1[11]).toSerializedPartition);
    }
  };
  items[1] = obj;
  obj = {
    key: "getUnsafeMutableRoles",
    value(arg0) {
      const database = this.database;
      return database.getPartition(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getManyRoles",
    value(arg0, arg1) {
      const database = this.database;
      return database.getManyRecords(arg0, arg1);
    }
  };
  items[4] = {
    key: "getRole",
    value(arg0, arg1) {
      const database = this.database;
      return database.getRecord(arg0, arg1);
    }
  };
  items[5] = {
    key: "getNumRoles",
    value(arg0) {
      const database = this.database;
      return database.partitionLength(arg0);
    }
  };
  items[6] = {
    key: "getEveryoneRole",
    value(id) {
      const database = this.database;
      const record = database.getRecord(id.id, callback3(id));
      if (null == record) {
        const _Error = Error;
        const error = new Error("Guild does not have an @everyone role");
        throw error;
      } else {
        return record;
      }
    }
  };
  items[7] = {
    key: "partitionVersion",
    value(arg0) {
      const database = this.database;
      return database.partitionVersion(arg0);
    }
  };
  return callback(GuildRoleStore, items);
}(arg1(dependencyMap[6]).LibdiscoreStore);
tmp2.displayName = "GuildRoleStore";
const LibdiscoreBatchStoreRefactorExperiment = arg1(dependencyMap[12]).LibdiscoreBatchStoreRefactorExperiment;
tmp2 = new tmp2({
  BACKGROUND_SYNC(guilds, getNullablePartition) {
    let nullablePartition;
    const tmp = _createForOfIteratorHelperLoose(guilds.guilds);
    let iter = tmp();
    if (!iter.done) {
      while (true) {
        let partial_updates = iter.value;
        nullablePartition = getNullablePartition.getNullablePartition(partial_updates.id);
        let tmp3 = null != nullablePartition && "unavailable" !== partial_updates.data_mode;
        if (tmp3) {
          break;
        } else {
          let iter2 = tmp();
          iter = iter2;
        }
      }
      if ("partial" === partial_updates.data_mode) {
        const obj2 = importAll(dependencyMap[10]);
        partial_updates = partial_updates.partial_updates;
        let filterRoleDeletesResult = obj2.filterRoleDeletes(partial_updates.id, nullablePartition, partial_updates.partial_updates.roles, partial_updates.deleted_role_ids);
      } else {
        filterRoleDeletesResult = importAll(dependencyMap[11]).fromServerArray(partial_updates.id, partial_updates.roles);
        const obj = importAll(dependencyMap[11]);
      }
      getNullablePartition.setPartition(partial_updates.id, filterRoleDeletesResult);
    }
  },
  OVERLAY_INITIALIZE(serializedGuildRoles, clear) {
    let done;
    clear.clear();
    const tmp2 = _createForOfIteratorHelperLoose(serializedGuildRoles.serializedGuildRoles);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let partitionKey = value.partitionKey;
        let tmp3 = closure_0;
        let tmp4 = closure_1;
        let obj = closure_0(closure_1[11]);
        let setPartitionResult = clear.setPartition(partitionKey, obj.fromSerializedPartition(partitionKey, value.values));
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  LOGOUT(arg0, clear) {
    clear.clear();
  },
  RESET_SOCKET(arg0, clear) {
    clear.clear();
  },
  CONNECTION_OPEN(guilds, getPartitionKeys) {
    let done;
    let done2;
    let iter4;
    guilds = guilds.guilds;
    const set = new Set(guilds.map((id) => id.id));
    const tmp = _createForOfIteratorHelperLoose(guilds.unavailableGuilds);
    let iter = tmp();
    if (!iter.done) {
      do {
        let addResult = set.add(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    const tmp3 = _createForOfIteratorHelperLoose(getPartitionKeys.getPartitionKeys());
    let iter3 = tmp3();
    if (!iter3.done) {
      do {
        let value = iter3.value;
        if (!set.has(value)) {
          let removePartitionResult = getPartitionKeys.removePartition(value);
        }
        iter4 = tmp3();
        iter3 = iter4;
      } while (!iter4.done);
    }
    const tmp5 = _createForOfIteratorHelperLoose(guilds);
    let iter5 = tmp5();
    if (!iter5.done) {
      do {
        value = iter5.value;
        let id = value.id;
        let tmp6 = closure_14;
        let tmp7 = closure_14(id, value.roles, getPartitionKeys);
        let tmp8 = closure_15;
        let tmp9 = closure_15("connection_open", id, getPartitionKeys);
        let iter6 = tmp5();
        iter5 = iter6;
        done2 = iter6.done;
      } while (!done2);
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
        let id = value.id;
        let tmp3 = closure_0;
        let tmp4 = closure_1;
        let obj = closure_0(closure_1[11]);
        let setPartitionResult = clear.setPartition(id, obj.fromSerializedPartition(id, value.roles));
        let tmp6 = closure_15;
        let tmp7 = closure_15("cache_loaded", id, clear);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  CACHE_LOADED_LAZY(guilds, clear) {
    let done;
    if (0 !== guilds.guilds.length) {
      clear.clear();
      const tmp8 = _createForOfIteratorHelperLoose(guilds.guilds);
      let iter2 = tmp8();
      if (!iter2.done) {
        do {
          let value = iter2.value;
          let id = value.id;
          let tmp = closure_0;
          let tmp2 = closure_1;
          let obj = closure_0(closure_1[11]);
          let setPartitionResult = clear.setPartition(id, obj.fromSerializedPartition(id, value.roles));
          let tmp4 = closure_15;
          let tmp5 = closure_15("cache_loaded_lazy", id, clear);
          let iter = tmp8();
          iter2 = iter;
          done = iter.done;
        } while (!done);
      }
    }
  },
  GUILD_CREATE(guild, partitionLength) {
    guild = guild.guild;
    const id = guild.id;
    syncRoles(id, guild.roles, partitionLength);
    checkGuildRolesExist("guild_create", id, partitionLength);
  },
  GUILD_UPDATE(guild, setPartition) {
    guild = guild.guild;
    const id = guild.id;
    setPartition.setPartition(id, importAll(dependencyMap[11]).fromServerArray(id, guild.roles));
  },
  GUILD_DELETE(guild, removePartition) {
    if (!guild.guild.unavailable) {
      removePartition.removePartition(tmp);
    }
  },
  GUILD_ROLE_CREATE(guildId, setRecord) {
    setRecord.setRecord(guildId.guildId, guildId.role.id, importAll(dependencyMap[11]).fromServer(guildId.guildId, guildId.role));
  },
  GUILD_ROLE_UPDATE(guildId, setRecord) {
    setRecord.setRecord(guildId.guildId, guildId.role.id, importAll(dependencyMap[11]).fromServer(guildId.guildId, guildId.role));
  },
  GUILD_ROLE_DELETE(guildId, removeRecord) {
    removeRecord.removeRecord(guildId.guildId, guildId.roleId);
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
const result = arg1(dependencyMap[13]).fileFinishedImporting("stores/GuildRoleStore.tsx");

export default tmp2;
