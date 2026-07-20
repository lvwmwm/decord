// Module ID: 3758
// Function ID: 28763
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 3758 (_isNativeReflectConstruct)
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import { ALL_CHANNEL_TYPES } from "result";
import closure_8 from "result";
import importDefaultResult from "result";
import result from "result";

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
  const obj = importDefault(dependencyMap[8])(closure_9);
  const rejectResult = importDefault(dependencyMap[8])(closure_9).reject((guildId) => guildId.guildId === guildId);
  closure_9 = importDefault(dependencyMap[8])(closure_9).reject((guildId) => guildId.guildId === guildId).keyBy("threadId").value();
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
  const importDefault = id;
  importDefaultResult.clearTimer(id);
  if (true === closure_9[id].muted) {
    const _Set2 = Set;
    let set = new Set(set);
    set.add(id);
    if (importDefaultResult.setTimer(id, tmp.muteConfig, () => {
      closure_9[closure_0].muted = false;
      const set = new Set(set);
      set.delete(arg0);
      closure_12.emitChange();
    })) {
      closure_9[id].muted = false;
      const _Set3 = Set;
      const set1 = new Set(set);
      set = set1;
      set1.delete(id);
    }
  } else {
    const _Set = Set;
    const set2 = new Set(set);
    set = set2;
    set2.delete(id);
  }
}
function handleThreadListSyncOrSearchFinish(guildId) {
  guildId = guildId.guildId;
  const importDefault = guildId;
  const members = guildId.members;
  if (tmp) {
    const item = members.forEach((id) => {
      const obj = { threadId: id.id, guildId, flags: id.flags, muted: id.muted, muteConfig: id.muteConfig, joinTimestamp: new Date(id.joinTimestamp) };
      closure_9[id.id] = obj;
      callback(id.id);
    });
  }
}
function handleSearchMessagesSuccess(guildId) {
  guildId = guildId.guildId;
  const importDefault = guildId;
  const data = guildId.data;
  if (null != guildId) {
    const item = data.forEach((members) => {
      members = members.members;
      const item = members.forEach((id) => {
        const obj = { threadId: id.id, guildId: closure_0, flags: id.flags, muted: id.muted, muteConfig: id.muteConfig, joinTimestamp: new Date(id.joinTimestamp) };
        closure_9[id.id] = obj;
        callback(id.id);
      });
    });
  }
}
let closure_9 = {};
importDefaultResult = new importDefaultResult();
const set = new Set();
let tmp5 = (Store) => {
  class JoinedThreadsStoreClass {
    constructor() {
      self = this;
      tmp = closure_2(this, JoinedThreadsStoreClass);
      obj = closure_5(JoinedThreadsStoreClass);
      tmp2 = closure_4;
      if (closure_13()) {
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
  const importDefault = JoinedThreadsStoreClass;
  callback2(JoinedThreadsStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "hasJoined",
    value(arg0) {
      return arg0 in closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "joinTimestamp",
    value(arg0) {
      let joinTimestamp;
      if (null != closure_9[arg0]) {
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
      if (null != closure_9[arg0]) {
        flags = tmp.flags;
      }
      return flags;
    }
  };
  items[4] = {
    key: "getInitialOverlayState",
    value() {
      return Object.values(closure_9);
    }
  };
  items[5] = {
    key: "getMuteConfig",
    value(arg0) {
      let muteConfig;
      if (null != closure_9[arg0]) {
        muteConfig = tmp.muteConfig;
      }
      return muteConfig;
    }
  };
  items[6] = {
    key: "getMutedThreads",
    value() {
      return closure_11;
    }
  };
  items[7] = {
    key: "isMuted",
    value(arg0) {
      return set.has(arg0);
    }
  };
  return callback(JoinedThreadsStoreClass, items);
}(require("result").Store);
tmp5.displayName = "JoinedThreadsStore";
tmp5 = new tmp5(require("result"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    importDefaultResult.reset();
    const set = new Set();
    let closure_9 = {};
    guilds = guilds.guilds;
    const item = guilds.forEach((arg0) => {
      callback(arg0);
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(joinedThreads) {
    const mapped = importDefault(dependencyMap[8])(joinedThreads.joinedThreads).map((joinTimestamp) => {
      const obj = {};
      const merged = Object.assign(joinTimestamp);
      obj["joinTimestamp"] = new Date(joinTimestamp.joinTimestamp);
      return obj;
    });
    const arr = importDefault(dependencyMap[8])(joinedThreads.joinedThreads);
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
    if (channel.id in closure_9) {
      const obj = {};
      const merged = Object.assign(closure_9);
      closure_9 = obj;
      const id = channel.id;
      delete r1[r0];
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
    let tmp = store.getId() === userId;
    if (tmp) {
      if (null === guildId) {
        tmp = tmp3;
      } else if (isJoining) {
        let obj = { threadId: id, guildId, flags: 0, muted: true };
        obj = { end_time: undefined };
        obj.muteConfig = obj;
        const _Date = Date;
        const date = new Date();
        guildId = date;
        obj.joinTimestamp = date;
        tmp4[id] = obj;
      } else {
        delete r4[r5];
      }
    }
    return tmp;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(removedMemberIds) {
    const importDefault = removedMemberIds;
    let closure_1 = false;
    removedMemberIds = removedMemberIds.removedMemberIds;
    let hasItem = null != removedMemberIds;
    if (hasItem) {
      hasItem = removedMemberIds.includes(store.getId());
    }
    if (hasItem) {
      hasItem = removedMemberIds.id in closure_9;
    }
    if (hasItem) {
      const obj = {};
      const merged = Object.assign(closure_9);
      closure_9 = obj;
      const id = removedMemberIds.id;
      delete r4[r3];
      closure_1 = true;
    }
    const addedMembers = removedMemberIds.addedMembers;
    if (null != addedMembers) {
      const item = addedMembers.forEach((userId) => {
        if (userId.userId === id.getId()) {
          let obj = {};
          const merged = Object.assign(obj);
          obj = {};
          ({ id: obj2.threadId, guildId: obj2.guildId } = userId);
          ({ flags: obj2.flags, muted: obj2.muted, muteConfig: obj2.muteConfig } = userId);
          const _Date = Date;
          const date = new Date(userId.joinTimestamp);
          obj.joinTimestamp = date;
          obj[userId.id] = obj;
          callback(userId.id);
          let closure_1 = true;
        }
      });
    }
    return closure_1;
  }
});
result = result.fileFinishedImporting("modules/threads/JoinedThreadsStore.tsx");

export default tmp5;
