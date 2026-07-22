// Module ID: 4990
// Function ID: 43153
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4990 (_isNativeReflectConstruct)
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
function fromServer(arg0, arg1) {
  let done;
  let obj = {};
  const tmp = _createForOfIteratorHelperLoose(arg1);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      obj = {};
      let tmp2 = closure_8;
      obj[closure_8] = "RawGuildEmoji";
      obj["guildId"] = arg0;
      obj["id"] = value.id;
      obj["animated"] = value.animated;
      obj["name"] = value.name;
      obj["require_colons"] = value.require_colons;
      obj["available"] = value.available;
      obj["roles"] = value.roles;
      obj["managed"] = value.managed;
      obj["version"] = value.version;
      let tmp3 = closure_0;
      let tmp4 = closure_1;
      obj["type"] = closure_0(closure_1[8]).EmojiTypes.GUILD;
      obj[value.id] = obj;
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return obj;
}
function syncEmojis(arg0, op, setPartition) {
  let done;
  let done2;
  if ("full_sync" === op.op) {
    setPartition.setPartition(arg0, fromServer(arg0, op.items));
  } else {
    const nullablePartition = setPartition.getNullablePartition(arg0);
    if (null == nullablePartition) {
      setPartition.setPartition(arg0, fromServer(arg0, op.writes));
    } else if (op.writes.length > 0) {
      const obj = {};
      const merged = Object.assign(nullablePartition);
      const tmp5 = _createForOfIteratorHelperLoose(op.deletes);
      let iter = tmp5();
      if (!iter.done) {
        do {
          let value = iter.value;
          delete r4[r1];
          let iter2 = tmp5();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const tmp7 = _createForOfIteratorHelperLoose(op.writes);
      let iter3 = tmp7();
      if (!iter3.done) {
        do {
          let _Object = Object;
          let tmp9 = closure_12;
          let items = [iter3.value];
          let merged1 = Object.assign(obj, closure_12(arg0, items));
          let iter4 = tmp7();
          iter3 = iter4;
          done2 = iter4.done;
        } while (!done2);
      }
      setPartition.setPartition(arg0, obj);
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const TypeTag = arg1(dependencyMap[6]).TypeTag;
let tmp2 = (LibdiscoreStore) => {
  class RawGuildEmojiStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, RawGuildEmojiStore);
      items1 = [...items];
      obj = closure_6(RawGuildEmojiStore);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.database = tmp2Result.addKKVDatabase("guild_emojis");
      return tmp2Result;
    }
  }
  const arg1 = RawGuildEmojiStore;
  callback2(RawGuildEmojiStore, LibdiscoreStore);
  let obj = {
    key: "stateWrapper",
    value() {
      return this.database;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGuildEmojis",
    value(arg0) {
      const database = this.database;
      return database.getNullablePartition(arg0);
    }
  };
  items[1] = obj;
  return callback(RawGuildEmojiStore, items);
}(arg1(dependencyMap[7]).LibdiscoreStore);
tmp2.displayName = "RawGuildEmojiStore";
const LibdiscoreBatchStoreRefactorExperiment = arg1(dependencyMap[9]).LibdiscoreBatchStoreRefactorExperiment;
tmp2 = new tmp2({
  LOGOUT(arg0, clear) {
    return clear.clear();
  },
  BACKGROUND_SYNC(arg0, clear) {
    return clear.clear();
  },
  RESET_SOCKET(arg0, clear) {
    return clear.clear();
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
        let tmp6 = closure_13;
        let tmp7 = closure_13(value.id, value.emojis, getPartitionKeys);
        let iter6 = tmp5();
        iter5 = iter6;
        done2 = iter6.done;
      } while (!done2);
    }
  },
  OVERLAY_INITIALIZE(emojis, clear) {
    clear.clear();
    const entries = Object.entries(emojis.emojis);
    const item = entries.forEach((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      arg1.setPartition(tmp, callback(tmp, tmp2));
    });
  },
  CACHED_EMOJIS_LOADED(emojis, setPartition) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(emojis.emojis);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_2;
        let tmp3 = closure_2(iter.value, 2);
        let first = tmp3[0];
        let tmp5 = closure_12;
        let setPartitionResult = setPartition.setPartition(first, closure_12(first, tmp3[1]));
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  GUILD_CREATE(guild) {
    syncEmojis(guild.guild.id, guild.guild.emojis, arg1);
  },
  GUILD_UPDATE(guild, setPartition) {
    setPartition.setPartition(guild.guild.id, fromServer(guild.guild.id, guild.guild.emojis));
  },
  GUILD_EMOJIS_UPDATE(guildId, setPartition) {
    setPartition.setPartition(guildId.guildId, fromServer(guildId.guildId, guildId.emojis));
  },
  GUILD_DELETE(guild, removePartition) {
    removePartition.removePartition(guild.guild.id);
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/emojis/RawGuildEmojiStore.tsx");

export default tmp2;
