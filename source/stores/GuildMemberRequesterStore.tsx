// Module ID: 4956
// Function ID: 42557
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4956 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function handleConnectionReset() {
  importDefaultResult1.reset();
}
function _requestMember(arg0, arg1) {
  importDefaultResult1.request(arg0, arg1);
  return false;
}
function requestFromMessages(guild_id, messages) {
  const importDefault = guild_id;
  const item = messages.forEach((arg0) => {
    let author;
    let mentions;
    ({ author, mentions } = arg0);
    if (null != author) {
      callback(arg0, author.id);
    }
    if (null != mentions) {
      const item = mentions.forEach((id) => {
        callback(closure_0, id.id);
        return false;
      });
    }
  });
  return false;
}
function handleLoadMessages(channelId) {
  const channel = store.getChannel(channelId.channelId);
  let flag = null != channel && null != channel.guild_id;
  if (flag) {
    requestFromMessages(channel.guild_id, channelId.messages);
    flag = false;
  }
  return flag;
}
function handleLoadSearchResults(arg0) {
  let data;
  let guildId;
  ({ guildId, data } = arg0);
  let importDefault;
  if (null == guildId) {
    return false;
  } else {
    const items = [];
    importDefault = items;
    const item = data.forEach((messages) => {
      messages = messages.messages;
      const item = messages.forEach((arr) => {
        const item = arr.forEach((arg0) => {

        });
      });
    });
    requestFromMessages(guildId, items);
    return false;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const importDefaultResult = importDefault(dependencyMap[6]);
let importDefaultResult1 = importDefault(dependencyMap[7]);
importDefaultResult1 = new importDefaultResult1(importDefaultResult.isMember, (arg0, userIds) => {
  let obj = importDefault(dependencyMap[8]);
  obj = { type: "GUILD_MEMBERS_REQUEST", guildIds: items, userIds };
  const items = [arg0];
  obj.dispatch(obj);
});
let tmp5 = (Store) => {
  class GuildMemberRequesterStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildMemberRequesterStore);
      obj = closure_5(GuildMemberRequesterStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = GuildMemberRequesterStore;
  callback2(GuildMemberRequesterStore, Store);
  let obj = {
    key: "initialize",
    value: function initialize() {
      this.waitFor(closure_7, closure_8);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "requestMember",
    value: function requestMember(closure_0, id) {
      callback4(closure_0, id);
    }
  };
  items[1] = obj;
  obj = {
    key: "getDebugState",
    value: function getDebugState(arg0) {
      return debugState.getDebugState(arg0);
    }
  };
  items[2] = obj;
  return callback(GuildMemberRequesterStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp5.displayName = "GuildMemberRequesterStore";
tmp5 = new tmp5(importDefault(dependencyMap[8]), {
  CONNECTION_CLOSED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  CONNECTION_RESUMED: function handleConnectionResumed() {
    const unacknowledged = importDefaultResult1.requestUnacknowledged();
    return false;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let done;
    function _loop(value) {
      const members = value.members;
      const item = members.forEach((user) => {
        closure_9.acknowledge(user.guildId, user.user.id);
      });
      if (null != value.notFound) {
        const notFound = value.notFound;
        const item1 = notFound.forEach((arg0) => closure_9.acknowledge(arg0.guildId, arg0));
      }
    }
    const tmp = _createForOfIteratorHelperLoose(chunks.chunks);
    let iter = tmp();
    if (!iter.done) {
      do {
        let _loopResult = _loop(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return false;
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const channel = store.getChannel(pins.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      requestFromMessages(channel.guild_id, pins.map((message) => message.message));
      flag = false;
    }
    return flag;
  },
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(messages) {
    messages = messages.messages;
    const channel = store.getChannel(messages.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      requestFromMessages(channel.guild_id, messages.concat(messages.messageReferences));
      flag = false;
    }
    return flag;
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleConversationsFetchSuccess(rawConversations) {
    rawConversations = rawConversations.rawConversations;
    const channel = store.getChannel(rawConversations.channelId);
    if (null != channel) {
      if (null != channel.guild_id) {
        const mapped = rawConversations.map((messages) => {
          messages = messages.messages;
          if (null == messages) {
            messages = [];
          }
          return messages;
        });
        requestFromMessages(channel.guild_id, mapped.flat());
        return false;
      }
    }
    return false;
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("stores/GuildMemberRequesterStore.tsx");

export default tmp5;
