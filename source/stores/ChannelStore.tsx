// Module ID: 1348
// Function ID: 15947
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 57, 5, 6, 7, 1349, 1351, 1352, 1194, 1838, 1849, 653, 3, 1327, 1882, 1901, 1902, 686, 1903, 20, 21, 1904, 22, 566, 2]

// Module 1348 (_isNativeReflectConstruct)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import _tryLoadAsync from "_tryLoadAsync";
import ChannelReader from "ChannelReader";
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_10 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_createForOfIteratorHelperLoose";
import closure_20 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";
import importDefaultResult from "_slicedToArray";
import set from "_inherits";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
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
function ensureGuildLoaded(guild_id, Basic, getBasicChannel) {
  let iter2;
  const _require = guild_id;
  if (null != guild_id) {
    if ("null" !== guild_id) {
      if (!set.has(guild_id)) {
        if (Basic !== closure_40.Basic) {
          const databaseResult = importDefault(1882).database();
          importDefault = databaseResult;
          if (null != databaseResult) {
            const _HermesInternal4 = HermesInternal;
            importDefaultResult.verbose("hydrating guild (guild: " + guild_id + ", trace: " + getBasicChannel + ")");
            const _HermesInternal5 = HermesInternal;
            const result = _require(1901).tryLoadOrResetCacheGateway("ensureGuildLoaded(" + guild_id + ")", () => databaseResult(outer1_2[18]).getSync(closure_1, closure_0), "ensureGuildLoaded");
            if (null == result) {
              set.add(guild_id);
              store.restored(guild_id);
              const _HermesInternal3 = HermesInternal;
              importDefaultResult.log("load returned null; early returning (guild: " + guild_id + ", database: " + databaseResult + ")");
            } else {
              const tmp42 = callback2(result, 2);
              const first = tmp42[0];
              importDefault(1903)(first);
              if (Basic !== closure_40.Basic) {
                closure_39 = closure_39 + 1;
              }
              set.add(guild_id);
              store.restored(guild_id);
              const _HermesInternal = HermesInternal;
              importDefault(20).mark("\u2757", "loaded guild channels (guild: " + guild_id + ")", tmp42[1]);
              const tmp15 = _createForOfIteratorHelperLoose(first);
              let iter = tmp15();
              if (!iter.done) {
                do {
                  let value = iter.value;
                  let _Object = Object;
                  let tmp16 = closure_24;
                  if (!Object.hasOwn(closure_24, value.id)) {
                    let tmp17 = setGuildChannel;
                    let tmp18 = callback6;
                    let tmp19 = setGuildChannel(callback6(value));
                  }
                  iter2 = tmp15();
                  iter = iter2;
                } while (!iter2.done);
              }
              const _HermesInternal2 = HermesInternal;
              importDefaultResult.verbose("hydration complete (guild: " + guild_id + ", channels: " + first.length + ", guilds_loaded: " + closure_39 + ")");
              const obj2 = importDefault(20);
            }
            const obj3 = _require(1901);
          }
          const obj = importDefault(1882);
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
  if (null != dependencyMap2[id]) {
    const tmp10 = _createForOfIteratorHelperLoose(importDefault(21).keys(dependencyMap2[id]));
    let iter = tmp10();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp11 = closure_24;
        delete tmp3[tmp4];
        let iter2 = tmp10();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    delete tmp3[tmp2];
    const obj = importDefault(21);
  }
  if (null != dependencyMap5[id]) {
    delete tmp[tmp2];
  }
}
function _getBasicChannel2(channelId) {
  ensureChannelLoaded(channelId, closure_40.Basic, "getBasicChannel");
  let basicChannel = dependencyMap[channelId];
  if (null == basicChannel) {
    basicChannel = dependencyMap3[channelId];
  }
  if (null == basicChannel) {
    basicChannel = dependencyMap4[channelId];
  }
  if (null == basicChannel) {
    basicChannel = dependencyMap7[channelId];
  }
  if (null == basicChannel) {
    basicChannel = store.getBasicChannel(channelId);
  }
  return basicChannel;
}
function _getChannel(channelId) {
  ensureChannelLoaded(channelId, closure_40.Full, "getChannel");
  let tmp2 = dependencyMap[channelId];
  if (null == tmp2) {
    tmp2 = dependencyMap3[channelId];
  }
  if (null == tmp2) {
    tmp2 = dependencyMap4[channelId];
  }
  if (null == tmp2) {
    tmp2 = dependencyMap7[channelId];
  }
  if (null == tmp2) {
    tmp2 = table2[channelId];
  }
  return tmp2;
}
function setChannel(isPrivate) {
  if (isPrivate.isPrivate()) {
    const id = isPrivate.id;
    delete tmp2[tmp];
    setPrivateChannel(isPrivate);
  } else if (isPrivate.isThread()) {
    setThread(isPrivate);
  } else if (set.has(isPrivate.type)) {
    setGuildChannel(isPrivate);
  }
}
function setPrivateChannel(recipients) {
  recipients = recipients.recipients;
  if (null != recipients.find((arg0) => outer1_1(outer1_2[23])(arg0))) {
    return false;
  } else {
    closure_26[recipients.id] = recipients;
    if (recipients.type === ChannelTypes.DM) {
      closure_30[recipients.getRecipientId()] = recipients.id;
    }
    closure_31 = closure_31 + 1;
  }
}
function setThread(value) {
  let id;
  let merge;
  let obj = {};
  let nsfw;
  ({ id, merge } = value);
  if (null != dependencyMap[value.parent_id]) {
    nsfw = tmp.nsfw;
  }
  obj.nsfw = true === nsfw;
  let type;
  if (null != dependencyMap[value.parent_id]) {
    type = tmp.type;
  }
  obj.parentChannelThreadType = type;
  closure_28[id] = merge(obj);
  if (value.isScheduledForDeletion()) {
    obj = { type: "THREAD_DELETE", channel: value };
    importDefault(686).dispatch(obj);
    const obj2 = importDefault(686);
  }
}
function setGuildChannel(value) {
  let guild_id;
  let id;
  ({ id, guild_id } = value);
  closure_24[id] = value;
  let obj = dependencyMap2[guild_id];
  if (null == obj) {
    obj = {};
  }
  dependencyMap2[guild_id] = obj;
  dependencyMap2[guild_id][id] = value;
  let num = 0;
  if (null != dependencyMap6[guild_id]) {
    num = tmp5;
  }
  dependencyMap6[guild_id] = num + 1;
  if (null != value.linkedLobby) {
    obj = dependencyMap5[guild_id];
    if (null == obj) {
      obj = {};
    }
    dependencyMap5[guild_id] = obj;
    dependencyMap5[guild_id][id] = value;
    const tmp7 = dependencyMap5;
  } else if (null != dependencyMap5[guild_id]) {
    delete tmp2[tmp];
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
        let tmp24 = setGuildChannel;
        let tmp25 = setGuildChannel(iter5.value);
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
        let tmp6 = deleteChannel;
        let tmp7 = dependencyMap;
        let tmp8 = deleteChannel(dependencyMap[iter.value]);
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
    tmp = channels.writes.length > 0 || channels.deletes.length > 0;
  }
  if (null != threads) {
    const tmp27 = _createForOfIteratorHelperLoose(threads);
    let iter7 = tmp27();
    if (!iter7.done) {
      do {
        let tmp28 = setThread;
        let tmp29 = setThread(iter7.value);
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
    if (outer1_16.has(type.type)) {
      outer1_49(outer1_12(type));
    }
  });
}
function deleteChannel(guild_id) {
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
    if (guild_id.id in closure_26) {
      const id = guild_id.id;
      delete tmp3[tmp];
    }
    if (guild_id.id in closure_24) {
      const id2 = guild_id.id;
      delete tmp3[tmp];
    }
    if (guild_id.id in closure_28) {
      const id3 = guild_id.id;
      delete tmp3[tmp];
    }
    if (null != guild_id) {
      let tmp10 = null != dependencyMap2[guild_id];
      if (tmp10) {
        tmp10 = guild_id.id in dependencyMap2[guild_id];
      }
      if (tmp10) {
        const id4 = guild_id.id;
        delete tmp3[tmp];
      }
      let tmp15 = null != dependencyMap5[guild_id];
      if (tmp15) {
        tmp15 = guild_id.id in dependencyMap5[guild_id];
      }
      if (tmp15) {
        const id5 = guild_id.id;
        delete tmp2[tmp];
      }
    }
    if (null != guild_id.guild_id) {
      if (!set2.has(guild_id.type)) {
        let num = 0;
        if (null != dependencyMap6[guild_id.guild_id]) {
          num = tmp22;
        }
        dependencyMap6[guild_id.guild_id] = num + 1;
        const tmp20 = dependencyMap6;
      }
    }
    if (callback5(guild_id.type)) {
      closure_31 = closure_31 + 1;
    }
  }
}
function handleDeleteChannel(channel) {
  channel = channel.channel;
  let obj = dependencyMap[channel.id];
  if (null == obj) {
    obj = dependencyMap3[channel.id];
  }
  if (null == obj) {
    obj = dependencyMap4[channel.id];
  }
  if (null == obj) {
    return false;
  } else {
    deleteChannel(obj);
    if (!("basicPermissions" in obj)) {
      if (obj.type === ChannelTypes.DM) {
        if (table[obj.getRecipientId(obj)] === obj.id) {
          delete tmp[tmp2];
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
        let tmp4 = set3;
        hasItem = set3.has(value.thread.type);
      }
      if (hasItem) {
        let tmp5 = setThread;
        let tmp6 = callback4;
        let tmp7 = setThread(callback4(value.thread));
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((arg0) => {
    let channels;
    let messages;
    let threads;
    ({ messages, threads, channels } = arg0);
    let item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        outer3_55(thread.thread);
      });
    });
    const item1 = threads.forEach(outer1_55);
    const item2 = channels.forEach((id) => {
      const obj = outer2_12(id);
      const tmp = null != outer2_48(id.id);
      if (!obj.isPrivate()) {
        if (!tmp) {
          outer2_49(obj);
        }
      } else {
        outer2_37[obj.id] = obj;
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
  for (const key10006 in _isNativeReflectConstruct.getFavoriteChannels()) {
    let tmp2 = key10006;
    let tmp3 = store2;
    let categoryRecord = store2.getCategoryRecord(key10006);
    if (null == categoryRecord) {
      continue;
    } else {
      let tmp = closure_33;
      closure_33[key10006] = categoryRecord;
      continue;
    }
    continue;
  }
}
function guildChannelCount(id) {
  let length = null;
  if (null != dependencyMap2[id]) {
    const _Object = Object;
    length = Object.keys(dependencyMap2[id]).length;
  }
  return length;
}
({ createChannelRecordFromServer: closure_12, isPrivate: closure_13, GUILD_CHANNEL_TYPES: closure_14, THREAD_CHANNEL_TYPES: closure_15, ALL_CHANNEL_TYPES: closure_16, castChannelRecord: closure_17 } = _callSuper);
importDefaultResult = new importDefaultResult("ChannelStore");
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let closure_26 = {};
let c27 = null;
let closure_28 = {};
let closure_29 = {};
let closure_30 = {};
let c31 = 0;
let closure_32 = {};
let closure_33 = {};
let set = new Set();
let closure_35 = {};
let c36 = 0;
let closure_37 = {};
let c38 = 0;
let c39 = 0;
let closure_40 = { Basic: 0, [0]: "Basic", Full: 1, [1]: "Full" };
let tmp7 = ((Store) => {
  class ChannelStore {
    constructor() {
      self = this;
      tmp = outer1_8(this, ChannelStore);
      obj = outer1_4(ChannelStore);
      tmp2 = outer1_3;
      if (outer1_41()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(ChannelStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_18, outer1_10, outer1_11, outer1_19, outer1_20);
      const items = [outer1_11];
      this.syncWith(items, outer1_56);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "hasChannel",
    value(arg0) {
      return null != outer1_47(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getBasicChannel",
    value(arg0) {
      if (null != arg0) {
        return outer1_47(arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getChannel",
    value(arg0) {
      if (null != arg0) {
        return outer1_48(arg0);
      }
    }
  };
  items[4] = {
    key: "loadAllGuildAndPrivateChannelsFromDisk",
    value() {
      let done;
      const tmp = outer1_42(outer1_19.getGuildIds());
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = outer1_44;
          let tmp3 = outer1_40;
          let tmp4 = outer1_44(iter.value, outer1_40.Full, "loadAllGuildAndPrivateChannelsFromDisk");
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const merged = Object.assign(outer1_24);
      const merged1 = Object.assign(outer1_26);
      return {};
    }
  };
  items[5] = {
    key: "getChannelIds",
    value(arg0) {
      outer1_44(arg0, outer1_40.Basic, "getChannelIds");
      if (null == arg0) {
        let keys = outer1_1(outer1_2[22]).keys(outer1_26);
        const obj2 = outer1_1(outer1_2[22]);
      } else {
        let guildBasicChannels = outer1_10.getGuildBasicChannels(arg0);
        if (null == guildBasicChannels) {
          guildBasicChannels = outer1_25[arg0];
        }
        if (null == guildBasicChannels) {
          guildBasicChannels = outer1_23;
        }
        keys = outer1_1(outer1_2[22]).keys(guildBasicChannels);
        const obj = outer1_1(outer1_2[22]);
      }
      return keys;
    }
  };
  items[6] = {
    key: "getMutablePrivateChannels",
    value() {
      return outer1_26;
    }
  };
  items[7] = {
    key: "getMutableBasicGuildChannelsForGuild",
    value(arg0) {
      outer1_44(arg0, outer1_40.Basic, "getMutableBasicGuildChannelsForGuild");
      let guildBasicChannels = outer1_10.getGuildBasicChannels(arg0);
      if (null == guildBasicChannels) {
        guildBasicChannels = outer1_25[arg0];
      }
      if (null == guildBasicChannels) {
        guildBasicChannels = outer1_23;
      }
      return guildBasicChannels;
    }
  };
  items[8] = {
    key: "getMutableGuildChannelsForGuild",
    value(arg0) {
      outer1_44(arg0, outer1_40.Full, "getMutableGuildChannelsForGuild");
      let tmp2 = outer1_25[arg0];
      if (null == tmp2) {
        tmp2 = outer1_23;
      }
      return tmp2;
    }
  };
  items[9] = {
    key: "getSortedLinkedChannelsForGuild",
    value(arg0) {
      let tmp = outer1_29[arg0];
      if (null == tmp) {
        tmp = outer1_23;
      }
      const values = outer1_1(outer1_2[24]).values(tmp);
      return values.sort((id, id2) => outer2_1(outer2_2[22]).compare(id.id, id2.id));
    }
  };
  items[10] = {
    key: "getSortedPrivateChannels",
    value() {
      const values = outer1_1(outer1_2[24])(outer1_26).values();
      const sorted = values.sort((lastMessageId, lastMessageId2) => outer2_1(outer2_2[22]).compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId));
      const obj = outer1_1(outer1_2[24])(outer1_26);
      return sorted.reverse().value();
    }
  };
  items[11] = {
    key: "getDMFromUserId",
    value(arg0) {
      if (null != arg0) {
        return outer1_30[arg0];
      }
    }
  };
  items[12] = {
    key: "getDMChannelFromUserId",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        return self.getChannel(outer1_30[arg0]);
      }
    }
  };
  items[13] = {
    key: "getMutableDMsByUserIds",
    value() {
      return outer1_30;
    }
  };
  items[14] = {
    key: "getDMUserIds",
    value() {
      return outer1_1(outer1_2[22]).keys(outer1_30);
    }
  };
  items[15] = {
    key: "getPrivateChannelsVersion",
    value() {
      return outer1_31;
    }
  };
  items[16] = {
    key: "getGuildChannelsVersion",
    value(arg0) {
      let num = 0;
      if (null != outer1_32[arg0]) {
        num = tmp;
      }
      return num;
    }
  };
  items[17] = {
    key: "getAllThreadsForParent",
    value(arg0) {
      let closure_0 = arg0;
      const values = outer1_1(outer1_2[24]).values(outer1_28);
      return values.filter((parent_id) => parent_id.parent_id === closure_0);
    }
  };
  items[18] = {
    key: "getAllThreadsForGuild",
    value(arg0) {
      let closure_0 = arg0;
      const values = outer1_1(outer1_2[24]).values(outer1_28);
      return values.filter((guild_id) => guild_id.guild_id === closure_0);
    }
  };
  items[19] = {
    key: "getInitialOverlayState",
    value() {
      const merged = Object.assign(outer1_24);
      const merged1 = Object.assign(outer1_26);
      const merged2 = Object.assign(outer1_28);
      return {};
    }
  };
  items[20] = {
    key: "getDebugInfo",
    value() {
      const obj = { loadedGuildIds: Array.from(outer1_34).sort(outer1_1(outer1_2[22]).compare) };
      const keys = Object.keys(outer1_35);
      obj.pendingGuildLoads = keys.sort(outer1_1(outer1_2[22]).compare);
      const keys1 = Object.keys(outer1_25);
      const sorted = keys1.sort(outer1_1(outer1_2[22]).compare);
      obj.guildSizes = sorted.map((arg0) => "" + arg0 + ": " + outer2_57(arg0));
      return obj;
    }
  };
  return callback3(ChannelStore, items);
})(require("initialize").Store);
tmp7.displayName = "ChannelStore";
tmp7 = new tmp7(require("dispatcher"), {
  BACKGROUND_SYNC: function handleBackgroundSync(guilds) {
    guilds = guilds.guilds;
    let closure_0 = closure_25;
    let closure_24 = {};
    closure_25 = {};
    let closure_32 = {};
    let closure_29 = {};
    let item = guilds.forEach((data_mode) => {
      const dependencyMap = data_mode;
      if ("unavailable" === data_mode.data_mode) {
        const _HermesInternal2 = HermesInternal;
        outer1_22.fileOnly("Restoring guild channels b/c unavailable in bg sync, for " + data_mode.id + " #:" + outer1_57(data_mode.id));
        const item = outer1_1(outer1_2[24]).forEach(dependencyMap[data_mode.id], outer1_52);
        const arr4 = outer1_1(outer1_2[24]);
      } else if ("partial" === data_mode.data_mode) {
        const _HermesInternal = HermesInternal;
        outer1_22.fileOnly("Restoring guild channels b/c partial in bg sync, for " + data_mode.id + " #:" + outer1_57(data_mode.id));
        const item1 = outer1_1(outer1_2[24]).forEach(dependencyMap[data_mode.id], outer1_52);
        let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
        if (null == deleted_channel_ids) {
          deleted_channel_ids = [];
        }
        if (deleted_channel_ids.length > 0) {
          outer1_44(data_mode.id, outer1_40.Full, "handleBackgroundSync");
          const item2 = deleted_channel_ids.forEach((arg0) => {
            outer2_54(table[arg0]);
          });
        }
        const channels = data_mode.partial_updates.channels;
        if (null != channels) {
          const item3 = channels.forEach((arg0) => {
            outer2_52(outer2_12(arg0, data_mode.id));
          });
        }
        const arr = outer1_1(outer1_2[24]);
      } else {
        const _HermesInternal3 = HermesInternal;
        outer1_22.fileOnly("BG sync contained full channels for " + data_mode.id + " #:" + data_mode.channels.length);
        outer1_46(data_mode.id);
        outer1_34.add(data_mode.id);
        outer1_10.restored(data_mode.id);
        const channels1 = data_mode.channels;
        const item4 = channels1.forEach((arg0) => {
          outer2_52(outer2_12(arg0, data_mode.id));
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
        let tmp2 = callback2;
        let tmp3 = callback2(iter.value, 2);
        [tmp4, arr] = tmp3;
        let tmp5 = importDefaultResult;
        let _HermesInternal = HermesInternal;
        let fileOnlyResult = importDefaultResult.fileOnly("Lazy cache contained full guild channels for " + tmp4 + " #:" + arr.length);
        let tmp7 = set;
        let addResult = set.add(tmp4);
        let tmp9 = _createForOfIteratorHelperLoose;
        let tmp10 = _createForOfIteratorHelperLoose(arr);
        let iter2 = tmp10();
        if (!iter2.done) {
          do {
            let tmp11 = setChannel;
            let tmp12 = callback6;
            let tmp13 = setChannel(callback6(iter2.value));
            let iter3 = tmp10();
            iter2 = iter3;
            done = iter3.done;
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
          let tmp3 = setChannel;
          let tmp4 = require;
          let tmp5 = dependencyMap;
          let obj = require(1903) /* _createForOfIteratorHelperLoose */;
          let tmp6 = callback6;
          let tmp7 = setChannel(obj.deserializeChannel(callback6(iter.value)));
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
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
    id = id.getId();
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
        let tmp3 = setChannel;
        let tmp4 = setChannel(iter.value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (someResult) {
      const _Object = Object;
      const values = Object.values(closure_28);
      const item = values.forEach((arg0) => {
        outer1_49(arg0);
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
    let c27;
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
    ({ initialPrivateChannels: c27, initialPrivateChannels } = guilds);
    const item = initialPrivateChannels.forEach(setPrivateChannel);
    const tmp3 = _createForOfIteratorHelperLoose(guilds.guilds);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let value = iter.value;
        if ("partial" === value.dataMode) {
          let tmp4 = importDefault;
          let tmp5 = dependencyMap;
          let arr = importDefault(22);
          let tmp6 = setGuildChannel;
          let item1 = arr.forEach(tmp[value.id], setGuildChannel);
          let tmp8 = importDefaultResult;
          let tmp9 = guildChannelCount;
          let _HermesInternal = HermesInternal;
          let fileOnlyResult = importDefaultResult.fileOnly("Restoring guild channels for " + value.id + " #:" + guildChannelCount(value.id));
        }
        let tmp11 = handleOneGuildCreate;
        let tmp12 = handleOneGuildCreate(value);
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
      delete tmp2[tmp];
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
        let tmp2 = importDefaultResult;
        let _HermesInternal = HermesInternal;
        let fileOnlyResult = importDefaultResult.fileOnly("Lazy loaded guild channels for " + guildId);
        let tmp4 = importDefault;
        let tmp5 = dependencyMap;
        let tmp6 = importDefault(1903)(channels);
        let tmp7 = set;
        let addResult = set.add(guildId);
        let tmp9 = store;
        let restoredResult = store.restored(guildId);
        let tmp11 = _createForOfIteratorHelperLoose;
        let tmp12 = _createForOfIteratorHelperLoose(channels);
        let iter3 = tmp12();
        if (!iter3.done) {
          do {
            let value = iter3.value;
            let _Object = Object;
            let tmp13 = closure_24;
            if (!Object.hasOwn(closure_24, value.id)) {
              let tmp14 = setGuildChannel;
              let tmp15 = callback6;
              let tmp16 = setGuildChannel(callback6(value));
            }
            iter4 = tmp12();
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
        let tmp2 = setChannel;
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let obj = require(1903) /* _createForOfIteratorHelperLoose */;
        let tmp5 = callback6;
        let tmp6 = setChannel(obj.deserializeChannel(callback6(iter.value)));
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
      if (outer1_16.has(type.type)) {
        outer1_49(type);
      }
    });
  },
  THREAD_UPDATE: handleThreadCreateOrUpdate
});
let result = set.fileFinishedImporting("stores/ChannelStore.tsx");

export default tmp7;
export const ChannelLoader = (() => {
  class ChannelLoader {
    constructor() {
      tmp = outer1_8(this, ChannelLoader);
      return;
    }
  }
  let obj = {
    key: "loadAllMissingChannels",
    value() {
      const guildIds = outer1_19.getGuildIds();
      return this.loadGuildIds(guildIds.filter((arg0) => !outer2_34.has(arg0)));
    }
  };
  let items = [obj, , ];
  obj = {
    key: "loadGuildFromChannelId",
    value(arg0) {
      let guildIds = null;
      if (null != arg0) {
        let guild_id;
        const tmp5 = outer1_47(arg0);
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
      let found = arr.filter(ChannelLoader(outer1_2[15]).isNotNullish);
      if (0 === found.length) {
        return null;
      } else {
        const databaseResult = outer1_1(outer1_2[16]).database();
        let closure_1 = databaseResult;
        if (null == databaseResult) {
          return null;
        } else if (found.some((arg0) => !outer2_34.has(arg0))) {
          let closure_2 = outer1_36;
          return ChannelLoader(outer1_2[17]).tryLoadOrResetCacheGatewayAsync("loadChannels", outer1_7(async () => {
            const mapped = outer1_0.map((guildId) => {
              let closure_0 = guildId;
              if (outer4_34.has(guildId)) {
                return null;
              } else if (null != outer4_35[guildId]) {
                const _HermesInternal = HermesInternal;
                outer4_22.fileOnly("Skipping loading " + guildId + " because a load is pending");
                return null;
              } else {
                let obj = outer4_1(outer4_2[18]);
                const async = obj.getAsync(outer2_1, guildId);
                const nextPromise = async.then((channels) => {
                  outer5_22.fileOnly("Lazy loaded channels for " + closure_0 + " #:" + channels.length);
                  return { guildId: closure_0, channels };
                });
                outer4_35[guildId] = nextPromise;
                obj = { guildId, promise: nextPromise };
                return obj;
              }
            });
            const found = mapped.filter(ChannelLoader(outer3_2[15]).isNotNullish);
            const tmp = yield Promise.all(found.map((promise) => promise.promise));
            if (outer3_36 !== outer1_2) {
              outer3_22.fileOnly(`lastResetTime has changed, skipping loads for ${arr3.map((guildId) => guildId.guildId)}`);
              return null;
            } else {
              const found1 = arr4.filter((guildId) => !outer4_34.has(guildId.guildId));
              let obj = outer3_1(outer3_2[19]);
              obj = { type: "LOAD_CHANNELS", channels: found1 };
              yield obj.dispatch(obj);
              return null;
            }
            arr3 = found;
            arr4 = tmp;
          }));
        } else {
          return null;
        }
        const obj2 = outer1_1(outer1_2[16]);
      }
    }
  };
  items[2] = obj;
  return callback3(ChannelLoader, null, items);
})();
