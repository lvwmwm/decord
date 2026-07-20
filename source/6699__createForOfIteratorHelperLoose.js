// Module ID: 6699
// Function ID: 52009
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6699 (_createForOfIteratorHelperLoose)
import bound from "module_25";

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
function handleSelectedChannelStoreChanged() {
  const channelId = store.getChannelId();
  if (null != channelId) {
    tmp6.recordChannel(channelId);
  }
}
function handleConnectionOpenSupplemental() {
  const result = tmp6.dropUnreachableChannels();
  tmp6.replaceLru(arg1(dependencyMap[15]).withFallbacks(extendedMemoryLru, 1250));
}
function handleChannelUpdate(id) {
  id = id.id;
  const isReadableChannelResult = arg1(dependencyMap[13]).isReadableChannel(id);
  let tmp2 = isReadableChannelResult;
  if (isReadableChannelResult) {
    tmp2 = id === store.getChannelId();
  }
  if (tmp2) {
    tmp6.recordChannel(id);
  }
  if (!isReadableChannelResult) {
    tmp6.deleteChannel(id);
  }
}
function handleChannelUpdates(channels) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(channels.channels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_21;
      let tmp3 = closure_21(iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function handleChannelDelete(channel) {
  tmp6.deleteChannel(channel.channel.id);
}
function handleThreadUpdate(channel) {
  handleChannelUpdate(channel.channel);
}
function handleThreadDelete(channel) {
  tmp6.deleteChannel(channel.channel.id);
}
function handleGuildDelete(guild) {
  let flag = !guild.guild.unavailable;
  if (flag) {
    tmp6.deleteGuild(guild.guild.id);
    flag = true;
  }
  return flag;
}
function handleLoginSuccess() {
  extendedMemoryLru.clear();
  lru.clear();
  let closure_14 = false;
}
function handleCacheLoadedLazyNoCache() {
  let closure_14 = true;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[8]);
let closure_10 = importDefault(dependencyMap[9]);
let closure_11 = null;
const extendedMemoryLru = new arg1(dependencyMap[10]).ExtendedMemoryLru(750, 500);
const lru = new arg1(dependencyMap[11]).Lru(15);
let closure_14 = false;
let tmp6 = (importDefaultResult) => {
  class SaveableChannelsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, SaveableChannelsStore);
      obj = {
        CACHE_LOADED_LAZY_NO_CACHE: closure_28,
        CACHE_LOADED_LAZY() {
              return tmp2Result.loadCache();
            },
        CHANNEL_DELETE: closure_23,
        CHANNEL_UPDATES: closure_22,
        CONNECTION_OPEN_SUPPLEMENTAL: closure_20,
        GUILD_DELETE: closure_26,
        LOGIN_SUCCESS: closure_27,
        THREAD_DELETE: closure_25,
        THREAD_UPDATE: closure_24
      };
      items = [];
      items[0] = obj;
      obj2 = closure_5(SaveableChannelsStore);
      tmp2 = closure_4;
      if (closure_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj2, items, closure_5(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      SaveableChannelsStore = tmp2Result;
      return tmp2Result;
    }
  }
  const arg1 = SaveableChannelsStore;
  callback2(SaveableChannelsStore, importDefaultResult);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
      this.waitFor(closure_9);
      this.waitFor(closure_8);
      const items = [closure_10];
      this.syncWith(items, () => true);
      const items1 = [closure_9];
      this.syncWith(items1, closure_19);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "loadCache",
    value() {
      const snapshot = this.readSnapshot(SaveableChannelsStore.LATEST_SNAPSHOT_VERSION);
      if (null != snapshot) {
        let closure_14 = true;
        SaveableChannelsStore.mergeSnapshot(snapshot);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "canEvictOrphans",
    value() {
      return closure_14;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "saveLimit",
    value(arg0) {
      const basicChannel = store.getBasicChannel(arg0);
      if (null == basicChannel) {
        if (null == basicChannel) {
          let num4 = 1;
        } else {
          num4 = 25;
          if (channelId.getChannelId() !== arg0) {
            num4 = 25;
          }
        }
        let num2 = num4;
      } else {
        num2 = 25;
        const obj = SaveableChannelsStore(closure_1[12]);
      }
      return num2;
    }
  };
  items[4] = {
    key: "getSaveableChannels",
    value() {
      const channelIds = store.getChannelIds(null);
      const mapped = channelIds.map((channelId) => ({ guildId: null, channelId }));
      if (isLowDisk.isLowDisk) {
        let tmp9 = mapped;
        if (null != closure_11) {
          const items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(mapped, 0);
          items[arraySpreadResult] = closure_11;
          const sum = arraySpreadResult + 1;
          tmp9 = items;
        }
        let items1 = tmp9;
      } else {
        items1 = [];
        arraySpreadResult = HermesBuiltin.arraySpread(mapped, 0);
        HermesBuiltin.arraySpread(set.values(), arraySpreadResult);
      }
      return items1;
    }
  };
  items[5] = {
    key: "takeSnapshot",
    value() {
      let obj = { version: SaveableChannelsStore.LATEST_SNAPSHOT_VERSION };
      obj = {};
      const items = [...closure_12.allValues()];
      obj.channels = items.filter((fallback) => !fallback.fallback);
      obj.penalized = [...closure_13.keys()];
      obj.lastChannel = closure_11;
      obj.data = obj;
      return obj;
    }
  };
  const items1 = [
    {
      key: "mergeSnapshot",
      value(lastChannel) {
        const extendedMemoryLru = new SaveableChannelsStore(closure_1[10]).ExtendedMemoryLru(extendedMemoryLru.primaryCapacity, extendedMemoryLru.extendedCapacity);
        const lru = new SaveableChannelsStore(closure_1[11]).Lru(lru.capacity);
        closure_11 = null != closure_11 ? closure_11 : lastChannel.lastChannel;
        const items = [lastChannel.channels, extendedMemoryLru.values()];
        for (let num = 0; num < items.length; num = num + 1) {
          let tmp3 = callback3;
          let tmp4 = callback3(items[num]);
          let iter = tmp4();
          if (!iter.done) {
            do {
              let value = iter.value;
              if (!value.fallback) {
                let tmp5 = closure_12;
                let putResult = closure_12.put(value.channelId, value);
              }
              let iter2 = tmp4();
              iter = iter2;
              let tmp7 = value;
            } while (!iter2.done);
          }
        }
        const items1 = [lastChannel.penalized, lru.keys()];
        for (let num2 = 0; num2 < items1.length; num2 = num2 + 1) {
          let tmp8 = callback3;
          let tmp9 = callback3(items1[num2]);
          let iter3 = tmp9();
          if (!iter3.done) {
            do {
              let tmp10 = closure_13;
              let putResult1 = closure_13.put(iter3.value, null);
              let iter4 = tmp9();
              iter3 = iter4;
              let done = iter4.done;
            } while (!done);
          }
        }
      }
    },
    {
      key: "recordChannel",
      value(channelId) {
        const basicChannel = store.getBasicChannel(channelId);
        if (null != basicChannel) {
          if (obj3.isReadableChannel(basicChannel)) {
            const obj = {};
            const guild_id = basicChannel.guild_id;
            let tmp2 = null;
            if (null != guild_id) {
              tmp2 = guild_id;
            }
            obj.guildId = tmp2;
            obj.channelId = channelId;
            obj.channelType = basicChannel.type;
            set.put(channelId, obj);
            if (obj2.isLimitedChannel(basicChannel)) {
              if (null != closure_13.put(channelId, null)) {
                set.delete(channelId);
              }
            }
            const obj2 = SaveableChannelsStore(closure_1[14]);
          }
          const obj3 = SaveableChannelsStore(closure_1[13]);
        }
      }
    },
    {
      key: "deleteChannel",
      value(arg0) {
        set.delete(arg0);
      }
    },
    {
      key: "deleteGuild",
      value(arg0) {
        let iter2;
        const tmp = callback3(set.allValues());
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            if (value.guildId === arg0) {
              let tmp2 = closure_12;
              let deleteResult = closure_12.delete(value.channelId);
            }
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
      }
    },
    {
      key: "dropUnreachableChannels",
      value() {
        let iter2;
        const tmp = callback3(set.keys());
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp2 = closure_7;
            let tmp4 = closure_0;
            let tmp5 = closure_1;
            let basicChannel = closure_7.getBasicChannel(value);
            let obj = closure_0(closure_1[13]);
            if (!obj.isReadableChannel(basicChannel)) {
              let tmp6 = closure_0;
              let deleteChannelResult = closure_0.deleteChannel(value);
            }
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
      }
    },
    {
      key: "deleteUnreadableGuildChannels",
      value(arg0) {
        let iter2;
        const tmp = callback3(set.values());
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let isReadableChannelIdResult = arg0 !== value.guildId;
            if (!isReadableChannelIdResult) {
              let tmp3 = closure_0;
              let tmp4 = closure_1;
              let obj = closure_0(closure_1[13]);
              isReadableChannelIdResult = obj.isReadableChannelId(value.channelId);
            }
            if (!isReadableChannelIdResult) {
              let tmp5 = closure_0;
              let deleteChannelResult = closure_0.deleteChannel(value.channelId);
            }
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
      }
    },
    {
      key: "replaceLru",
      value(arg0) {

      }
    }
  ];
  return callback(SaveableChannelsStore, items, items1);
}(importDefault(dependencyMap[7]));
tmp6.displayName = "SaveableChannelsStore";
tmp6.LATEST_SNAPSHOT_VERSION = 1;
tmp6 = new tmp6();
const importDefaultResult = importDefault(dependencyMap[7]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/app_database/modules/messages/SaveableChannelsStore.tsx");

export default tmp6;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_NON_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT = 1;
export const MAXIMUM_MESSAGES_PER_CHANNEL_EVER = bound;
