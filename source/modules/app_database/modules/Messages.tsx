// Module ID: 6704
// Function ID: 52009
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6704 (_createForOfIteratorHelperLoose)
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
function isLikelyNotDelta(author) {
  return null != author.author && null != author.content && null != author.mentions && null != author.timestamp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("Messages");
const tmp4 = () => {
  class ChannelHistory {
    constructor(arg0) {
      self = this;
      tmp = closure_5(this, ChannelHistory);
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
        ChannelHistory = connectionId;
        tmp3 = ChannelHistory;
        tmp4 = closure_4;
        num = 2;
        tmp5 = closure_4(ChannelHistory.computeUsersAndMembers(arg0), 2);
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
  const arg1 = ChannelHistory;
  let obj = {
    key: "computeUsersAndMembers",
    value(messages) {
      let done;
      const self = this;
      const result = ChannelHistory(closure_2[8]).requireSortedDescending(messages);
      const map = new Map();
      const map1 = new Map();
      const tmp2 = callback3(messages);
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
  const items = [obj, ];
  obj = {
    key: "addIntoMap",
    value(get) {
      let iter2;
      const tmp = callback3(arg1);
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
  return callback2(ChannelHistory, null, items);
}();
let tmp5 = () => {
  class Messages {
    constructor() {
      f52052 = this;
      tmp = closure_5(this, Messages);
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
  const callback = Messages;
  let obj = { key: "startupLoad" };
  let closure_2 = callback(async (arg0, arg1, arg2, arg3) => {
    const obj = callback(closure_2[9]);
    const messagesResult = callback(closure_2[9]).messages(arg0);
    const tmp = yield callback(closure_2[9]).messages(arg0).getLatest(arg1, arg2, arg3);
    return new closure_11(yield callback(closure_2[9]).messages(arg0).getLatest(arg1, arg2, arg3));
  });
  obj.value = function startupLoad(arg0, guildId, channelId, arg3) {
    return callback3(...arguments);
  };
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = { key: "load" };
  let closure_1 = callback(async (arg0, arg1, arg2) => {
    const basicChannel = basicChannel.getBasicChannel(arg1);
    if (null != arg1) {
      if (null != basicChannel) {
        if (obj.isReadableChannel(basicChannel)) {
          const obj2 = callback2(closure_2[9]);
          const tmp9 = yield callback2(closure_2[9]).messages(arg0).getLatest(basicChannel.guild_id, arg1, arg2);
          const prototype = ctor.prototype;
          const tmp14 = new ctor(tmp9);
          return tmp14;
        }
        const obj = callback(closure_2[10]);
      }
    }
    return new ctor([]);
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
        const obj = callback(closure_2[10]);
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
        isReadableChannelIdResult = callback(closure_2[10]).isReadableChannelId(message.message.channel_id);
        const obj = callback(closure_2[10]);
      }
      if (isReadableChannelIdResult) {
        if (callback6(message.message)) {
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
      const tmp = callback5(messages.messages);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp2 = closure_0;
          let tmp3 = closure_2;
          let obj = closure_0(closure_2[10]);
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
      const basicChannel = basicChannel.getBasicChannel(channelId.channelId);
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
        const obj = callback(closure_2[10]);
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
      const tmp = callback5(ids.ids);
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
      const obj = callback2(closure_2[9]);
      const result = closure_7.lastTimeConnectedChanged();
      const KvMessage = callback(closure_2[11]).KvMessage;
      const messagesTransactionResult = callback2(closure_2[9]).messagesTransaction(arg3);
      messagesTransactionResult.put(arg0, arg1, KvMessage.fromMessage(arg0, arg1, arg2, result), callback(closure_2[12]).ConflictOptions.Skip);
    }
  };
  items[12] = {
    key: "upsertOne",
    value(items, limit) {
      const messagesTransactionResult = callback2(closure_2[9]).messagesTransaction(arg3);
      const result = closure_7.lastTimeConnectedChanged();
      const KvMessage = callback(closure_2[11]).KvMessage;
      const obj = callback2(closure_2[9]);
      messagesTransactionResult.put(items, limit, KvMessage.fromMessage(items, limit, arg2, result), callback(closure_2[12]).ConflictOptions.Replace);
      messagesTransactionResult.trimChannel(items, limit, closure_9.saveLimit(limit));
    }
  };
  items[13] = {
    key: "upsertMany",
    value(items, limit) {
      let done;
      const messagesTransactionResult = callback2(closure_2[9]).messagesTransaction(arg3);
      const result = closure_7.lastTimeConnectedChanged();
      const tmp2 = callback5(arg2);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let tmp3 = closure_0;
          let tmp4 = closure_2;
          let KvMessage = closure_0(closure_2[11]).KvMessage;
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
      messagesTransactionResult.trimChannel(items, limit, closure_9.saveLimit(limit));
    }
  };
  items[14] = {
    key: "replaceChannel",
    value(items, limit, arr) {
      let closure_0 = items;
      const callback2 = limit;
      const messagesTransactionResult = callback2(closure_2[9]).messagesTransaction(arg3);
      closure_2 = closure_7.lastTimeConnectedChanged();
      const saveLimitResult = closure_9.saveLimit(limit);
      let substr = arr;
      if (arr.length > saveLimitResult) {
        substr = arr.slice(arr.length - saveLimitResult);
      }
      messagesTransactionResult.replaceChannel(items, limit, substr.map((arg0) => {
        const KvMessage = arg0(closure_2[11]).KvMessage;
        return KvMessage.fromMessage(arg0, arg1, arg0, closure_2);
      }));
      messagesTransactionResult.trimChannel(items, limit, closure_9.saveLimit(limit));
    }
  };
  const obj13 = { key: "updateOne" };
  let closure_0 = callback(async (arg0, arg1, arg2, arg3) => {
    if (null != arg2.id) {
      let obj = callback2(closure_2[9]);
      const messagesResult = obj.messages(arg3.database);
      const tmp6 = yield messagesResult.get(arg0, arg1, arg2.id);
      const result = closure_7.lastTimeConnectedChanged();
      if (null != tmp6) {
        const KvMessage = callback(closure_2[11]).KvMessage;
        obj = {};
        const merged = Object.assign(tmp6.message);
        const merged1 = Object.assign(arg2);
        messagesResult.put(arg0, arg1, KvMessage.fromMessage(arg0, arg1, obj, result));
      }
    } else {
      closure_10.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
    }
  });
  obj13.value = function updateOne(guildId, channel_id, message, arg3) {
    return callback(...arguments);
  };
  items[15] = obj13;
  items[16] = {
    key: "deleteOne",
    value(arg0, arg1, arg2, arg3) {
      const obj = callback2(closure_2[9]);
      callback2(closure_2[9]).messagesTransaction(arg3).deleteMessage(arg0, arg1, arg2);
    }
  };
  items[17] = {
    key: "deleteChannel",
    value(arg0, arg1, arg2) {
      const obj = callback2(closure_2[9]);
      callback2(closure_2[9]).messagesTransaction(arg2).deleteChannel(arg0, arg1);
    }
  };
  items[18] = {
    key: "deleteGuild",
    value(arg0, arg1) {
      const obj = callback2(closure_2[9]);
      callback2(closure_2[9]).messagesTransaction(arg1).deleteGuild(arg0);
    }
  };
  return callback2(Messages, items);
}();
tmp5 = new tmp5();
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_database/modules/Messages.tsx");

export default tmp5;
export const ChannelHistory = tmp4;
export { isLikelyNotDelta };
