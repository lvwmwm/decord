// Module ID: 3760
// Function ID: 28774
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1352, 1194, 3761, 22, 566, 686, 2]

// Module 3760 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import MuteTimers from "MuteTimers";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { ALL_CHANNEL_TYPES } from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";
import importDefaultResult from "MuteTimers";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function deleteGuildThreads(arg0) {
  const importDefault = arg0;
  const obj = importDefault(22)(closure_9);
  const rejectResult = importDefault(22)(closure_9).reject((guildId) => guildId.guildId === closure_0);
  closure_9 = importDefault(22)(closure_9).reject((guildId) => guildId.guildId === closure_0).keyBy("threadId").value();
}
function storeThreads(threads) {
  threads = threads.threads;
  if (null != threads) {
    const item = threads.forEach(storeThread);
  }
}
function storeThread(type) {
  let hasItem = ALL_CHANNEL_TYPES.has(type.type);
  if (hasItem) {
    hasItem = null != type.member;
  }
  if (hasItem) {
    const obj = {};
    ({ id: obj.threadId, guild_id: obj.guildId } = type);
    obj.flags = type.member.flags;
    obj.muted = type.member.muted;
    obj.muteConfig = type.member.muteConfig;
    const _Date = Date;
    const date = new Date(type.member.joinTimestamp);
    obj.joinTimestamp = date;
    closure_9[type.id] = obj;
    handleMutedChange(type.id);
  }
}
function handleMutedChange(id) {
  let closure_0 = id;
  importDefaultResult.clearTimer(id);
  if (true === dependencyMap[id].muted) {
    const _Set2 = Set;
    let set = new Set(set2);
    set2 = set;
    set.add(id);
    if (importDefaultResult.setTimer(id, tmp.muteConfig, () => {
      outer1_9[closure_0].muted = false;
      set = new Set(set);
      set.delete(closure_0);
      outer1_12.emitChange();
    })) {
      dependencyMap[id].muted = false;
      const _Set3 = Set;
      const set1 = new Set(set2);
      set2 = set1;
      set1.delete(id);
    }
  } else {
    const _Set = Set;
    set2 = new Set(set2);
    set2.delete(id);
  }
}
function handleThreadListSyncOrSearchFinish(guildId) {
  guildId = guildId.guildId;
  const members = guildId.members;
  if (tmp) {
    const item = members.forEach((id) => {
      const obj = { threadId: id.id, guildId, flags: id.flags, muted: id.muted, muteConfig: id.muteConfig, joinTimestamp: new Date(id.joinTimestamp) };
      outer1_9[id.id] = obj;
      outer1_17(id.id);
    });
  }
}
function handleSearchMessagesSuccess(guildId) {
  guildId = guildId.guildId;
  const data = guildId.data;
  if (null != guildId) {
    let item = data.forEach((members) => {
      members = members.members;
      const item = members.forEach((id) => {
        const obj = { threadId: id.id, guildId: outer1_0, flags: id.flags, muted: id.muted, muteConfig: id.muteConfig, joinTimestamp: new Date(id.joinTimestamp) };
        outer2_9[id.id] = obj;
        outer2_17(id.id);
      });
    });
  }
}
let closure_9 = {};
importDefaultResult = new importDefaultResult();
let set = new Set();
let tmp5 = ((Store) => {
  class JoinedThreadsStoreClass {
    constructor() {
      self = this;
      tmp = outer1_2(this, JoinedThreadsStoreClass);
      obj = outer1_5(JoinedThreadsStoreClass);
      tmp2 = outer1_4;
      if (outer1_13()) {
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
  callback2(JoinedThreadsStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "hasJoined",
    value(arg0) {
      return arg0 in outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "joinTimestamp",
    value(arg0) {
      let joinTimestamp;
      if (null != outer1_9[arg0]) {
        joinTimestamp = tmp.joinTimestamp;
      }
      return joinTimestamp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "flags",
    value(arg0) {
      let flags;
      if (null != outer1_9[arg0]) {
        flags = tmp.flags;
      }
      return flags;
    }
  };
  items[4] = {
    key: "getInitialOverlayState",
    value() {
      return Object.values(outer1_9);
    }
  };
  items[5] = {
    key: "getMuteConfig",
    value(arg0) {
      let muteConfig;
      if (null != outer1_9[arg0]) {
        muteConfig = tmp.muteConfig;
      }
      return muteConfig;
    }
  };
  items[6] = {
    key: "getMutedThreads",
    value() {
      return outer1_11;
    }
  };
  items[7] = {
    key: "isMuted",
    value(arg0) {
      return outer1_11.has(arg0);
    }
  };
  return callback(JoinedThreadsStoreClass, items);
})(require("initialize").Store);
tmp5.displayName = "JoinedThreadsStore";
tmp5 = new tmp5(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    importDefaultResult.reset();
    const set = new Set();
    let closure_9 = {};
    guilds = guilds.guilds;
    const item = guilds.forEach((arg0) => {
      outer1_15(arg0);
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(joinedThreads) {
    const mapped = importDefault(22)(joinedThreads.joinedThreads).map((joinTimestamp) => {
      const obj = {};
      const merged = Object.assign(joinTimestamp);
      obj["joinTimestamp"] = new Date(joinTimestamp.joinTimestamp);
      return obj;
    });
    const arr = importDefault(22)(joinedThreads.joinedThreads);
    let closure_9 = mapped.keyBy("threadId").value();
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    deleteGuildThreads(guild.id);
    storeThreads(guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    deleteGuildThreads(guild.guild.id);
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    storeThread(channel.channel);
  },
  THREAD_LIST_SYNC: handleThreadListSyncOrSearchFinish,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  LOAD_THREADS_SUCCESS: handleThreadListSyncOrSearchFinish,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleThreadListSyncOrSearchFinish,
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (channel.id in obj) {
      obj = {};
      const merged = Object.assign(obj);
      const id = channel.id;
      delete tmp2[tmp];
    } else {
      return false;
    }
  },
  THREAD_MEMBER_UPDATE: function handleThreadMemberUpdate(userId) {
    if (store.getId() !== userId.userId) {
      return false;
    } else {
      const obj = {};
      ({ id: obj.threadId, guildId: obj.guildId, flags: obj.flags, muted: obj.muted, muteConfig: obj.muteConfig } = userId);
      const _Date = Date;
      const date = new Date(userId.joinTimestamp);
      obj.joinTimestamp = date;
      closure_9[userId.id] = obj;
      handleMutedChange(userId.id);
    }
  },
  THREAD_MEMBER_LOCAL_UPDATE: function handleThreadMemberLocalUpdate(arg0) {
    let guildId;
    let id;
    let isJoining;
    let userId;
    ({ id, guildId } = arg0);
    ({ userId, isJoining } = arg0);
    let tmp3 = store.getId() === userId;
    if (tmp3) {
      if (null === guildId) {
        tmp3 = tmp5;
      } else if (isJoining) {
        let obj = { threadId: id, guildId, flags: 0, muted: true };
        obj = { end_time: undefined };
        obj.muteConfig = obj;
        const _Date = Date;
        const date = new Date();
        guildId = date;
        obj.joinTimestamp = date;
        tmp6[id] = obj;
      } else {
        delete tmp[tmp2];
      }
    }
    return tmp3;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(removedMemberIds) {
    let closure_0 = removedMemberIds;
    let c1 = false;
    removedMemberIds = removedMemberIds.removedMemberIds;
    let hasItem = null != removedMemberIds;
    if (hasItem) {
      hasItem = removedMemberIds.includes(store.getId());
    }
    if (hasItem) {
      hasItem = removedMemberIds.id in obj;
    }
    if (hasItem) {
      obj = {};
      let merged = Object.assign(obj);
      const id = removedMemberIds.id;
      delete tmp2[tmp];
      c1 = true;
    }
    const addedMembers = removedMemberIds.addedMembers;
    if (null != addedMembers) {
      const item = addedMembers.forEach((userId) => {
        if (userId.userId === outer1_8.getId()) {
          let obj = {};
          const merged = Object.assign(obj);
          obj = {};
          ({ id: obj2.threadId, guildId: obj2.guildId } = user);
          ({ flags: obj2.flags, muted: obj2.muted, muteConfig: obj2.muteConfig } = userId);
          const _Date = Date;
          const date = new Date(userId.joinTimestamp);
          obj.joinTimestamp = date;
          obj[user.id] = obj;
          outer1_17(user.id);
          let c1 = true;
        }
      });
    }
    return c1;
  }
});
let closure_12 = tmp5;
let result = set.fileFinishedImporting("modules/threads/JoinedThreadsStore.tsx");

export default tmp5;
