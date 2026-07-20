// Module ID: 1353
// Function ID: 16246
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1353 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function addStageInstancesForGuild(guild_id, items) {
  let obj = {};
  obj = closure_6[guild_id];
  if (null == obj) {
    obj = {};
  }
  const merged = Object.assign(obj);
  let closure_0 = obj;
  if (null != items) {
    const item = items.forEach((channel_id) => {
      closure_7[channel_id.channel_id] = channel_id;
      obj[channel_id.channel_id] = channel_id;
    });
  }
  closure_6[guild_id] = obj;
}
function handleStageInstanceCreateOrUpdate(instance) {
  instance = instance.instance;
  const items = [instance];
  addStageInstancesForGuild(instance.guild_id, items);
}
function doDelete(guild_id, channel_id) {
  delete r1[r3];
  if (null != guild_id) {
    let obj = {};
    obj = closure_6[guild_id];
    if (null == obj) {
      obj = {};
    }
    const merged = Object.assign(obj);
    delete r1[r3];
    closure_6[guild_id] = obj;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = arg1(dependencyMap[5]).GuildScheduledEventPrivacyLevel;
let closure_6 = {};
let closure_7 = {};
let tmp2 = (Store) => {
  class StageInstanceStore {
    constructor() {
      self = this;
      tmp = StageInstanceStore(this, StageInstanceStore);
      obj = closure_3(StageInstanceStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = StageInstanceStore;
  callback2(StageInstanceStore, Store);
  let obj = {
    key: "getStageInstanceByChannel",
    value(arg0) {
      if (null != arg0) {
        return closure_7[arg0];
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isLive",
    value(arg0) {
      return null != this.getStageInstanceByChannel(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "isPublic",
    value(arg0) {
      const stageInstanceByChannel = this.getStageInstanceByChannel(arg0);
      let privacy_level;
      if (null != stageInstanceByChannel) {
        privacy_level = stageInstanceByChannel.privacy_level;
      }
      return privacy_level === constants.PUBLIC;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStageInstancesByGuild",
    value(arg0) {
      if (null == arg0) {
        let obj = {};
      } else {
        obj = closure_6[arg0];
        if (null == obj) {
          obj = {};
        }
      }
      return obj;
    }
  };
  items[4] = {
    key: "getAllStageInstances",
    value() {
      return Object.values(closure_7);
    }
  };
  return callback(StageInstanceStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "StageInstanceStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let closure_6 = {};
    let closure_7 = {};
    const item = guilds.forEach((id) => {
      callback(id.id, id.stage_instances);
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    addStageInstancesForGuild(guild.id, guild.stage_instances);
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    let obj = closure_6[arg0.guild.id];
    if (null == obj) {
      obj = {};
    }
    delete r1[r0];
    const keys = Object.keys(obj);
    const item = keys.forEach((arg0) => {
      delete r1[r0];
    });
  },
  STAGE_INSTANCE_CREATE: handleStageInstanceCreateOrUpdate,
  STAGE_INSTANCE_UPDATE: handleStageInstanceCreateOrUpdate,
  STAGE_INSTANCE_DELETE: function handleStageInstanceDelete(instance) {
    instance = instance.instance;
    doDelete(instance.guild_id, instance.channel_id);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    doDelete(channel.guild_id, channel.id);
  },
  LOGOUT: function handleLogout() {
    let closure_7 = {};
    let closure_6 = {};
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/stage_channels/StageInstanceStore.tsx");

export default tmp2;
