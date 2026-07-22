// Module ID: 5037
// Function ID: 43512
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5037 (_isNativeReflectConstruct)
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
    delete r0[r1];
  }
}
function storeThreads(threads) {
  const importDefault = threads;
  let tmp = null != threads.threads;
  if (tmp) {
    tmp = threads.threads.length > 0;
  }
  if (tmp) {
    closure_10[threads.id] = {};
    threads = threads.threads;
    const found = threads.filter((type) => set.has(type.type));
    const item = found.forEach((arg0) => {
      callback(arg0.id, arg0);
    });
  }
  if (threads.hasThreadsSubscription) {
    set.add(threads.id);
  }
}
function storeThread(arg0, parent_id) {
  parent_id = parent_id.parent_id;
  if (!(parent_id in closure_10[arg0])) {
    tmp[parent_id] = {};
  }
  closure_10[arg0][parent_id][parent_id.id] = threadStateFromChannel(parent_id);
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
      let obj = closure_10[channel.guild_id];
      if (null == obj) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj = {};
      const merged1 = Object.assign(obj[channel.parent_id]);
      obj[channel.id] = threadStateFromChannel(channel);
      obj[channel.parent_id] = obj;
      closure_10[channel.guild_id] = obj;
    }
  } else {
    return false;
  }
}
function deleteThread(channel) {
  let guild_id;
  let parent_id;
  ({ guild_id, parent_id } = channel);
  let tmp = null != guild_id;
  if (tmp) {
    tmp = null != parent_id;
  }
  if (tmp) {
    let tmp3 = guild_id in closure_10;
    if (tmp3) {
      let tmp5 = parent_id in closure_10[guild_id];
      if (tmp5) {
        if (channel.id in closure_10[guild_id][parent_id]) {
          let obj = {};
          const merged = Object.assign(closure_10[guild_id]);
          obj = {};
          const merged1 = Object.assign(closure_10[guild_id][parent_id]);
          obj[parent_id] = obj;
          closure_10[guild_id] = obj;
          delete r4[r8];
          if (obj3.isEmpty(closure_10[guild_id][parent_id])) {
            delete r5[r6];
          }
          const obj3 = importDefault(dependencyMap[7]);
        }
        tmp5 = tmp7;
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ ALL_CHANNEL_TYPES: closure_7, THREAD_CHANNEL_TYPES: closure_8 } = arg1(dependencyMap[5]));
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = {};
const set = new Set();
let closure_12 = {};
let tmp4 = (Store) => {
  class ActiveThreadsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ActiveThreadsStore);
      obj = closure_5(ActiveThreadsStore);
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
  const importDefault = ActiveThreadsStore;
  callback2(ActiveThreadsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9);
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
      let tmp = closure_10[arg0];
      if (null == tmp) {
        tmp = closure_12;
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
        tmp = closure_12;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "hasThreadsForChannel",
    value(arg0, arg1) {
      return !ActiveThreadsStore(closure_1[7]).isEmpty(this.getThreadsForParent(arg0, arg1));
    }
  };
  items[5] = {
    key: "forEachGuild",
    value(arg0) {
      const ActiveThreadsStore = arg0;
      const keys = ActiveThreadsStore(closure_1[8]).keys(closure_10);
      const item = keys.forEach((arg0) => {
        arg0(arg0, closure_10[arg0]);
      });
    }
  };
  items[6] = {
    key: "hasLoaded",
    value(arg0) {
      return set.has(arg0);
    }
  };
  return callback(ActiveThreadsStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp4.displayName = "ActiveThreadsStore";
tmp4 = new tmp4(importDefault(dependencyMap[10]), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let closure_10 = {};
    set.clear();
    guilds = guilds.guilds;
    const item = guilds.forEach((arg0) => {
      callback(arg0);
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(channels) {
    let closure_10 = {};
    const found = importDefault(dependencyMap[7])(channels.channels).filter((type) => set.has(type.type));
    const arr = importDefault(dependencyMap[7])(channels.channels);
    const item = found.groupBy("guild_id").forEach((arr) => {
      closure_10[arg1] = {};
      const item = arr.forEach((arg0) => {
        callback(arg1, arg0);
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
    const importDefault = guildId;
    const threads = guildId.threads;
    if (null == guildId.channelIds) {
      set.add(guildId);
    }
    let obj = {};
    const merged = Object.assign(closure_10[guildId]);
    closure_10[guildId] = obj;
    for (const key10016 in closure_10[guildId]) {
      let tmp5 = key10016;
      let tmp6 = closure_10;
      obj = {};
      let tmp7 = closure_10;
      let tmp8 = obj;
      let merged1 = Object.assign(closure_10[guildId][key10016]);
      closure_10[guildId][key10016] = obj;
    }
    const item = threads.forEach((arg0) => {
      callback(guildId, arg0);
    });
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    return deleteThread(channel.channel);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.guild_id) {
      if (channel.guild_id in closure_10) {
        const obj = {};
        const merged = Object.assign(closure_10[channel.guild_id]);
        closure_10[channel.guild_id] = obj;
        const id = channel.id;
        delete r1[r0];
      }
    }
    return false;
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let closure_10 = {};
    set.clear();
    guilds = guilds.guilds;
    const item = guilds.forEach((arg0) => {
      callback(arg0);
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(channels) {
    let closure_10 = {};
    const found = importDefault(dependencyMap[7])(channels.channels).filter((type) => set.has(type.type));
    const arr = importDefault(dependencyMap[7])(channels.channels);
    const item = found.groupBy("guild_id").forEach((arr) => {
      closure_10[arg1] = {};
      const item = arr.forEach((arg0) => {
        callback(arg1, arg0);
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
    const importDefault = guildId;
    const threads = guildId.threads;
    if (null == guildId.channelIds) {
      set.add(guildId);
    }
    let obj = {};
    const merged = Object.assign(closure_10[guildId]);
    closure_10[guildId] = obj;
    for (const key10016 in closure_10[guildId]) {
      let tmp5 = key10016;
      let tmp6 = closure_10;
      obj = {};
      let tmp7 = closure_10;
      let tmp8 = obj;
      let merged1 = Object.assign(closure_10[guildId][key10016]);
      closure_10[guildId][key10016] = obj;
    }
    const item = threads.forEach((arg0) => {
      callback(guildId, arg0);
    });
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    return deleteThread(channel.channel);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.guild_id) {
      if (channel.guild_id in closure_10) {
        const obj = {};
        const merged = Object.assign(closure_10[channel.guild_id]);
        closure_10[channel.guild_id] = obj;
        const id = channel.id;
        delete r1[r0];
      }
    }
    return false;
  }
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/threads/ActiveThreadsStore.tsx");

export default tmp4;
