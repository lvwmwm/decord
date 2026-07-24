// Module ID: 6709
// Function ID: 52082
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 6, 7, 4808, 1348, 6710, 3, 4807, 1882, 6716, 6719, 1883, 2]

// Module 6709 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import timestamp from "timestamp";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import importDefaultResult from "_defineProperties";

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
function isLikelyNotDelta(author) {
  return null != author.author && null != author.content && null != author.mentions && null != author.timestamp;
}
importDefaultResult = new importDefaultResult("Messages");
let tmp4 = (() => {
  class ChannelHistory {
    constructor(arg0) {
      self = this;
      tmp = outer1_5(this, connectionId);
      this.connectionId = null;
      this.users = [];
      this.members = [];
      this.messages = [];
      if (arg0.length > 0) {
        first = arg0[0];
        connectionId = undefined;
        if (null != first) {
          connectionId = first.connectionId;
        }
        tmp3 = connectionId;
        tmp4 = outer1_4;
        num = 2;
        tmp5 = outer1_4(connectionId.computeUsersAndMembers(arg0), 2);
        num2 = 1;
        everyResult = arg0.length > 0;
        [tmp6, tmp7] = tmp5;
        if (everyResult) {
          everyResult = arg0.every((connectionId) => connectionId.connectionId === connectionId);
        }
        if (everyResult) {
          self.connectionId = connectionId;
        }
        self.users = tmp6;
        self.members = tmp7;
        self.messages = arg0.map((message) => message.message);
      }
      return;
    }
  }
  let obj = {
    key: "computeUsersAndMembers",
    value(messages) {
      let done;
      const self = this;
      const result = ChannelHistory(outer1_2[8]).requireSortedDescending(messages);
      const map = new Map();
      const map1 = new Map();
      const tmp2 = outer1_12(messages);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          let addIntoMapResult = self.addIntoMap(map, value.users, (id) => id.id);
          let addIntoMapResult1 = self.addIntoMap(map1, value.members, (userId) => userId.userId);
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const items = [Array.from(map.values()), Array.from(map1.values())];
      return items;
    }
  };
  let items = [obj, ];
  obj = {
    key: "addIntoMap",
    value(get) {
      let iter2;
      const tmp = outer1_12(arg1);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp2 = arg2(value);
          value = get.get(tmp2);
          let tmp4 = null == value;
          if (!tmp4) {
            let tmp5 = value.incomplete && !value.incomplete;
            tmp4 = tmp5;
          }
          if (tmp4) {
            let result = get.set(tmp2, value);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[1] = obj;
  return callback(ChannelHistory, null, items);
})();
let closure_11 = tmp4;
let tmp5 = (() => {
  class Messages {
    constructor() {
      self = this;
      tmp = outer1_5(this, Messages);
      this.actions = {
        CHANNEL_DELETE(arg0, arg1) {
              return self.handleChannelDelete(arg0, arg1);
            },
        GUILD_DELETE(arg0, arg1) {
              return self.handleGuildDelete(arg0, arg1);
            },
        LOAD_MESSAGES_SUCCESS(arg0, arg1) {
              return self.handleLoadMessagesSuccess(arg0, arg1);
            },
        MESSAGE_CREATE(arg0, arg1) {
              return self.handleMessageCreate(arg0, arg1);
            },
        MESSAGE_DELETE_BULK(arg0, arg1) {
              return self.handleMessageDeleteBulk(arg0, arg1);
            },
        MESSAGE_DELETE(arg0, arg1) {
              return self.handleMessageDelete(arg0, arg1);
            },
        MESSAGE_PREVIEWS_LOADED(arg0, arg1) {
              return self.handleMessagePreviewsLoaded(arg0, arg1);
            },
        MESSAGE_UPDATE(arg0, arg1) {
              return self.handleMessageUpdate(arg0, arg1);
            }
      };
      return;
    }
  }
  let obj = { key: "startupLoad" };
  let closure_2 = Messages(async (arg0, arg1, arg2, arg3) => {
    const obj = callback(table[9]);
    const messagesResult = callback(table[9]).messages(arg0);
    const tmp = yield callback(table[9]).messages(arg0).getLatest(arg1, arg2, arg3);
    return new outer2_11(yield callback(table[9]).messages(arg0).getLatest(arg1, arg2, arg3));
  });
  obj.value = function startupLoad(arg0, guildId, channelId, outer2_14) {
    return dependencyMap(...arguments);
  };
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = { key: "load" };
  let closure_1 = Messages(async (arg0, arg1, arg2) => {
    const basicChannel = outer2_8.getBasicChannel(arg1);
    if (null != arg1) {
      if (null != basicChannel) {
        if (obj.isReadableChannel(basicChannel)) {
          const obj2 = callback2(1882);
          const tmp9 = yield callback2(1882).messages(arg0).getLatest(basicChannel.guild_id, arg1, arg2);
          const prototype = outer2_11.prototype;
          const tmp14 = new outer2_11(tmp9);
          return tmp14;
        }
        obj = callback(6716);
      }
    }
    return new outer2_11([]);
  });
  obj.value = function load() {
    return callback2(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "handleMessageCreate",
    value(optimistic) {
      const self = this;
      let tmp = optimistic.optimistic || optimistic.isPushNotification;
      if (!tmp) {
        tmp = null != optimistic.sendMessageOptions;
      }
      if (!tmp) {
        if (obj.isReadableChannelId(optimistic.channelId)) {
          self.upsertOne(optimistic.guildId, optimistic.channelId, optimistic.message, arg1);
        }
        obj = callback(6716);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleMessageUpdate",
    value(message) {
      const self = this;
      let isReadableChannelIdResult = null != message.message.id && null != message.message.channel_id;
      if (isReadableChannelIdResult) {
        isReadableChannelIdResult = callback(6716).isReadableChannelId(message.message.channel_id);
        const obj = callback(6716);
      }
      if (isReadableChannelIdResult) {
        if (outer1_14(message.message)) {
          self.upsertOne(message.guildId, message.message.channel_id, message.message, arg1);
        } else {
          self.updateOne(message.guildId, message.message.channel_id, message.message, arg1);
        }
      }
    }
  };
  items[4] = {
    key: "handleMessagePreviewsLoaded",
    value(messages) {
      let iter2;
      const self = this;
      const tmp = outer1_12(messages.messages);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp2 = callback;
          let tmp3 = dependencyMap;
          let obj = callback(6716);
          if (obj.isReadableChannelId(value.channel_id)) {
            let tmp4 = self;
            let tmp5 = value;
            let tmp6 = arg1;
            let insertStaleResult = self.insertStale(messages.guildId, value.channel_id, value, arg1);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[5] = {
    key: "handleLoadMessagesSuccess",
    value(channelId) {
      const self = this;
      const basicChannel = outer1_8.getBasicChannel(channelId.channelId);
      if (null != basicChannel) {
        if (obj.isReadableChannelId(channelId.channelId)) {
          if (!channelId.isAfter) {
            if (!channelId.isBefore) {
              if (!channelId.hasMoreAfter) {
                if (channelId.limit > 5) {
                  self.replaceChannel(basicChannel.guild_id, channelId.channelId, channelId.messages, arg1);
                }
              }
            }
          }
          self.upsertMany(basicChannel.guild_id, channelId.channelId, channelId.messages, arg1);
        }
        obj = callback(6716);
      }
    }
  };
  items[6] = {
    key: "handleMessageDelete",
    value(id) {
      const self = this;
      if (null != id.id) {
        self.deleteOne(id.guildId, id.channelId, id.id, arg1);
      }
    }
  };
  items[7] = {
    key: "handleMessageDeleteBulk",
    value(ids) {
      let done;
      const self = this;
      const tmp = outer1_12(ids.ids);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = self;
          let tmp3 = arg1;
          let deleteOneResult = self.deleteOne(ids.guildId, ids.channelId, iter.value, arg1);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[8] = {
    key: "handleChannelDelete",
    value(channel) {
      this.deleteChannel(channel.channel.guild_id, channel.channel.id, arg1);
    }
  };
  items[9] = {
    key: "handleGuildDelete",
    value(guild) {
      const self = this;
      if (!guild.guild.unavailable) {
        self.deleteGuild(guild.guild.id, arg1);
      }
    }
  };
  items[10] = {
    key: "resetInMemoryState",
    value() {

    }
  };
  items[11] = {
    key: "insertStale",
    value(arg0, arg1, arg2, arg3) {
      const obj = callback2(1882);
      const result = outer1_7.lastTimeConnectedChanged();
      const KvMessage = callback(6719).KvMessage;
      const messagesTransactionResult = callback2(1882).messagesTransaction(arg3);
      messagesTransactionResult.put(arg0, arg1, KvMessage.fromMessage(arg0, arg1, arg2, result), callback(1883).ConflictOptions.Skip);
    }
  };
  items[12] = {
    key: "upsertOne",
    value(items, limit) {
      const messagesTransactionResult = callback2(1882).messagesTransaction(arg3);
      const result = outer1_7.lastTimeConnectedChanged();
      const KvMessage = callback(6719).KvMessage;
      const obj = callback2(1882);
      messagesTransactionResult.put(items, limit, KvMessage.fromMessage(items, limit, arg2, result), callback(1883).ConflictOptions.Replace);
      messagesTransactionResult.trimChannel(items, limit, outer1_9.saveLimit(limit));
    }
  };
  items[13] = {
    key: "upsertMany",
    value(items, limit) {
      let done;
      const messagesTransactionResult = callback2(1882).messagesTransaction(arg3);
      const result = outer1_7.lastTimeConnectedChanged();
      const tmp2 = outer1_12(arg2);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let tmp3 = callback;
          let tmp4 = dependencyMap;
          let KvMessage = callback(6719).KvMessage;
          let tmp5 = KvMessage;
          let tmp6 = items;
          let tmp7 = limit;
          let tmp8 = result;
          let putResult = messagesTransactionResult.put(items, limit, KvMessage.fromMessage(items, limit, iter.value, result));
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      messagesTransactionResult.trimChannel(items, limit, outer1_9.saveLimit(limit));
    }
  };
  items[14] = {
    key: "replaceChannel",
    value(items, limit, arr) {
      let closure_0 = items;
      const callback2 = limit;
      const messagesTransactionResult = callback2(1882).messagesTransaction(arg3);
      const dependencyMap = outer1_7.lastTimeConnectedChanged();
      const saveLimitResult = outer1_9.saveLimit(limit);
      let substr = arr;
      if (arr.length > saveLimitResult) {
        substr = arr.slice(arr.length - saveLimitResult);
      }
      messagesTransactionResult.replaceChannel(items, limit, substr.map((arg0) => {
        const KvMessage = items(table[11]).KvMessage;
        return KvMessage.fromMessage(items, closure_1, arg0, table);
      }));
      messagesTransactionResult.trimChannel(items, limit, outer1_9.saveLimit(limit));
    }
  };
  const obj13 = { key: "updateOne" };
  let closure_0 = Messages(async (arg0, arg1, arg2, arg3) => {
    if (null != arg2.id) {
      let obj = callback2(1882);
      const messagesResult = obj.messages(arg3.database);
      const tmp6 = yield messagesResult.get(arg0, arg1, arg2.id);
      const result = outer2_7.lastTimeConnectedChanged();
      if (null != tmp6) {
        const KvMessage = callback(6719).KvMessage;
        obj = {};
        const merged = Object.assign(tmp6.message);
        const merged1 = Object.assign(arg2);
        messagesResult.put(arg0, arg1, KvMessage.fromMessage(arg0, arg1, obj, result));
      }
    } else {
      outer2_10.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
    }
  });
  obj13.value = function updateOne(guildId, channel_id, message, arg3) {
    return callback(...arguments);
  };
  items[15] = obj13;
  items[16] = {
    key: "deleteOne",
    value(arg0, arg1, arg2, arg3) {
      const obj = callback2(1882);
      callback2(1882).messagesTransaction(arg3).deleteMessage(arg0, arg1, arg2);
    }
  };
  items[17] = {
    key: "deleteChannel",
    value(arg0, arg1, arg2) {
      const obj = callback2(1882);
      callback2(1882).messagesTransaction(arg2).deleteChannel(arg0, arg1);
    }
  };
  items[18] = {
    key: "deleteGuild",
    value(arg0, arg1) {
      const obj = callback2(1882);
      callback2(1882).messagesTransaction(arg1).deleteGuild(arg0);
    }
  };
  return callback(Messages, items);
})();
tmp5 = new tmp5();
let result = require("_classCallCheck").fileFinishedImporting("modules/app_database/modules/Messages.tsx");

export default tmp5;
export const ChannelHistory = tmp4;
export { isLikelyNotDelta };
