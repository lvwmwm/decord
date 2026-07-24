// Module ID: 5040
// Function ID: 43534
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1352, 1348, 22, 21, 566, 686, 2]

// Module 5040 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import apply from "apply";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _callSuper from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

let closure_7;
let closure_8;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function threadStateFromChannel(channel) {
  return { id: channel.id, parentId: channel.parent_id };
}
function deleteGuildThreads(arg0) {
  if (arg0 in closure_10) {
    delete tmp[tmp2];
  }
}
function storeThreads(threads) {
  let closure_0 = threads;
  let tmp = null != threads.threads;
  if (tmp) {
    tmp = threads.threads.length > 0;
  }
  if (tmp) {
    closure_10[threads.id] = {};
    threads = threads.threads;
    const found = threads.filter((type) => outer1_7.has(type.type));
    const item = found.forEach((arg0) => {
      outer1_17(threads.id, arg0);
    });
  }
  if (threads.hasThreadsSubscription) {
    set.add(threads.id);
  }
}
function storeThread(arg0, parent_id) {
  parent_id = parent_id.parent_id;
  if (!(parent_id in dependencyMap[arg0])) {
    tmp[parent_id] = {};
  }
  dependencyMap[arg0][parent_id][parent_id.id] = threadStateFromChannel(parent_id);
}
function handleThreadCreateOrUpdate(channel) {
  channel = channel.channel;
  if (set.has(channel.type)) {
    const threadMetadata = channel.threadMetadata;
    let archived;
    if (null != threadMetadata) {
      archived = threadMetadata.archived;
    }
    if (true === archived) {
      return deleteThread(channel);
    } else {
      let obj = dependencyMap[channel.guild_id];
      if (null == obj) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj = {};
      const merged1 = Object.assign(obj[channel.parent_id]);
      obj[channel.id] = threadStateFromChannel(channel);
      obj[channel.parent_id] = obj;
      dependencyMap[channel.guild_id] = obj;
    }
  } else {
    return false;
  }
}
function deleteThread(channel) {
  let guild_id;
  let parent_id;
  ({ guild_id, parent_id } = channel);
  let tmp5 = null != guild_id;
  if (tmp5) {
    tmp5 = null != parent_id;
  }
  if (tmp5) {
    let tmp7 = guild_id in dependencyMap;
    if (tmp7) {
      let tmp9 = parent_id in dependencyMap[guild_id];
      if (tmp9) {
        if (channel.id in dependencyMap[guild_id][parent_id]) {
          let obj = {};
          const merged = Object.assign(dependencyMap[guild_id]);
          obj = {};
          const merged1 = Object.assign(dependencyMap[guild_id][parent_id]);
          obj[parent_id] = obj;
          dependencyMap[guild_id] = obj;
          delete tmp[tmp4];
          if (obj3.isEmpty(dependencyMap[guild_id][parent_id])) {
            delete tmp2[tmp3];
          }
          obj3 = importDefault(22);
        }
        tmp9 = tmp11;
      }
      tmp7 = tmp9;
    }
    tmp5 = tmp7;
  }
  return tmp5;
}
({ ALL_CHANNEL_TYPES: closure_7, THREAD_CHANNEL_TYPES: closure_8 } = _callSuper);
let closure_10 = {};
let set = new Set();
let closure_12 = {};
let tmp4 = ((Store) => {
  class ActiveThreadsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ActiveThreadsStore);
      obj = outer1_5(ActiveThreadsStore);
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
  callback2(ActiveThreadsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isActive",
    value(arg0, arg1, arg2) {
      const self = this;
      let tmp = null != arg0;
      if (tmp) {
        tmp = null != self.getThreadsForParent(arg0, arg1)[arg2];
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getThreadsForGuild",
    value(arg0) {
      let tmp = outer1_10[arg0];
      if (null == tmp) {
        tmp = outer1_12;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getThreadsForParent",
    value(arg0, arg1) {
      let tmp = this.getThreadsForGuild(arg0)[arg1];
      if (null == tmp) {
        tmp = outer1_12;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "hasThreadsForChannel",
    value(arg0, arg1) {
      return !ActiveThreadsStore(outer1_1[7]).isEmpty(this.getThreadsForParent(arg0, arg1));
    }
  };
  items[5] = {
    key: "forEachGuild",
    value(arg0) {
      let closure_0 = arg0;
      const keys = ActiveThreadsStore(outer1_1[8]).keys(outer1_10);
      const item = keys.forEach((arg0) => {
        callback(arg0, outer2_10[arg0]);
      });
    }
  };
  items[6] = {
    key: "hasLoaded",
    value(arg0) {
      return outer1_11.has(arg0);
    }
  };
  return callback(ActiveThreadsStore, items);
})(require("initialize").Store);
tmp4.displayName = "ActiveThreadsStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let closure_10 = {};
    set.clear();
    guilds = guilds.guilds;
    const item = guilds.forEach((arg0) => {
      outer1_16(arg0);
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(channels) {
    let closure_10 = {};
    const found = importDefault(22)(channels.channels).filter((type) => outer1_8.has(type.type));
    const arr = importDefault(22)(channels.channels);
    let item = found.groupBy("guild_id").forEach((arr) => {
      let closure_0 = arg1;
      closure_10[arg1] = {};
      const item = arr.forEach((arg0) => {
        outer2_17(closure_0, arg0);
      });
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    deleteGuildThreads(guild.id);
    storeThreads(guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    deleteGuildThreads(guild.guild.id);
  },
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_UPDATE: handleThreadCreateOrUpdate,
  THREAD_LIST_SYNC: function handleThreadListSync(guildId) {
    guildId = guildId.guildId;
    const threads = guildId.threads;
    if (null == guildId.channelIds) {
      set.add(guildId);
    }
    let obj = {};
    const merged = Object.assign(dependencyMap[guildId]);
    dependencyMap[guildId] = obj;
    for (const key10016 in closure_10[guildId]) {
      let tmp5 = key10016;
      let tmp6 = dependencyMap;
      obj = {};
      let tmp7 = dependencyMap;
      let tmp8 = obj;
      let merged1 = Object.assign(dependencyMap[guildId][key10016]);
      dependencyMap[guildId][key10016] = obj;
      continue;
    }
    const item = threads.forEach((arg0) => {
      outer1_17(guildId, arg0);
    });
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    return deleteThread(channel.channel);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.guild_id) {
      if (channel.guild_id in dependencyMap) {
        const obj = {};
        const merged = Object.assign(dependencyMap[channel.guild_id]);
        dependencyMap[channel.guild_id] = obj;
        const id = channel.id;
        delete tmp2[tmp];
      }
    }
    return false;
  }
});
let result = set.fileFinishedImporting("modules/threads/ActiveThreadsStore.tsx");

export default tmp4;
