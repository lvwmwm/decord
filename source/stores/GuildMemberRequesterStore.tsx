// Module ID: 4958
// Function ID: 42595
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1917, 4959, 686, 566, 2]

// Module 4958 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildMemberRequestState from "GuildMemberRequestState";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import importDefaultResult1 from "GuildMemberRequestState";

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
function handleConnectionReset() {
  importDefaultResult1.reset();
}
function _requestMember(arg0, arg1) {
  importDefaultResult1.request(arg0, arg1);
  return false;
}
function requestFromMessages(guild_id, messages) {
  let closure_0 = guild_id;
  let item = messages.forEach((arg0) => {
    let author;
    let mentions;
    ({ author, mentions } = arg0);
    if (null != author) {
      outer1_13(closure_0, author.id);
    }
    if (null != mentions) {
      const item = mentions.forEach((id) => {
        outer2_13(outer1_0, id.id);
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
  let items;
  if (null == guildId) {
    return false;
  } else {
    items = [];
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((arg0) => {
          outer2_0.push(arg0);
        });
      });
    });
    requestFromMessages(guildId, items);
    return false;
  }
}
importDefaultResult1 = new importDefaultResult1(importDefaultResult.isMember, (arg0, userIds) => {
  let obj = importDefault(686);
  obj = { type: "GUILD_MEMBERS_REQUEST", guildIds: items, userIds };
  items = [arg0];
  obj.dispatch(obj);
});
let tmp5 = ((Store) => {
  class GuildMemberRequesterStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildMemberRequesterStore);
      obj = outer1_5(GuildMemberRequesterStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildMemberRequesterStore, Store);
  let obj = {
    key: "initialize",
    value: function initialize() {
      this.waitFor(outer1_7, outer1_8);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "requestMember",
    value: function requestMember(guildId, id) {
      outer1_13(guildId, id);
    }
  };
  items[1] = obj;
  obj = {
    key: "getDebugState",
    value: function getDebugState(arg0) {
      return outer1_9.getDebugState(arg0);
    }
  };
  items[2] = obj;
  return callback(GuildMemberRequesterStore, items);
})(require("initialize").Store);
tmp5.displayName = "GuildMemberRequesterStore";
tmp5 = new tmp5(require("dispatcher"), {
  CONNECTION_CLOSED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  CONNECTION_RESUMED: function handleConnectionResumed() {
    const unacknowledged = importDefaultResult1.requestUnacknowledged();
    return false;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let done;
    function _loop(value) {
      let closure_0 = value;
      const members = value.members;
      const item = members.forEach((user) => {
        outer2_9.acknowledge(value.guildId, user.user.id);
      });
      if (null != value.notFound) {
        const notFound = value.notFound;
        const item1 = notFound.forEach((arg0) => outer2_9.acknowledge(value.guildId, arg0));
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GuildMemberRequesterStore.tsx");

export default tmp5;
