// Module ID: 7012
// Function ID: 56232
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1352, 1348, 22, 566, 686, 2]

// Module 7012 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import apply from "apply";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { ALL_CHANNEL_TYPES } from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";

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
function updateFromGuild(threads) {
  threads = threads.threads;
  if (null != threads) {
    const item = threads.forEach(updateFromThread);
  }
}
function updateFromThread(type) {
  let memberCount;
  if (ALL_CHANNEL_TYPES.has(type.type)) {
    if (!(type.id in dependencyMap)) {
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
      dependencyMap[type.id] = obj;
      const tmp2 = dependencyMap;
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
  let c0 = false;
  let item = data.forEach((arg0) => {
    let messages;
    let threads;
    ({ threads, messages } = arg0);
    let item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        outer2_0 = outer3_15(thread.thread) || outer2_0;
      });
    });
    const item1 = threads.forEach((arg0) => {
      outer1_0 = outer2_15(arg0) || outer1_0;
    });
  });
  return c0;
}
function updateFromServerThread(id) {
  if (null != id) {
    if (!(id.id in closure_9)) {
      channel = channel.getChannel(id.id);
      if (null != channel) {
        updateFromThread(channel);
        return true;
      }
    }
  }
  return false;
}
let closure_9 = {};
let tmp2 = ((Store) => {
  class ThreadMembersStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ThreadMembersStore);
      obj = outer1_5(ThreadMembersStore);
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
  callback2(ThreadMembersStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getMemberCount",
    value(arg0) {
      let memberCount;
      if (null != outer1_9[arg0]) {
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
      if (null != outer1_9[arg0]) {
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
      return outer1_9;
    }
  };
  return callback(ThreadMembersStore, items);
})(require("initialize").Store);
tmp2.displayName = "ThreadMembersStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let closure_9 = {};
    guilds = guilds.guilds;
    const item = guilds.forEach(updateFromGuild);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(threadMembers) {
    const obj = {};
    const merged = Object.assign(threadMembers.threadMembers);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateFromGuild(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    (function deleteForGuild(id) {
      let closure_0 = id;
      outer1_9 = outer1_0(outer1_1[7]).omitBy(outer1_9, (guildId) => guildId.guildId === closure_0);
    })(guild.guild.id);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    (function deleteForChannel(id) {
      let closure_0 = id;
      outer1_9 = outer1_0(outer1_1[7]).omitBy(outer1_9, (parentId) => parentId.parentId === closure_0);
    })(channel.channel.id);
  },
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_UPDATE: handleThreadCreateOrUpdate,
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach(updateFromThread);
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(memberIdsPreview) {
    if (null == dependencyMap[memberIdsPreview.id]) {
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
    delete tmp2[tmp];
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
        let tmp2 = updateFromServerThread;
        let tmp3 = updateFromServerThread(iter2.value.thread) || flag;
        iter3 = tmp();
        flag = tmp3;
        iter2 = iter3;
        flag2 = tmp3;
      } while (!iter3.done);
    }
    return flag2;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/threads/ThreadMembersStore.tsx");

export default tmp2;
