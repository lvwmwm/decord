// Module ID: 5307
// Function ID: 44951
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5307 (_isNativeReflectConstruct)
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
function parseServerGuildSticker(sticker) {
  return { id: sticker.id, tags: sticker.tags, type: sticker.type, name: sticker.name, description: sticker.description, format_type: sticker.format_type, guild_id: sticker.guild_id, available: sticker.available, version: sticker.version, user_id: sticker.user_id, [closure_9]: "GuildSticker" };
}
function parseServerGuildStickers(stickers) {
  let done;
  const obj = {};
  const tmp = _createForOfIteratorHelperLoose(stickers);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = closure_14;
      obj[value.id] = closure_14(value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return obj;
}
function deriveStickerMetadata(guildId, tags) {
  const items = [];
  tags = items;
  let obj = { type: tags(dependencyMap[9]).StickerMetadataTypes.STICKER_NAME };
  const trimmed = tags.name.trim();
  obj.value = trimmed.toLocaleLowerCase();
  items.push(obj);
  if (null != tags.tags) {
    obj = { type: tags(dependencyMap[9]).StickerMetadataTypes.TAG };
    const trimmed1 = str.trim();
    obj.value = trimmed1.toLocaleLowerCase();
    items.push(obj);
    const guild = guild.getGuild(guildId);
    if (null != guild) {
      const trimmed2 = guild.name.trim();
      const toLocaleLowerCaseResult = trimmed2.toLocaleLowerCase();
      let tmp3 = null != toLocaleLowerCaseResult;
      if (tmp3) {
        tmp3 = "" !== toLocaleLowerCaseResult;
      }
      if (tmp3) {
        obj = { type: tags(dependencyMap[9]).StickerMetadataTypes.GUILD_NAME, value: toLocaleLowerCaseResult };
        items.push(obj);
      }
      const str3 = guild.name;
    }
    const byName = importDefault(dependencyMap[10]).getByName(str);
    if (null != byName) {
      const obj1 = { type: tags(dependencyMap[9]).StickerMetadataTypes.CORRELATED_EMOJI, value: byName.surrogates };
      items.push(obj1);
      byName.forEachDiversity((surrogates) => items.push({ type: items(closure_2[9]).StickerMetadataTypes.CORRELATED_EMOJI, value: surrogates.surrogates }));
    }
    const obj5 = importDefault(dependencyMap[10]);
  }
  return items;
}
function syncStickers(arg0, op, setPartition) {
  let done;
  let done2;
  if ("full_sync" === op.op) {
    setPartition.setPartition(arg0, parseServerGuildStickers(op.items));
  } else {
    const nullablePartition = setPartition.getNullablePartition(arg0);
    if (null == nullablePartition) {
      setPartition.setPartition(arg0, parseServerGuildStickers(op.writes));
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
          value = iter3.value;
          let tmp8 = closure_14;
          obj[value.id] = closure_14(value);
          let iter4 = tmp7();
          iter3 = iter4;
          done2 = iter4.done;
        } while (!done2);
      }
      setPartition.setPartition(arg0, obj);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const TypeTag = arg1(dependencyMap[6]).TypeTag;
let closure_10 = importDefault(dependencyMap[8]);
let tmp2 = (LibdiscoreStore) => {
  class GuildStickersStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, GuildStickersStore);
      items1 = [...items];
      obj = closure_7(GuildStickersStore);
      tmp2 = closure_6;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.database = tmp2Result.addKKVDatabase("guildStickers");
      database = tmp2Result.database;
      tmp2Result.stickerByIdIndex = database.addSecondaryKVIndex("id");
      database2 = tmp2Result.database;
      tmp2Result.getAllGuildStickers = database2.memoized((obj) => {
        const map = new Map();
        for (const key10010 in arg0) {
          let tmp = key10010;
          let _Object = Object;
          let result = map.set(key10010, Object.values(arg0[key10010].root));
        }
        return map;
      });
      database3 = tmp2Result.database;
      tmp2Result.getStickerMetadataMap = database3.memoized((obj) => {
        const map = new Map();
        for (const key10014 in arg0) {
          let tmp5 = key10014;
          let _Object = Object;
          let entries = Object.entries(arg0[key10014].root);
          let num = 0;
          if (0 >= entries.length) {
            continue;
          } else {
            do {
              let tmp = closure_3;
              let tmp2 = closure_3(entries[num], 2);
              let tmp3 = closure_16;
              let result = map.set(tmp2[0], closure_16(key10014, tmp2[1]));
              num = num + 1;
              let length = entries.length;
            } while (num < length);
            // continue
          }
          continue;
        }
        return map;
      });
      database4 = tmp2Result.database;
      tmp2Result.getStickersByGuildId = database4.memoizedPartition((arg0, arg1) => Object.values(arg1));
      return tmp2Result;
    }
  }
  const arg1 = GuildStickersStore;
  callback2(GuildStickersStore, LibdiscoreStore);
  let obj = {
    key: "getStickerById",
    value(arg0) {
      const stickerByIdIndex = this.stickerByIdIndex;
      const value = stickerByIdIndex.get(arg0);
      let tmp2;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  const items = [obj, ];
  obj = {
    key: "stateWrapper",
    value() {
      return this.database;
    }
  };
  items[1] = obj;
  return callback(GuildStickersStore, items);
}(arg1(dependencyMap[7]).LibdiscoreStore);
tmp2.displayName = "GuildStickersStore";
const LibdiscoreBatchStoreRefactorExperiment = arg1(dependencyMap[11]).LibdiscoreBatchStoreRefactorExperiment;
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
        let tmp6 = closure_17;
        let tmp7 = closure_17(value.id, value.stickers, getPartitionKeys);
        let iter6 = tmp5();
        iter5 = iter6;
        done2 = iter6.done;
      } while (!done2);
    }
  },
  GUILD_CREATE(guild) {
    if (null == guild.guild.joined_at) {
      return false;
    } else {
      syncStickers(guild.guild.id, guild.guild.stickers, arg1);
    }
  },
  GUILD_DELETE(guild, removePartition) {
    removePartition.removePartition(guild.guild.id);
  },
  GUILD_STICKERS_CREATE_SUCCESS(guildId, setRecord) {
    setRecord.setRecord(guildId.guildId, guildId.sticker.id, parseServerGuildSticker(guildId.sticker));
  },
  GUILD_STICKER_FETCH_SUCCESS(sticker, setRecord) {
    setRecord.setRecord(sticker.sticker.guild_id, sticker.sticker.id, parseServerGuildSticker(sticker.sticker));
  },
  GUILD_STICKERS_UPDATE(guildId, getPartition) {
    const partition = getPartition.getPartition(guildId.guildId);
    const tmp2 = parseServerGuildStickers(guildId.stickers);
    if (null != partition) {
      for (const key10013 in tmp2) {
        let tmp9 = key10013;
        let tmp10 = tmp2[key10013];
        let tmp11 = partition[key10013];
        let tmp4 = null != tmp11;
        if (tmp4) {
          tmp4 = null == tmp10.user_id;
        }
        if (tmp4) {
          tmp4 = null != tmp11.user_id;
        }
        if (!tmp4) {
          continue;
        } else {
          let obj = {};
          let tmp5 = obj;
          let tmp6 = tmp10;
          let merged = Object.assign(tmp10);
          obj["user_id"] = tmp11.user_id;
          tmp2[key10013] = obj;
          // continue
        }
        continue;
      }
    }
    getPartition.setPartition(guildId.guildId, tmp2);
  },
  CACHED_STICKERS_LOADED(stickers, setPartition) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(stickers.stickers);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_3;
        let tmp3 = closure_3(iter.value, 2);
        let tmp4 = closure_15;
        let setPartitionResult = setPartition.setPartition(tmp3[0], closure_15(tmp3[1]));
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  GUILD_STICKERS_FETCH_SUCCESS(guildId, setPartition) {
    setPartition.setPartition(guildId.guildId, parseServerGuildStickers(guildId.stickers));
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/stickers/GuildStickersStore.tsx");

export default tmp2;
