// Module ID: 7007
// Function ID: 56187
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 7007 (_isNativeReflectConstruct)
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import { ALL_CHANNEL_TYPES } from "result";
import closure_8 from "result";
import result from "result";

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
function updateFromGuild(threads) {
  threads = threads.threads;
  if (null != threads) {
    const item = threads.forEach(updateFromThread);
  }
}
function updateFromThread(type) {
  let memberCount;
  if (ALL_CHANNEL_TYPES.has(type.type)) {
    if (!(type.id in closure_9)) {
      const obj = {};
      ({ guild_id: obj.guildId, parent_id: obj.parentId, memberCount } = type);
      let num = 0;
      if (null != memberCount) {
        num = memberCount;
      }
      obj.memberCount = num;
      let memberIdsPreview = type.memberIdsPreview;
      if (null == memberIdsPreview) {
        memberIdsPreview = [];
      }
      obj.memberIdsPreview = memberIdsPreview;
      closure_9[type.id] = obj;
      const tmp2 = closure_9;
    }
    if (null != type.memberCount) {
      tmp5.memberCount = type.memberCount;
    }
    if (null != type.memberIdsPreview) {
      tmp5.memberIdsPreview = type.memberIdsPreview;
    }
  } else {
    return false;
  }
}
function handleThreadCreateOrUpdate(channel) {
  return updateFromThread(channel.channel);
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach(updateFromServerThread);
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let closure_0 = false;
  const item = data.forEach((arg0) => {
    let messages;
    let threads;
    ({ threads, messages } = arg0);
    const item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        const tmp = callback(thread.thread) || tmp;
      });
    });
    const item1 = threads.forEach((arg0) => {
      const tmp = callback(arg0) || tmp;
    });
  });
  return closure_0;
}
function updateFromServerThread(id) {
  if (null != id) {
    if (!(id.id in closure_9)) {
      const channel = channel.getChannel(id.id);
      if (null != channel) {
        updateFromThread(channel);
        return true;
      }
    }
  }
  return false;
}
let closure_9 = {};
let tmp2 = (Store) => {
  class ThreadMembersStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ThreadMembersStore);
      obj = closure_5(ThreadMembersStore);
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
  const importDefault = ThreadMembersStore;
  callback2(ThreadMembersStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getMemberCount",
    value(arg0) {
      let memberCount;
      if (null != closure_9[arg0]) {
        memberCount = tmp.memberCount;
      }
      let tmp3 = null;
      if (null != memberCount) {
        tmp3 = memberCount;
      }
      return tmp3;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMemberIdsPreview",
    value(arg0) {
      let memberIdsPreview;
      if (null != closure_9[arg0]) {
        memberIdsPreview = tmp.memberIdsPreview;
      }
      let tmp3 = null;
      if (null != memberIdsPreview) {
        tmp3 = memberIdsPreview;
      }
      return tmp3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getInitialOverlayState",
    value() {
      return closure_9;
    }
  };
  return callback(ThreadMembersStore, items);
}(require("result").Store);
tmp2.displayName = "ThreadMembersStore";
tmp2 = new tmp2(require("result"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let closure_9 = {};
    guilds = guilds.guilds;
    const item = guilds.forEach(updateFromGuild);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(threadMembers) {
    const merged = Object.assign(threadMembers.threadMembers);
    let closure_9 = {};
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateFromGuild(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    function deleteForGuild(id) {
      closure_9 = id(closure_1[7]).omitBy(closure_9, (guildId) => guildId.guildId === guildId);
    }(guild.guild.id);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    function deleteForChannel(id) {
      closure_9 = id(closure_1[7]).omitBy(closure_9, (parentId) => parentId.parentId === parentId);
    }(channel.channel.id);
  },
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_UPDATE: handleThreadCreateOrUpdate,
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach(updateFromThread);
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(memberIdsPreview) {
    if (null == closure_9[memberIdsPreview.id]) {
      return false;
    } else {
      if (null != memberIdsPreview.memberIdsPreview) {
        tmp.memberIdsPreview = memberIdsPreview.memberIdsPreview;
      }
      tmp.memberCount = memberIdsPreview.memberCount;
    }
  },
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  THREAD_DELETE: function handleThreadDelete(arg0) {
    delete r1[r0];
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(messages) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(messages.messages);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp2 = closure_15;
        let tmp3 = closure_15(iter2.value.thread) || flag;
        iter3 = tmp();
        flag = tmp3;
        iter2 = iter3;
        flag2 = tmp3;
      } while (!iter3.done);
    }
    return flag2;
  }
});
result = result.fileFinishedImporting("modules/threads/ThreadMembersStore.tsx");

export default tmp2;
