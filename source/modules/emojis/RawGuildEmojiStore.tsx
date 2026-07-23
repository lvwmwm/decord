// Module ID: 4993
// Function ID: 43171
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 1389, 1839, 3774, 1841, 2]

// Module 4993 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import TypeTag from "TypeTag";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { TypeTag } from "TypeTag";
import { LibdiscoreBatchStoreRefactorExperiment } from "_callSuper";

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
function fromServer(arg0, arg1) {
  let done;
  let obj = {};
  const tmp = _createForOfIteratorHelperLoose(arg1);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      obj = {};
      let tmp2 = TypeTag;
      obj[TypeTag] = "RawGuildEmoji";
      obj["guildId"] = arg0;
      obj["id"] = value.id;
      obj["animated"] = value.animated;
      obj["name"] = value.name;
      obj["require_colons"] = value.require_colons;
      obj["available"] = value.available;
      obj["roles"] = value.roles;
      obj["managed"] = value.managed;
      obj["version"] = value.version;
      let tmp3 = require;
      let tmp4 = dependencyMap;
      obj["type"] = require(3774) /* EmojiTypes */.EmojiTypes.GUILD;
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
      const tmp7 = _createForOfIteratorHelperLoose(op.deletes);
      let iter = tmp7();
      if (!iter.done) {
        do {
          let value = iter.value;
          delete tmp2[tmp];
          let iter2 = tmp7();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const tmp9 = _createForOfIteratorHelperLoose(op.writes);
      let iter3 = tmp9();
      if (!iter3.done) {
        do {
          let _Object = Object;
          let tmp11 = fromServer;
          let items = [iter3.value];
          let merged1 = Object.assign(obj, fromServer(arg0, items));
          let iter4 = tmp9();
          iter3 = iter4;
          done2 = iter4.done;
        } while (!done2);
      }
      setPartition.setPartition(arg0, obj);
    }
  }
}
let tmp2 = ((LibdiscoreStore) => {
  class RawGuildEmojiStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, RawGuildEmojiStore);
      items1 = [...items];
      obj = outer1_6(RawGuildEmojiStore);
      tmp2 = outer1_5;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.database = tmp2Result.addKKVDatabase("guild_emojis");
      return tmp2Result;
    }
  }
  callback3(RawGuildEmojiStore, LibdiscoreStore);
  let obj = {
    key: "stateWrapper",
    value() {
      return this.database;
    }
  };
  let items = [obj, ];
  obj = {
    key: "getGuildEmojis",
    value(arg0) {
      const database = this.database;
      return database.getNullablePartition(arg0);
    }
  };
  items[1] = obj;
  return callback2(RawGuildEmojiStore, items);
})(require("_isNativeReflectConstruct").LibdiscoreStore);
tmp2.displayName = "RawGuildEmojiStore";
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
        let tmp6 = syncEmojis;
        let tmp7 = syncEmojis(value.id, value.emojis, getPartitionKeys);
        let iter6 = tmp5();
        iter5 = iter6;
        done2 = iter6.done;
      } while (!done2);
    }
  },
  OVERLAY_INITIALIZE(emojis, clear) {
    let closure_0 = clear;
    clear.clear();
    const entries = Object.entries(emojis.emojis);
    const item = entries.forEach((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      partition.setPartition(tmp, outer1_12(tmp, tmp2));
    });
  },
  CACHED_EMOJIS_LOADED(emojis, setPartition) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(emojis.emojis);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = callback;
        let tmp3 = callback(iter.value, 2);
        let first = tmp3[0];
        let tmp5 = fromServer;
        let setPartitionResult = setPartition.setPartition(first, fromServer(first, tmp3[1]));
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
let result = require("_defineProperties").fileFinishedImporting("modules/emojis/RawGuildEmojiStore.tsx");

export default tmp2;
