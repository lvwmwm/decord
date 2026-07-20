// Module ID: 14077
// Function ID: 106878
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 14077 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const isThread = arg1(dependencyMap[8]).isThread;
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const Endpoints = arg1(dependencyMap[12]).Endpoints;
let importDefaultResult = importDefault(dependencyMap[13]);
importDefaultResult = new importDefaultResult("MessagePreviewManager");
let tmp4 = (arg0) => {
  class MessagePreviewManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp2 = closure_5(this, MessagePreviewManager);
      items1 = [...items];
      obj = closure_8(MessagePreviewManager);
      tmp3 = closure_7;
      if (closure_19()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      map = new Map();
      tmp3Result.remote = map;
      tmp3Result.remoteTicking = false;
      tmp3Result.tickQueued = false;
      set = new Set();
      tmp3Result.localFetching = set;
      tmp3Result.actions = {
        CONNECTION_OPEN_SUPPLEMENTAL() {
              return tmp3Result.handleConnectionOpenSupplemental();
            },
        CONNECTION_RESUMED() {
              return tmp3Result.handleConnectionResumed();
            },
        GUILD_CREATE(arg0) {
              return tmp3Result.handleGuildCreate(arg0);
            },
        GUILD_DELETE(arg0) {
              return tmp3Result.handleGuildDelete(arg0);
            },
        LOAD_MESSAGES_SUCCESS(arg0) {
              return tmp3Result.handleMessagesLoaded(arg0);
            },
        LOCAL_MESSAGES_LOADED(arg0) {
              return tmp3Result.handleMessagesLoaded(arg0);
            },
        LOGOUT() {
              return tmp3Result.handleLogout();
            },
        MESSAGE_CREATE(arg0) {
              return tmp3Result.handleMessageCreate(arg0);
            },
        MESSAGE_DELETE(arg0) {
              return tmp3Result.handleMessageDelete(arg0);
            },
        MESSAGE_UPDATE(arg0) {
              return tmp3Result.handleMessageUpdate(arg0);
            },
        THREAD_LIST_SYNC(arg0) {
              return tmp3Result.handleThreadListSync(arg0);
            }
      };
      obj2 = MessagePreviewManager(closure_2[14]);
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.remoteTick = obj2.debounce(closure_4(tmp), 100);
      return tmp3Result;
    }
  }
  const importDefault = MessagePreviewManager;
  callback3(MessagePreviewManager, arg0);
  let obj = {
    key: "addWant",
    value(arg0) {
      const self = this;
      const basicChannel = store.getBasicChannel(arg0);
      if (null != basicChannel) {
        const guild_id = basicChannel.guild_id;
        let tmp2 = null;
        if (null != guild_id) {
          tmp2 = guild_id;
        }
        let isLatestResult = callback5(basicChannel.type);
        if (!isLatestResult) {
          isLatestResult = closure_14.isLatest(tmp2, arg0);
        }
        if (!isLatestResult) {
          const orCreate = self.getOrCreate(tmp2);
          orCreate.addWant(arg0);
          const local = self.fetchLocal(tmp2);
          self.remoteTick();
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = { key: "fetchLocal" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj.value = function fetchLocal(arg0) {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "fetchGuilds",
    value(arg0, nextWants) {
      let closure_0 = arg0;
      const nextWantsResult = nextWants.nextWants(1000);
      const MessagePreviewManager = nextWantsResult;
      if (0 === nextWantsResult.length) {
        let resolved = Promise.resolve();
      } else {
        resolved = nextWants.try(nextWantsResult, () => {
          closure_16.verbose("fetching guild previews (via: gateway, guild_id: " + arg0 + ", channel_ids: " + nextWantsResult.join(", ") + ")");
          const socket = socket.getSocket();
          const lastMessages = socket.requestLastMessages(arg0, nextWantsResult);
          return Promise.resolve();
        });
      }
      return resolved;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "fetchDms",
    value(nextWants) {
      const nextWantsResult = nextWants.nextWants(30);
      let closure_0 = nextWantsResult;
      if (0 === nextWantsResult.length) {
        let resolved = Promise.resolve();
      } else {
        // CreateGeneratorClosureLongIndex (0x67)
        resolved = nextWants.try(nextWantsResult, callback2(tmp));
      }
      return resolved;
    }
  };
  items[4] = {
    key: "syncChannel",
    value(arg0, arg1) {
      const remote = this.remote;
      const value = remote.get(arg0);
      let isLatestResult = null != value;
      if (isLatestResult) {
        isLatestResult = closure_14.isLatest(arg0, arg1);
      }
      if (isLatestResult) {
        value.removeWant(arg1);
      }
    }
  };
  items[5] = {
    key: "getOrCreate",
    value(arg0) {
      const self = this;
      const remote = this.remote;
      if (!remote.has(arg0)) {
        const remote2 = self.remote;
        const RemoteFetchData = callback(closure_2[18]).RemoteFetchData;
        const prototype = RemoteFetchData.prototype;
        const remoteFetchData = new RemoteFetchData();
        const result = remote2.set(arg0, remoteFetchData);
      }
      const remote3 = self.remote;
      return remote3.get(arg0);
    }
  };
  items[6] = {
    key: "cleanup",
    value() {
      let iter2;
      let obj;
      let tmp4;
      const tmp = callback6(this.remote);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_3;
          let tmp3 = closure_3(iter.value, 2);
          [tmp4, obj] = tmp3;
          if (obj.empty()) {
            let remote = this.remote;
            let deleteResult = remote.delete(tmp4);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[7] = {
    key: "handleConnectionOpenSupplemental",
    value() {
      const result = this.handleConnectionResumed(false);
    }
  };
  items[8] = {
    key: "handleConnectionResumed",
    value() {
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = true;
      }
      if (self.tickQueued) {
        if (!self.remoteTicking) {
          self.remoteTick();
          const remoteTick = self.remoteTick;
          remoteTick.flush();
        }
      }
      if (flag) {
        const localFetching = self.localFetching;
        localFetching.clear();
        const remote = self.remote;
        remote.clear();
        self.remoteTicking = false;
      }
    }
  };
  items[9] = {
    key: "handleGuildCreate",
    value(guild) {
      const remote = this.remote;
      remote.delete(guild.guild.id);
    }
  };
  items[10] = {
    key: "handleGuildDelete",
    value(guild) {
      const remote = this.remote;
      remote.delete(guild.guild.id);
    }
  };
  items[11] = {
    key: "handleLogout",
    value() {
      const localFetching = this.localFetching;
      localFetching.clear();
      const remote = this.remote;
      remote.clear();
      this.remoteTicking = false;
    }
  };
  items[12] = {
    key: "handleMessageCreate",
    value(guildId) {
      guildId = guildId.guildId;
      let tmp = null;
      if (null != guildId) {
        tmp = guildId;
      }
      this.syncChannel(tmp, guildId.channelId);
    }
  };
  items[13] = {
    key: "handleMessageDelete",
    value(guildId) {
      guildId = guildId.guildId;
      let tmp = null;
      if (null != guildId) {
        tmp = guildId;
      }
      this.syncChannel(tmp, guildId.channelId);
    }
  };
  items[14] = {
    key: "handleMessageUpdate",
    value(message) {
      const self = this;
      if (null != message.message.channel_id) {
        const guildId = message.guildId;
        let tmp = null;
        if (null != guildId) {
          tmp = guildId;
        }
        self.syncChannel(tmp, message.message.channel_id);
      }
    }
  };
  items[15] = {
    key: "handleMessagesLoaded",
    value(channelId) {
      let done;
      const self = this;
      const basicChannel = store.getBasicChannel(channelId.channelId);
      let guild_id;
      if (null != basicChannel) {
        guild_id = basicChannel.guild_id;
      }
      let tmp3 = null;
      if (null != guild_id) {
        tmp3 = guild_id;
      }
      if (null != basicChannel) {
        let messages = channelId.messages;
        if (null == messages) {
          messages = [];
        }
        const tmp4Result = closure_17(messages);
        let iter = tmp4Result();
        if (!iter.done) {
          do {
            let syncChannelResult = self.syncChannel(tmp3, iter.value.channel_id);
            let iter2 = tmp4Result();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        const tmp4 = closure_17;
      }
    }
  };
  items[16] = {
    key: "handleThreadListSync",
    value(guildId) {
      let done;
      const remote = this.remote;
      const value = remote.get(guildId.guildId);
      if (null != value) {
        let mostRecentMessages = guildId.mostRecentMessages;
        if (null == mostRecentMessages) {
          mostRecentMessages = [];
        }
        const tmpResult = closure_17(mostRecentMessages);
        let iter = tmpResult();
        if (!iter.done) {
          do {
            let removeWantResult = value.removeWant(iter.value.channel_id);
            let iter2 = tmpResult();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        const tmp = closure_17;
      }
    }
  };
  return callback2(MessagePreviewManager, items);
}(importDefault(dependencyMap[19]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/message_previews/MessagePreviewManager.tsx");

export default tmp4;
export const MessagePreviewManager = tmp4;
