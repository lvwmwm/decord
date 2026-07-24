// Module ID: 12692
// Function ID: 98575
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 15, 17, 18, 1348, 4349, 3, 686, 12693, 4807, 566, 2]

// Module 12692 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import importDefaultResult from "_possibleConstructorReturn";

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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
importDefaultResult = new importDefaultResult("MessagePreviewStore");
let tmp4 = ((Store) => {
  class MessagePreviewStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, apply);
      items = [, ];
      items[0] = outer1_1(outer1_2[9]);
      items[1] = {
        CONNECTION_OPEN(arg0) {
              return tmp2Result.handleConnectionOpen(arg0);
            },
        GUILD_CREATE(arg0) {
              return tmp2Result.handleGuildCreate(arg0);
            },
        GUILD_DELETE(arg0) {
              return tmp2Result.handleGuildDelete(arg0);
            },
        LOAD_MESSAGES_SUCCESS(arg0) {
              return tmp2Result.handleLoadMessagesSuccess(arg0);
            },
        LOCAL_MESSAGES_LOADED(arg0) {
              return tmp2Result.handleLocalMessagesLoaded(arg0);
            },
        LOGOUT(arg0) {
              return tmp2Result.handleLogout(arg0);
            },
        MESSAGE_CREATE(arg0) {
              return tmp2Result.handleMessageCreate(arg0);
            },
        MESSAGE_DELETE(arg0) {
              return tmp2Result.handleMessageDelete(arg0);
            },
        MESSAGE_PREVIEWS_LOADED(arg0) {
              return tmp2Result.handleMessagePreviewsLoaded(arg0);
            },
        MESSAGE_PREVIEWS_LOCALLY_LOADED(arg0) {
              return tmp2Result.handleMessagePreviewsLocallyLoaded(arg0);
            },
        MESSAGE_UPDATE(arg0) {
              return tmp2Result.handleMessageUpdate(arg0);
            },
        THREAD_LIST_SYNC(arg0) {
              return tmp2Result.handleThreadListSync(arg0);
            }
      };
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      map = new Map();
      tmp2Result.guilds = map;
      tmp2Result.generation = 0;
      return tmp2Result;
    }
  }
  callback2(MessagePreviewStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isLatest",
    value(arg0, arg1) {
      const guilds = this.guilds;
      let tmp = null;
      if (null != arg0) {
        tmp = arg0;
      }
      const value = guilds.get(tmp);
      let isLatestResult;
      if (null != value) {
        isLatestResult = value.isLatest(arg1, this.generation);
      }
      return null != isLatestResult && isLatestResult;
    }
  };
  items[1] = obj;
  obj = {
    key: "isLocalFetchNeeded",
    value(arg0) {
      const guilds = this.guilds;
      const value = guilds.get(arg0);
      let localNeeded;
      if (null != value) {
        localNeeded = value.localNeeded;
      }
      return null == localNeeded || localNeeded;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "message",
    value(arg0, arg1) {
      const guilds = this.guilds;
      const value = guilds.get(arg0);
      let messageRecordResult;
      if (null != value) {
        messageRecordResult = value.messageRecord(arg1);
      }
      let tmp3 = null;
      if (null != messageRecordResult) {
        tmp3 = messageRecordResult;
      }
      return tmp3;
    }
  };
  items[4] = {
    key: "data",
    value(arg0) {
      const self = this;
      const guilds = this.guilds;
      if (!guilds.has(arg0)) {
        const guilds2 = self.guilds;
        const PreviewData = MessagePreviewStore(outer1_2[10]).PreviewData;
        const prototype = PreviewData.prototype;
        const previewData = new PreviewData();
        const result = guilds2.set(arg0, previewData);
      }
      const guilds3 = self.guilds;
      return guilds3.get(arg0);
    }
  };
  items[5] = {
    key: "handleOneGuildCreate",
    value(id) {
      const self = this;
      const dataResult = this.data(id.id);
      let lastMessages = id.lastMessages;
      if (null == lastMessages) {
        lastMessages = [];
      }
      dataResult.putMany(lastMessages, self.generation);
      let threadMessages = id.threadMessages;
      if (null == threadMessages) {
        threadMessages = [];
      }
      dataResult.putMany(threadMessages, self.generation);
      if (null != id.lastMessages) {
        dataResult.localNeeded = false;
      }
    }
  };
  items[6] = {
    key: "handleConnectionOpen",
    value(guilds) {
      let done;
      const self = this;
      this.generation = this.generation + 1;
      const tmp = outer1_12(guilds.guilds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let handleOneGuildCreateResult = self.handleOneGuildCreate(iter.value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[7] = {
    key: "handleGuildCreate",
    value(guild) {
      this.handleOneGuildCreate(guild.guild);
    }
  };
  items[8] = {
    key: "handleGuildDelete",
    value(guild) {
      const guilds = this.guilds;
      guilds.delete(guild.guild.id);
    }
  };
  items[9] = {
    key: "handleMessageCreate",
    value(optimistic) {
      const self = this;
      if (!optimistic.optimistic) {
        if (!optimistic.isPushNotification) {
          const guildId = optimistic.guildId;
          let tmp = null;
          if (null != guildId) {
            tmp = guildId;
          }
          self.data(tmp).put(optimistic.message.channel_id, optimistic.message, self.generation);
        }
      }
      return false;
    }
  };
  items[10] = {
    key: "handleMessageDelete",
    value(guildId) {
      const self = this;
      guildId = guildId.guildId;
      let tmp = null;
      if (null != guildId) {
        tmp = guildId;
      }
      const dataResult = self.data(tmp);
      let messageIdResult;
      if (null != dataResult) {
        messageIdResult = dataResult.messageId(guildId.channelId);
      }
      if (messageIdResult === guildId.id) {
        const messages = outer1_10.getMessages(guildId.channelId);
        let lastResult = null;
        if (!messages.hasMoreAfter) {
          lastResult = messages.last();
        }
        if (null != lastResult) {
          self.data(tmp).put(guildId.channelId, lastResult, self.generation);
          const dataResult1 = self.data(tmp);
        } else {
          self.data(tmp).delete(guildId.channelId);
          const dataResult2 = self.data(tmp);
        }
      }
    }
  };
  items[11] = {
    key: "handleMessageUpdate",
    value(guildId) {
      const self = this;
      guildId = guildId.guildId;
      let tmp = null;
      if (null != guildId) {
        tmp = guildId;
      }
      const channel_id = guildId.message.channel_id;
      const id = guildId.message.id;
      if (null != channel_id) {
        if (null != id) {
          const dataResult = self.data(tmp);
          let messageIdResult;
          if (null != dataResult) {
            messageIdResult = dataResult.messageId(channel_id);
          }
          if (messageIdResult !== id) {
            return false;
          } else if (null != dataResult) {
            dataResult.update(guildId.message);
          }
        }
      }
      return false;
    }
  };
  items[12] = {
    key: "handleThreadListSync",
    value(guildId) {
      let mostRecentMessages = guildId.mostRecentMessages;
      if (null == mostRecentMessages) {
        mostRecentMessages = [];
      }
      this.data(guildId.guildId).putMany(mostRecentMessages, this.generation);
    }
  };
  items[13] = {
    key: "handleLoadMessagesSuccess",
    value(channelId) {
      const self = this;
      const basicChannel = outer1_9.getBasicChannel(channelId.channelId);
      if (null == basicChannel) {
        return false;
      } else {
        const result = MessagePreviewStore(outer1_2[11]).requireSortedDescending(channelId.messages);
        if (!channelId.isAfter) {
          if (!channelId.isBefore) {
            if (!channelId.hasMoreAfter) {
              const first = channelId.messages[0];
              let tmp3 = null;
              if (null != first) {
                tmp3 = first;
              }
              self.data(basicChannel.guild_id).put(channelId.channelId, tmp3, self.generation);
              const dataResult = self.data(basicChannel.guild_id);
            }
          }
        }
        const obj3 = MessagePreviewStore(outer1_2[11]);
        const first1 = channelId.messages[0];
        let tmp6 = null;
        if (null != first1) {
          tmp6 = first1;
        }
        self.data(basicChannel.guild_id).putNew(channelId.channelId, tmp6, self.generation);
        const dataResult1 = self.data(basicChannel.guild_id);
      }
    }
  };
  items[14] = {
    key: "handleLocalMessagesLoaded",
    value(channelId) {
      const self = this;
      const basicChannel = outer1_9.getBasicChannel(channelId.channelId);
      if (null != basicChannel) {
        const result = MessagePreviewStore(outer1_2[11]).requireSortedDescending(channelId.messages);
        const obj = MessagePreviewStore(outer1_2[11]);
        const first = channelId.messages[0];
        let tmp6 = null;
        if (null != first) {
          tmp6 = first;
        }
        self.data(basicChannel.guild_id).putNew(channelId.channelId, tmp6, -Infinity);
        const dataResult = self.data(basicChannel.guild_id);
      }
    }
  };
  items[15] = {
    key: "handleMessagePreviewsLoaded",
    value(guildId) {
      let iter2;
      const self = this;
      outer1_11.verbose("adding remote previews (guildId: " + guildId.guildId + ", messages: " + guildId.messages.length + ")");
      const dataResult = this.data(guildId.guildId);
      const tmp2 = outer1_12(guildId.messages);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          if (!dataResult.isLatest(value.channel_id, self.generation)) {
            let putResult = dataResult.put(value.channel_id, value, self.generation);
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[16] = {
    key: "handleMessagePreviewsLocallyLoaded",
    value(guildId) {
      let iter2;
      let tmp5;
      let tmp6;
      outer1_11.verbose("adding local previews (guildId: " + guildId.guildId + ", messages: " + guildId.messages.length + ")");
      const dataResult = this.data(guildId.guildId);
      const tmp2 = outer1_12(guildId.messages);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let tmp3 = outer1_3;
          let tmp4 = outer1_3(iter.value, 2);
          [tmp5, tmp6] = tmp4;
          if (!dataResult.has(tmp5)) {
            let putResult = dataResult.put(tmp5, tmp6, -Infinity);
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
      dataResult.localNeeded = false;
    }
  };
  items[17] = {
    key: "handleLogout",
    value() {
      const guilds = this.guilds;
      guilds.clear();
    }
  };
  return callback(MessagePreviewStore, items);
})(require("initialize").Store);
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("modules/message_previews/MessagePreviewStore.tsx");

export default tmp4;
