// Module ID: 1348
// Function ID: 15946
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1348 (_isNativeReflectConstruct)
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
function ensureGuildLoaded(guild_id, Basic, getBasicChannel) {
  let iter2;
  Basic = guild_id;
  if (null != guild_id) {
    if ("null" !== guild_id) {
      if (!set.has(guild_id)) {
        if (Basic !== closure_40.Basic) {
          const databaseResult = importDefault(dependencyMap[16]).database();
          const importDefault = databaseResult;
          if (null != databaseResult) {
            const _HermesInternal4 = HermesInternal;
            importDefaultResult.verbose("hydrating guild (guild: " + guild_id + ", trace: " + getBasicChannel + ")");
            const _HermesInternal5 = HermesInternal;
            const result = Basic(dependencyMap[17]).tryLoadOrResetCacheGateway("ensureGuildLoaded(" + guild_id + ")", () => databaseResult(closure_2[18]).getSync(databaseResult, arg0), "ensureGuildLoaded");
            if (null == result) {
              set.add(guild_id);
              store.restored(guild_id);
              const _HermesInternal3 = HermesInternal;
              importDefaultResult.log("load returned null; early returning (guild: " + guild_id + ", database: " + databaseResult + ")");
            } else {
              const tmp42 = callback2(result, 2);
              const first = tmp42[0];
              importDefault(dependencyMap[20])(first);
              if (Basic !== closure_40.Basic) {
                closure_39 = closure_39 + 1;
              }
              set.add(guild_id);
              store.restored(guild_id);
              const _HermesInternal = HermesInternal;
              importDefault(dependencyMap[21]).mark("\u2757", "loaded guild channels (guild: " + guild_id + ")", tmp42[1]);
              const tmp15 = _createForOfIteratorHelperLoose(first);
              let iter = tmp15();
              if (!iter.done) {
                do {
                  let value = iter.value;
                  let _Object = Object;
                  let tmp16 = closure_24;
                  if (!Object.hasOwn(closure_24, value.id)) {
                    let tmp17 = closure_52;
                    let tmp18 = closure_17;
                    let tmp19 = closure_52(closure_17(value));
                  }
                  iter2 = tmp15();
                  iter = iter2;
                } while (!iter2.done);
              }
              const _HermesInternal2 = HermesInternal;
              importDefaultResult.verbose("hydration complete (guild: " + guild_id + ", channels: " + first.length + ", guilds_loaded: " + closure_39 + ")");
              const obj2 = importDefault(dependencyMap[21]);
            }
            const obj3 = Basic(dependencyMap[17]);
          }
          const obj = importDefault(dependencyMap[16]);
        }
      }
    }
  }
}
function ensureChannelLoaded(channelId, Basic, getBasicChannel) {
  if (!Object.hasOwn(closure_24, channelId)) {
    const _Object = Object;
    if (!Object.hasOwn(closure_26, channelId)) {
      const _Object2 = Object;
      if (!Object.hasOwn(closure_28, channelId)) {
        const _Object3 = Object;
        if (!Object.hasOwn(closure_33, channelId)) {
          if (Basic === closure_40.Full) {
            const basicChannel = store.getBasicChannel(channelId);
            let guild_id;
            if (null != basicChannel) {
              guild_id = basicChannel.guild_id;
            }
            if (null != guild_id) {
              ensureGuildLoaded(basicChannel.guild_id, Basic, getBasicChannel);
            }
          }
        }
      }
    }
  }
}
function deleteGuildChannels(id) {
  let done;
  importDefaultResult.fileOnly("Deleting guild channels for " + id);
  if (null != closure_25[id]) {
    const tmp6 = _createForOfIteratorHelperLoose(importDefault(dependencyMap[22]).keys(closure_25[id]));
    let iter = tmp6();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp7 = closure_24;
        delete r2[r7];
        let iter2 = tmp6();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    delete r2[r1];
    const obj = importDefault(dependencyMap[22]);
  }
  if (null != closure_29[id]) {
    delete r0[r1];
  }
}
function _getBasicChannel2(channelId) {
  ensureChannelLoaded(channelId, closure_40.Basic, "getBasicChannel");
  let basicChannel = closure_24[channelId];
  if (null == basicChannel) {
    basicChannel = closure_26[channelId];
  }
  if (null == basicChannel) {
    basicChannel = closure_28[channelId];
  }
  if (null == basicChannel) {
    basicChannel = closure_33[channelId];
  }
  if (null == basicChannel) {
    basicChannel = store.getBasicChannel(channelId);
  }
  return basicChannel;
}
function _getChannel(channelId) {
  ensureChannelLoaded(channelId, closure_40.Full, "getChannel");
  let tmp2 = closure_24[channelId];
  if (null == tmp2) {
    tmp2 = closure_26[channelId];
  }
  if (null == tmp2) {
    tmp2 = closure_28[channelId];
  }
  if (null == tmp2) {
    tmp2 = closure_33[channelId];
  }
  if (null == tmp2) {
    tmp2 = closure_37[channelId];
  }
  return tmp2;
}
function setChannel(isPrivate) {
  if (isPrivate.isPrivate()) {
    const id = isPrivate.id;
    delete r3[r1];
    setPrivateChannel(isPrivate);
  } else if (isPrivate.isThread()) {
    setThread(isPrivate);
  } else if (set.has(isPrivate.type)) {
    setGuildChannel(isPrivate);
  }
}
function setPrivateChannel(recipients) {
  recipients = recipients.recipients;
  if (null != recipients.find((arg0) => callback(closure_2[23])(arg0))) {
    return false;
  } else {
    closure_26[recipients.id] = recipients;
    if (recipients.type === ChannelTypes.DM) {
      closure_30[recipients.getRecipientId()] = recipients.id;
    }
    closure_31 = closure_31 + 1;
  }
}
function setThread(isScheduledForDeletion) {
  let id;
  let merge;
  let obj = {};
  let nsfw;
  ({ id, merge } = isScheduledForDeletion);
  if (null != closure_24[isScheduledForDeletion.parent_id]) {
    nsfw = tmp.nsfw;
  }
  obj.nsfw = true === nsfw;
  let type;
  if (null != closure_24[isScheduledForDeletion.parent_id]) {
    type = tmp.type;
  }
  obj.parentChannelThreadType = type;
  closure_28[id] = merge(obj);
  if (isScheduledForDeletion.isScheduledForDeletion()) {
    obj = { type: "THREAD_DELETE", channel: isScheduledForDeletion };
    importDefault(dependencyMap[19]).dispatch(obj);
    const obj2 = importDefault(dependencyMap[19]);
  }
}
function setGuildChannel(value) {
  let guild_id;
  let id;
  ({ id, guild_id } = value);
  closure_24[id] = value;
  let obj = closure_25[guild_id];
  if (null == obj) {
    obj = {};
  }
  closure_25[guild_id] = obj;
  closure_25[guild_id][id] = value;
  let num = 0;
  if (null != closure_32[guild_id]) {
    num = tmp3;
  }
  closure_32[guild_id] = num + 1;
  if (null != value.linkedLobby) {
    obj = closure_29[guild_id];
    if (null == obj) {
      obj = {};
    }
    closure_29[guild_id] = obj;
    closure_29[guild_id][id] = value;
    const tmp5 = closure_29;
  } else if (null != closure_29[guild_id]) {
    delete r4[r1];
  }
}
function handleOneGuildCreate(arg0) {
  let channels;
  let done;
  let done2;
  let done3;
  let id;
  let threads;
  ({ id, channels, threads } = arg0);
  const op = channels.op;
  if ("full_sync" === op) {
    const _HermesInternal = HermesInternal;
    importDefaultResult.fileOnly("ConnectionOpen contained full channels for " + id + " #:" + channels.items.length);
    deleteGuildChannels(id);
    set.add(id);
    store.restored(id);
    const tmp23 = _createForOfIteratorHelperLoose(channels.items);
    let iter5 = tmp23();
    if (!iter5.done) {
      do {
        let tmp24 = closure_52;
        let tmp25 = closure_52(iter5.value);
        let iter6 = tmp23();
        iter5 = iter6;
        done2 = iter6.done;
      } while (!done2);
    }
  } else if ("update" === op) {
    if (tmp) {
      store.invalidate(id);
    }
    const tmp5 = _createForOfIteratorHelperLoose(channels.deletes);
    let iter = tmp5();
    if (!iter.done) {
      do {
        let tmp6 = closure_54;
        let tmp7 = closure_24;
        let tmp8 = closure_54(closure_24[iter.value]);
        let iter2 = tmp5();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    const tmp10 = _createForOfIteratorHelperLoose(channels.writes);
    let iter3 = tmp10();
    if (!iter3.done) {
      setGuildChannel(iter3.value);
      const iter4 = tmp10();
      iter3 = iter4;
    }
    const tmp = channels.writes.length > 0 || channels.deletes.length > 0;
  }
  if (null != threads) {
    const tmp27 = _createForOfIteratorHelperLoose(threads);
    let iter7 = tmp27();
    if (!iter7.done) {
      do {
        let tmp28 = closure_51;
        let tmp29 = closure_51(iter7.value);
        let iter8 = tmp27();
        iter7 = iter8;
        done3 = iter8.done;
      } while (!done3);
    }
  }
}
function handleThreadCreateOrUpdate(channel) {
  if (set3.has(channel.channel.type)) {
    let obj = _getChannel(channel.channel.id);
    if (null == obj) {
      let channel2 = channel.channel;
    } else {
      obj = {};
      channel = channel.channel;
      const merged = Object.assign(channel.toJS());
      let bitrate = channel.channel.bitrate;
      if (null == bitrate) {
        bitrate = obj.bitrate;
      }
      obj["bitrate"] = bitrate;
      channel2 = obj.merge(obj);
    }
    setChannel(channel2);
  } else {
    return false;
  }
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach((type) => {
    if (set.has(type.type)) {
      callback2(callback(type));
    }
  });
}
function deleteChannel(guild_id) {
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
    if (guild_id.id in closure_26) {
      const id = guild_id.id;
      delete r4[r2];
    }
    if (guild_id.id in closure_24) {
      const id2 = guild_id.id;
      delete r4[r2];
    }
    if (guild_id.id in closure_28) {
      const id3 = guild_id.id;
      delete r4[r2];
    }
    if (null != guild_id) {
      let tmp7 = null != closure_25[guild_id];
      if (tmp7) {
        tmp7 = guild_id.id in closure_25[guild_id];
      }
      if (tmp7) {
        const id4 = guild_id.id;
        delete r4[r2];
      }
      let tmp12 = null != closure_29[guild_id];
      if (tmp12) {
        tmp12 = guild_id.id in closure_29[guild_id];
      }
      if (tmp12) {
        const id5 = guild_id.id;
        delete r3[r2];
      }
    }
    if (null != guild_id.guild_id) {
      if (!set2.has(guild_id.type)) {
        let num = 0;
        if (null != closure_32[guild_id.guild_id]) {
          num = tmp19;
        }
        closure_32[guild_id.guild_id] = num + 1;
        const tmp17 = closure_32;
      }
    }
    if (callback5(guild_id.type)) {
      closure_31 = closure_31 + 1;
    }
  }
}
function handleDeleteChannel(channel) {
  channel = channel.channel;
  let obj = closure_24[channel.id];
  if (null == obj) {
    obj = closure_26[channel.id];
  }
  if (null == obj) {
    obj = closure_28[channel.id];
  }
  if (null == obj) {
    return false;
  } else {
    deleteChannel(obj);
    if (!("basicPermissions" in obj)) {
      if (obj.type === ChannelTypes.DM) {
        if (closure_30[obj.getRecipientId(obj)] === obj.id) {
          delete r1[r2];
        }
      }
    }
  }
}
function handleLoadMessages(messages) {
  let iter2;
  const tmp = _createForOfIteratorHelperLoose(messages.messages);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let hasItem = null != value.thread;
      if (hasItem) {
        let tmp3 = closure_28;
        hasItem = !(value.thread.id in closure_28);
      }
      if (hasItem) {
        let tmp4 = closure_16;
        hasItem = closure_16.has(value.thread.type);
      }
      if (hasItem) {
        let tmp5 = closure_51;
        let tmp6 = closure_12;
        let tmp7 = closure_51(closure_12(value.thread));
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  const item = data.forEach((arg0) => {
    let channels;
    let messages;
    let threads;
    ({ messages, threads, channels } = arg0);
    const item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        callback(thread.thread);
      });
    });
    const item1 = threads.forEach(closure_55);
    const item2 = channels.forEach((id) => {
      const obj = callback(id);
      const tmp = null != callback2(id.id);
      if (!obj.isPrivate()) {
        if (!tmp) {
          callback3(obj);
        }
      } else {
        closure_37[obj.id] = obj;
      }
    });
  });
}
function addThreadIfMissing(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = !(id.id in closure_28);
  }
  if (hasItem) {
    hasItem = set3.has(id.type);
  }
  if (hasItem) {
    setThread(callback4(id));
  }
}
function handleFavoritesUpdate() {
  let closure_33 = {};
  for (const key10006 in closure_11.getFavoriteChannels()) {
    let tmp2 = key10006;
    let tmp3 = closure_11;
    let categoryRecord = closure_11.getCategoryRecord(key10006);
    if (null == categoryRecord) {
      continue;
    } else {
      let tmp = closure_33;
      closure_33[key10006] = categoryRecord;
      // continue
    }
    continue;
  }
}
function guildChannelCount(arg0) {
  let length = null;
  if (null != closure_25[arg0]) {
    const _Object = Object;
    length = Object.keys(closure_25[arg0]).length;
  }
  return length;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
({ createChannelRecordFromServer: closure_12, isPrivate: closure_13, GUILD_CHANNEL_TYPES: closure_14, THREAD_CHANNEL_TYPES: closure_15, ALL_CHANNEL_TYPES: closure_16, castChannelRecord: closure_17 } = arg1(dependencyMap[9]));
let closure_18 = importDefault(dependencyMap[10]);
let closure_19 = importDefault(dependencyMap[11]);
let closure_20 = importDefault(dependencyMap[12]);
const ChannelTypes = arg1(dependencyMap[13]).ChannelTypes;
let importDefaultResult = importDefault(dependencyMap[14]);
importDefaultResult = new importDefaultResult("ChannelStore");
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let closure_26 = {};
let closure_27 = null;
let closure_28 = {};
let closure_29 = {};
let closure_30 = {};
let closure_31 = 0;
let closure_32 = {};
let closure_33 = {};
const set = new Set();
let closure_35 = {};
let closure_36 = 0;
let closure_37 = {};
let closure_38 = 0;
let closure_39 = 0;
let closure_40 = { Basic: 0, [0]: "Basic", Full: 1, [1]: "Full" };
const tmp2 = arg1(dependencyMap[9]);
let tmp7 = (Store) => {
  class ChannelStore {
    constructor() {
      self = this;
      tmp = closure_8(this, ChannelStore);
      obj = closure_4(ChannelStore);
      tmp2 = closure_3;
      if (closure_41()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ChannelStore;
  callback(ChannelStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_18, closure_10, closure_11, closure_19, closure_20);
      const items = [closure_11];
      this.syncWith(items, closure_56);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "hasChannel",
    value(arg0) {
      return null != callback7(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getBasicChannel",
    value(arg0) {
      if (null != arg0) {
        return callback7(arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getChannel",
    value(arg0) {
      if (null != arg0) {
        return callback8(arg0);
      }
    }
  };
  items[4] = {
    key: "loadAllGuildAndPrivateChannelsFromDisk",
    value() {
      let done;
      const tmp = callback5(guildIds.getGuildIds());
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_44;
          let tmp3 = closure_40;
          let tmp4 = closure_44(iter.value, closure_40.Full, "loadAllGuildAndPrivateChannelsFromDisk");
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const merged = Object.assign(closure_24);
      const merged1 = Object.assign(closure_26);
      return {};
    }
  };
  items[5] = {
    key: "getChannelIds",
    value(arg0) {
      callback6(arg0, closure_40.Basic, "getChannelIds");
      if (null == arg0) {
        let keys = callback(closure_2[22]).keys(closure_26);
        const obj2 = callback(closure_2[22]);
      } else {
        let guildBasicChannels = store.getGuildBasicChannels(arg0);
        if (null == guildBasicChannels) {
          guildBasicChannels = closure_25[arg0];
        }
        if (null == guildBasicChannels) {
          guildBasicChannels = closure_23;
        }
        keys = callback(closure_2[22]).keys(guildBasicChannels);
        const obj = callback(closure_2[22]);
      }
      return keys;
    }
  };
  items[6] = {
    key: "getMutablePrivateChannels",
    value() {
      return closure_26;
    }
  };
  items[7] = {
    key: "getMutableBasicGuildChannelsForGuild",
    value(arg0) {
      callback6(arg0, closure_40.Basic, "getMutableBasicGuildChannelsForGuild");
      let guildBasicChannels = store.getGuildBasicChannels(arg0);
      if (null == guildBasicChannels) {
        guildBasicChannels = closure_25[arg0];
      }
      if (null == guildBasicChannels) {
        guildBasicChannels = closure_23;
      }
      return guildBasicChannels;
    }
  };
  items[8] = {
    key: "getMutableGuildChannelsForGuild",
    value(arg0) {
      callback6(arg0, closure_40.Full, "getMutableGuildChannelsForGuild");
      let tmp2 = closure_25[arg0];
      if (null == tmp2) {
        tmp2 = closure_23;
      }
      return tmp2;
    }
  };
  items[9] = {
    key: "getSortedLinkedChannelsForGuild",
    value(arg0) {
      let tmp = closure_29[arg0];
      if (null == tmp) {
        tmp = closure_23;
      }
      const values = callback(closure_2[24]).values(tmp);
      return values.sort((id, id2) => callback(closure_2[22]).compare(id.id, id2.id));
    }
  };
  items[10] = {
    key: "getSortedPrivateChannels",
    value() {
      const values = callback(closure_2[24])(closure_26).values();
      const sorted = values.sort((lastMessageId, lastMessageId2) => callback(closure_2[22]).compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId));
      const obj = callback(closure_2[24])(closure_26);
      return sorted.reverse().value();
    }
  };
  items[11] = {
    key: "getDMFromUserId",
    value(arg0) {
      if (null != arg0) {
        return closure_30[arg0];
      }
    }
  };
  items[12] = {
    key: "getDMChannelFromUserId",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        return self.getChannel(closure_30[arg0]);
      }
    }
  };
  items[13] = {
    key: "getMutableDMsByUserIds",
    value() {
      return closure_30;
    }
  };
  items[14] = {
    key: "getDMUserIds",
    value() {
      return callback(closure_2[22]).keys(closure_30);
    }
  };
  items[15] = {
    key: "getPrivateChannelsVersion",
    value() {
      return closure_31;
    }
  };
  items[16] = {
    key: "getGuildChannelsVersion",
    value(arg0) {
      let num = 0;
      if (null != closure_32[arg0]) {
        num = tmp;
      }
      return num;
    }
  };
  items[17] = {
    key: "getAllThreadsForParent",
    value(arg0) {
      const ChannelStore = arg0;
      const values = callback(closure_2[24]).values(closure_28);
      return values.filter((parent_id) => parent_id.parent_id === parent_id);
    }
  };
  items[18] = {
    key: "getAllThreadsForGuild",
    value(arg0) {
      const ChannelStore = arg0;
      const values = callback(closure_2[24]).values(closure_28);
      return values.filter((guild_id) => guild_id.guild_id === guild_id);
    }
  };
  items[19] = {
    key: "getInitialOverlayState",
    value() {
      const merged = Object.assign(closure_24);
      const merged1 = Object.assign(closure_26);
      const merged2 = Object.assign(closure_28);
      return {};
    }
  };
  items[20] = {
    key: "getDebugInfo",
    value() {
      const obj = { loadedGuildIds: Array.from(closure_34).sort(callback(closure_2[22]).compare) };
      const keys = Object.keys(closure_35);
      obj.pendingGuildLoads = keys.sort(callback(closure_2[22]).compare);
      const keys1 = Object.keys(closure_25);
      const sorted = keys1.sort(callback(closure_2[22]).compare);
      obj.guildSizes = sorted.map((arg0) => "" + arg0 + ": " + callback(arg0));
      return obj;
    }
  };
  return callback3(ChannelStore, items);
}(importDefault(dependencyMap[25]).Store);
tmp7.displayName = "ChannelStore";
tmp7 = new tmp7(importDefault(dependencyMap[19]), {
  BACKGROUND_SYNC: function handleBackgroundSync(guilds) {
    guilds = guilds.guilds;
    let closure_0 = closure_25;
    let closure_24 = {};
    closure_25 = {};
    let closure_32 = {};
    let closure_29 = {};
    const item = guilds.forEach((data_mode) => {
      let closure_0 = data_mode;
      if ("unavailable" === data_mode.data_mode) {
        const _HermesInternal2 = HermesInternal;
        closure_22.fileOnly("Restoring guild channels b/c unavailable in bg sync, for " + data_mode.id + " #:" + callback4(data_mode.id));
        const item = callback(closure_2[24]).forEach(closure_0[data_mode.id], closure_52);
        const arr4 = callback(closure_2[24]);
      } else if ("partial" === data_mode.data_mode) {
        const _HermesInternal = HermesInternal;
        closure_22.fileOnly("Restoring guild channels b/c partial in bg sync, for " + data_mode.id + " #:" + callback4(data_mode.id));
        const item1 = callback(closure_2[24]).forEach(closure_0[data_mode.id], closure_52);
        let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
        if (null == deleted_channel_ids) {
          deleted_channel_ids = [];
        }
        if (deleted_channel_ids.length > 0) {
          callback2(data_mode.id, Full.Full, "handleBackgroundSync");
          const item2 = deleted_channel_ids.forEach((arg0) => {
            callback3(closure_24[arg0]);
          });
        }
        const channels = data_mode.partial_updates.channels;
        if (null != channels) {
          const item3 = channels.forEach((arg0) => {
            callback2(callback(arg0, arg0.id));
          });
        }
        const arr = callback(closure_2[24]);
      } else {
        const _HermesInternal3 = HermesInternal;
        closure_22.fileOnly("BG sync contained full channels for " + data_mode.id + " #:" + data_mode.channels.length);
        callback3(data_mode.id);
        set.add(data_mode.id);
        closure_10.restored(data_mode.id);
        const channels1 = data_mode.channels;
        const item4 = channels1.forEach((arg0) => {
          callback2(callback(arg0, arg0.id));
        });
      }
    });
  },
  CACHE_LOADED_LAZY: function handleLazyCacheLoaded(guilds) {
    let arr;
    let iter4;
    let tmp4;
    closure_38 = Math.max(closure_38, guilds.guilds.length);
    const tmp = _createForOfIteratorHelperLoose(guilds.guildChannels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_6;
        let tmp3 = closure_6(iter.value, 2);
        [tmp4, arr] = tmp3;
        let tmp5 = closure_22;
        let _HermesInternal = HermesInternal;
        let fileOnlyResult = closure_22.fileOnly("Lazy cache contained full guild channels for " + tmp4 + " #:" + arr.length);
        let tmp7 = closure_34;
        let addResult = closure_34.add(tmp4);
        let tmp9 = closure_42;
        let tmp10 = closure_42(arr);
        let iter2 = tmp10();
        if (!iter2.done) {
          do {
            let tmp11 = closure_49;
            let tmp12 = closure_17;
            let tmp13 = closure_49(closure_17(iter2.value));
            let iter3 = tmp10();
            iter2 = iter3;
            let done = iter3.done;
          } while (!done);
        }
        iter4 = tmp();
        iter = iter4;
      } while (!iter4.done);
    }
  },
  CACHE_LOADED: function handleCacheLoaded(guilds) {
    closure_38 = Math.max(closure_38, guilds.guilds.length);
    const initialGuildChannels = guilds.initialGuildChannels;
    const items = [guilds.privateChannels, initialGuildChannels];
    for (let num = 0; num < items.length; num = num + 1) {
      let tmp = _createForOfIteratorHelperLoose;
      let tmp2 = _createForOfIteratorHelperLoose(items[num]);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let tmp3 = closure_49;
          let tmp4 = closure_0;
          let tmp5 = closure_2;
          let obj = closure_0(closure_2[20]);
          let tmp6 = closure_17;
          let tmp7 = closure_49(obj.deserializeChannel(closure_17(iter.value)));
          let iter2 = tmp2();
          iter = iter2;
          let done = iter2.done;
        } while (!done);
      }
    }
    const first = initialGuildChannels[0];
    let guild_id;
    if (null != first) {
      guild_id = first.guild_id;
    }
    if (null != guild_id) {
      const _HermesInternal = HermesInternal;
      importDefaultResult.fileOnly("Early cache contained full guild channels for " + guild_id);
      set.add(guild_id);
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    setChannel(channel.channel);
  },
  CHANNEL_DELETE: handleDeleteChannel,
  CHANNEL_RECIPIENT_ADD: function handleAddRecipient(channelId) {
    const obj = _getChannel(channelId.channelId);
    let tmp2 = null == obj;
    const id = id.getId();
    if (!tmp2) {
      tmp2 = !obj.isPrivate();
    }
    let flag = !tmp2;
    if (!tmp2) {
      setChannel(obj.addRecipient(channelId.user.id, channelId.nick, id));
      flag = true;
    }
    return flag;
  },
  CHANNEL_RECIPIENT_REMOVE: function handleRemoveRecipient(channelId) {
    const obj = _getChannel(channelId.channelId);
    const tmp = null == obj || !obj.isPrivate();
    let flag = !tmp;
    if (!tmp) {
      setChannel(obj.removeRecipient(channelId.user.id));
      flag = true;
    }
    return flag;
  },
  CHANNEL_UPDATES: function handleUpdateChannels(channels) {
    let done;
    channels = channels.channels;
    const tmp2 = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_49;
        let tmp4 = closure_49(iter.value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (someResult) {
      const _Object = Object;
      const values = Object.values(closure_28);
      const item = values.forEach((arg0) => {
        callback2(arg0);
      });
    }
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
    lazyPrivateChannels = lazyPrivateChannels.lazyPrivateChannels;
    if (null != _null) {
      let closure_26 = {};
      const item = _null.forEach(setPrivateChannel);
    }
    const item1 = lazyPrivateChannels.forEach(setPrivateChannel);
  },
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let initialPrivateChannels;
    let iter2;
    let closure_30 = {};
    let closure_24 = {};
    let closure_25 = {};
    let closure_29 = {};
    let closure_28 = {};
    let closure_32 = {};
    let closure_37 = {};
    let closure_35 = {};
    let closure_36 = Date.now();
    ({ initialPrivateChannels: closure_27, initialPrivateChannels } = guilds);
    const item = initialPrivateChannels.forEach(setPrivateChannel);
    const tmp3 = _createForOfIteratorHelperLoose(guilds.guilds);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let value = iter.value;
        if ("partial" === value.dataMode) {
          let tmp4 = closure_1;
          let tmp5 = closure_2;
          let arr = closure_1(closure_2[24]);
          let tmp6 = closure_52;
          let item1 = arr.forEach(tmp[value.id], closure_52);
          let tmp8 = closure_22;
          let tmp9 = closure_57;
          let _HermesInternal = HermesInternal;
          let fileOnlyResult = closure_22.fileOnly("Restoring guild channels for " + value.id + " #:" + closure_57(value.id));
        }
        let tmp11 = closure_53;
        let tmp12 = closure_53(value);
        iter2 = tmp3();
        iter = iter2;
      } while (!iter2.done);
    }
    handleFavoritesUpdate();
  },
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: function handlePutOverwriteSuccess(overwrite) {
    overwrite = overwrite.overwrite;
    let obj = _getChannel(overwrite.channelId);
    if (null == obj) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj.permissionOverwrites);
      obj[overwrite.id] = overwrite;
      setChannel(obj.set("permissionOverwrites", obj));
    }
  },
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function handleDeleteOverwriteSuccess(channelId) {
    let obj = _getChannel(channelId.channelId);
    if (null == obj) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj.permissionOverwrites);
      delete r4[r2];
      setChannel(obj.set("permissionOverwrites", obj));
    }
  },
  GUILD_CREATE: function handleCreateGuild(guild) {
    handleOneGuildCreate(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    importDefaultResult.fileOnly("GuildDelete of " + guild.guild.id);
    deleteGuildChannels(guild.guild.id);
    set.delete(guild.guild.id);
    store.invalidate(guild.guild.id);
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_CHANNELS: function handleLoadChannels(channels) {
    let guildId;
    let iter5;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        ({ guildId, channels } = iter2.value);
        let tmp2 = closure_22;
        let _HermesInternal = HermesInternal;
        let fileOnlyResult = closure_22.fileOnly("Lazy loaded guild channels for " + guildId);
        let tmp4 = closure_1;
        let tmp5 = closure_2;
        let tmp6 = closure_1(closure_2[20])(channels);
        let tmp7 = closure_34;
        let addResult = closure_34.add(guildId);
        let tmp9 = closure_10;
        let restoredResult = closure_10.restored(guildId);
        let tmp11 = closure_42;
        let tmp12 = closure_42(channels);
        let iter3 = tmp12();
        if (!iter3.done) {
          do {
            let value = iter3.value;
            let _Object = Object;
            let tmp13 = closure_24;
            if (!Object.hasOwn(closure_24, value.id)) {
              let tmp14 = closure_52;
              let tmp15 = closure_17;
              let tmp16 = closure_52(closure_17(value));
            }
            let iter4 = tmp12();
            iter3 = iter4;
            let tmp17 = value;
          } while (!iter4.done);
        }
        iter5 = tmp();
        iter2 = iter5;
      } while (!iter5.done);
    }
    return false;
  },
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOGOUT: function handleLogout() {
    importDefaultResult.fileOnly("initializeClear()");
    let closure_30 = {};
    let closure_24 = {};
    let closure_25 = {};
    let closure_32 = {};
    let closure_29 = {};
    let closure_26 = {};
    let closure_37 = {};
    let closure_28 = {};
    const set = new Set();
    let closure_35 = {};
    let closure_36 = Date.now();
  },
  OVERLAY_INITIALIZE: function handleInitialize(channels) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_49;
        let tmp3 = closure_0;
        let tmp4 = closure_2;
        let obj = closure_0(closure_2[20]);
        let tmp5 = closure_17;
        let tmp6 = closure_49(obj.deserializeChannel(closure_17(iter.value)));
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_DELETE: handleDeleteChannel,
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach((type) => {
      if (set.has(type.type)) {
        callback(type);
      }
    });
  },
  THREAD_UPDATE: handleThreadCreateOrUpdate
});
const obj = {
  BACKGROUND_SYNC: function handleBackgroundSync(guilds) {
    guilds = guilds.guilds;
    let closure_0 = closure_25;
    let closure_24 = {};
    closure_25 = {};
    let closure_32 = {};
    let closure_29 = {};
    const item = guilds.forEach((data_mode) => {
      let closure_0 = data_mode;
      if ("unavailable" === data_mode.data_mode) {
        const _HermesInternal2 = HermesInternal;
        closure_22.fileOnly("Restoring guild channels b/c unavailable in bg sync, for " + data_mode.id + " #:" + callback4(data_mode.id));
        const item = callback(closure_2[24]).forEach(closure_0[data_mode.id], closure_52);
        const arr4 = callback(closure_2[24]);
      } else if ("partial" === data_mode.data_mode) {
        const _HermesInternal = HermesInternal;
        closure_22.fileOnly("Restoring guild channels b/c partial in bg sync, for " + data_mode.id + " #:" + callback4(data_mode.id));
        const item1 = callback(closure_2[24]).forEach(closure_0[data_mode.id], closure_52);
        let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
        if (null == deleted_channel_ids) {
          deleted_channel_ids = [];
        }
        if (deleted_channel_ids.length > 0) {
          callback2(data_mode.id, Full.Full, "handleBackgroundSync");
          const item2 = deleted_channel_ids.forEach((arg0) => {
            callback3(closure_24[arg0]);
          });
        }
        const channels = data_mode.partial_updates.channels;
        if (null != channels) {
          const item3 = channels.forEach((arg0) => {
            callback2(callback(arg0, arg0.id));
          });
        }
        const arr = callback(closure_2[24]);
      } else {
        const _HermesInternal3 = HermesInternal;
        closure_22.fileOnly("BG sync contained full channels for " + data_mode.id + " #:" + data_mode.channels.length);
        callback3(data_mode.id);
        set.add(data_mode.id);
        closure_10.restored(data_mode.id);
        const channels1 = data_mode.channels;
        const item4 = channels1.forEach((arg0) => {
          callback2(callback(arg0, arg0.id));
        });
      }
    });
  },
  CACHE_LOADED_LAZY: function handleLazyCacheLoaded(guilds) {
    let arr;
    let iter4;
    let tmp4;
    closure_38 = Math.max(closure_38, guilds.guilds.length);
    const tmp = _createForOfIteratorHelperLoose(guilds.guildChannels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_6;
        let tmp3 = closure_6(iter.value, 2);
        [tmp4, arr] = tmp3;
        let tmp5 = closure_22;
        let _HermesInternal = HermesInternal;
        let fileOnlyResult = closure_22.fileOnly("Lazy cache contained full guild channels for " + tmp4 + " #:" + arr.length);
        let tmp7 = closure_34;
        let addResult = closure_34.add(tmp4);
        let tmp9 = closure_42;
        let tmp10 = closure_42(arr);
        let iter2 = tmp10();
        if (!iter2.done) {
          do {
            let tmp11 = closure_49;
            let tmp12 = closure_17;
            let tmp13 = closure_49(closure_17(iter2.value));
            let iter3 = tmp10();
            iter2 = iter3;
            let done = iter3.done;
          } while (!done);
        }
        iter4 = tmp();
        iter = iter4;
      } while (!iter4.done);
    }
  },
  CACHE_LOADED: function handleCacheLoaded(guilds) {
    closure_38 = Math.max(closure_38, guilds.guilds.length);
    const initialGuildChannels = guilds.initialGuildChannels;
    const items = [guilds.privateChannels, initialGuildChannels];
    for (let num = 0; num < items.length; num = num + 1) {
      let tmp = _createForOfIteratorHelperLoose;
      let tmp2 = _createForOfIteratorHelperLoose(items[num]);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let tmp3 = closure_49;
          let tmp4 = closure_0;
          let tmp5 = closure_2;
          let obj = closure_0(closure_2[20]);
          let tmp6 = closure_17;
          let tmp7 = closure_49(obj.deserializeChannel(closure_17(iter.value)));
          let iter2 = tmp2();
          iter = iter2;
          let done = iter2.done;
        } while (!done);
      }
    }
    const first = initialGuildChannels[0];
    let guild_id;
    if (null != first) {
      guild_id = first.guild_id;
    }
    if (null != guild_id) {
      const _HermesInternal = HermesInternal;
      importDefaultResult.fileOnly("Early cache contained full guild channels for " + guild_id);
      set.add(guild_id);
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    setChannel(channel.channel);
  },
  CHANNEL_DELETE: handleDeleteChannel,
  CHANNEL_RECIPIENT_ADD: function handleAddRecipient(channelId) {
    const obj = _getChannel(channelId.channelId);
    let tmp2 = null == obj;
    const id = id.getId();
    if (!tmp2) {
      tmp2 = !obj.isPrivate();
    }
    let flag = !tmp2;
    if (!tmp2) {
      setChannel(obj.addRecipient(channelId.user.id, channelId.nick, id));
      flag = true;
    }
    return flag;
  },
  CHANNEL_RECIPIENT_REMOVE: function handleRemoveRecipient(channelId) {
    const obj = _getChannel(channelId.channelId);
    const tmp = null == obj || !obj.isPrivate();
    let flag = !tmp;
    if (!tmp) {
      setChannel(obj.removeRecipient(channelId.user.id));
      flag = true;
    }
    return flag;
  },
  CHANNEL_UPDATES: function handleUpdateChannels(channels) {
    let done;
    channels = channels.channels;
    const tmp2 = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_49;
        let tmp4 = closure_49(iter.value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (someResult) {
      const _Object = Object;
      const values = Object.values(closure_28);
      const item = values.forEach((arg0) => {
        callback2(arg0);
      });
    }
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
    lazyPrivateChannels = lazyPrivateChannels.lazyPrivateChannels;
    if (null != _null) {
      let closure_26 = {};
      const item = _null.forEach(setPrivateChannel);
    }
    const item1 = lazyPrivateChannels.forEach(setPrivateChannel);
  },
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let initialPrivateChannels;
    let iter2;
    let closure_30 = {};
    let closure_24 = {};
    let closure_25 = {};
    let closure_29 = {};
    let closure_28 = {};
    let closure_32 = {};
    let closure_37 = {};
    let closure_35 = {};
    let closure_36 = Date.now();
    ({ initialPrivateChannels: closure_27, initialPrivateChannels } = guilds);
    const item = initialPrivateChannels.forEach(setPrivateChannel);
    const tmp3 = _createForOfIteratorHelperLoose(guilds.guilds);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let value = iter.value;
        if ("partial" === value.dataMode) {
          let tmp4 = closure_1;
          let tmp5 = closure_2;
          let arr = closure_1(closure_2[24]);
          let tmp6 = closure_52;
          let item1 = arr.forEach(tmp[value.id], closure_52);
          let tmp8 = closure_22;
          let tmp9 = closure_57;
          let _HermesInternal = HermesInternal;
          let fileOnlyResult = closure_22.fileOnly("Restoring guild channels for " + value.id + " #:" + closure_57(value.id));
        }
        let tmp11 = closure_53;
        let tmp12 = closure_53(value);
        iter2 = tmp3();
        iter = iter2;
      } while (!iter2.done);
    }
    handleFavoritesUpdate();
  },
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: function handlePutOverwriteSuccess(overwrite) {
    overwrite = overwrite.overwrite;
    let obj = _getChannel(overwrite.channelId);
    if (null == obj) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj.permissionOverwrites);
      obj[overwrite.id] = overwrite;
      setChannel(obj.set("permissionOverwrites", obj));
    }
  },
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function handleDeleteOverwriteSuccess(channelId) {
    let obj = _getChannel(channelId.channelId);
    if (null == obj) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj.permissionOverwrites);
      delete r4[r2];
      setChannel(obj.set("permissionOverwrites", obj));
    }
  },
  GUILD_CREATE: function handleCreateGuild(guild) {
    handleOneGuildCreate(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    importDefaultResult.fileOnly("GuildDelete of " + guild.guild.id);
    deleteGuildChannels(guild.guild.id);
    set.delete(guild.guild.id);
    store.invalidate(guild.guild.id);
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_CHANNELS: function handleLoadChannels(channels) {
    let guildId;
    let iter5;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        ({ guildId, channels } = iter2.value);
        let tmp2 = closure_22;
        let _HermesInternal = HermesInternal;
        let fileOnlyResult = closure_22.fileOnly("Lazy loaded guild channels for " + guildId);
        let tmp4 = closure_1;
        let tmp5 = closure_2;
        let tmp6 = closure_1(closure_2[20])(channels);
        let tmp7 = closure_34;
        let addResult = closure_34.add(guildId);
        let tmp9 = closure_10;
        let restoredResult = closure_10.restored(guildId);
        let tmp11 = closure_42;
        let tmp12 = closure_42(channels);
        let iter3 = tmp12();
        if (!iter3.done) {
          do {
            let value = iter3.value;
            let _Object = Object;
            let tmp13 = closure_24;
            if (!Object.hasOwn(closure_24, value.id)) {
              let tmp14 = closure_52;
              let tmp15 = closure_17;
              let tmp16 = closure_52(closure_17(value));
            }
            let iter4 = tmp12();
            iter3 = iter4;
            let tmp17 = value;
          } while (!iter4.done);
        }
        iter5 = tmp();
        iter2 = iter5;
      } while (!iter5.done);
    }
    return false;
  },
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOGOUT: function handleLogout() {
    importDefaultResult.fileOnly("initializeClear()");
    let closure_30 = {};
    let closure_24 = {};
    let closure_25 = {};
    let closure_32 = {};
    let closure_29 = {};
    let closure_26 = {};
    let closure_37 = {};
    let closure_28 = {};
    const set = new Set();
    let closure_35 = {};
    let closure_36 = Date.now();
  },
  OVERLAY_INITIALIZE: function handleInitialize(channels) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_49;
        let tmp3 = closure_0;
        let tmp4 = closure_2;
        let obj = closure_0(closure_2[20]);
        let tmp5 = closure_17;
        let tmp6 = closure_49(obj.deserializeChannel(closure_17(iter.value)));
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_DELETE: handleDeleteChannel,
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach((type) => {
      if (set.has(type.type)) {
        callback(type);
      }
    });
  },
  THREAD_UPDATE: handleThreadCreateOrUpdate
};
const tmp6 = () => {
  class ChannelLoader {
    constructor() {
      tmp = closure_8(this, ChannelLoader);
      return;
    }
  }
  const arg1 = ChannelLoader;
  let obj = {
    key: "loadAllMissingChannels",
    value() {
      const guildIds = guildIds.getGuildIds();
      return this.loadGuildIds(guildIds.filter((arg0) => !set.has(arg0)));
    }
  };
  const items = [obj, , ];
  obj = {
    key: "loadGuildFromChannelId",
    value(arg0) {
      let guildIds = null;
      if (null != arg0) {
        let guild_id;
        const tmp5 = callback3(arg0);
        if (null != tmp5) {
          guild_id = tmp5.guild_id;
        }
        const items = [guild_id];
        guildIds = ChannelLoader.loadGuildIds(items);
      }
      return guildIds;
    }
  };
  items[1] = obj;
  obj = {
    key: "loadGuildIds",
    value(arr) {
      const found = arr.filter(ChannelLoader(closure_2[15]).isNotNullish);
      const ChannelLoader = found;
      if (0 === found.length) {
        return null;
      } else {
        const databaseResult = databaseResult(closure_2[16]).database();
        if (null == databaseResult) {
          return null;
        } else if (found.some((arg0) => !set.has(arg0))) {
          closure_2 = closure_36;
          return ChannelLoader(closure_2[17]).tryLoadOrResetCacheGatewayAsync("loadChannels", callback(async () => {
            const mapped = lib.map((guildId) => {
              if (set.has(guildId)) {
                return null;
              } else if (null != closure_35[guildId]) {
                const _HermesInternal = HermesInternal;
                closure_22.fileOnly("Skipping loading " + guildId + " because a load is pending");
                return null;
              } else {
                let obj = callback(closure_2[18]);
                const async = obj.getAsync(callback, guildId);
                const nextPromise = async.then((channels) => {
                  closure_22.fileOnly("Lazy loaded channels for " + channels + " #:" + channels.length);
                  return { guildId: channels, channels };
                });
                closure_35[guildId] = nextPromise;
                obj = { guildId, promise: nextPromise };
                return obj;
              }
            });
            const found = mapped.filter(lib(closure_2[15]).isNotNullish);
            const tmp = yield Promise.all(found.map((promise) => promise.promise));
            if (closure_36 !== closure_2) {
              closure_22.fileOnly(`lastResetTime has changed, skipping loads for ${arr3.map((guildId) => guildId.guildId)}`);
              return null;
            } else {
              const found1 = arr4.filter((guildId) => !set.has(guildId.guildId));
              let obj = callback(closure_2[19]);
              obj = { type: "LOAD_CHANNELS", channels: found1 };
              yield obj.dispatch(obj);
              return null;
            }
            const arr3 = found;
            const arr4 = tmp;
          }));
        } else {
          return null;
        }
        const obj2 = databaseResult(closure_2[16]);
      }
    }
  };
  items[2] = obj;
  return callback3(ChannelLoader, null, items);
}();
const result = arg1(dependencyMap[26]).fileFinishedImporting("stores/ChannelStore.tsx");

export default tmp7;
export const ChannelLoader = tmp6;
