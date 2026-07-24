// Module ID: 1353
// Function ID: 16253
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1354, 566, 686, 2]

// Module 1353 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { GuildScheduledEventPrivacyLevel as closure_5 } from "GUILD_EVENT_MAX_NAME_LENGTH";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function addStageInstancesForGuild(guild_id, items) {
  let obj = {};
  obj = dependencyMap[guild_id];
  if (null == obj) {
    obj = {};
  }
  const merged = Object.assign(obj);
  if (null != items) {
    const item = items.forEach((channel_id) => {
      outer1_7[channel_id.channel_id] = channel_id;
      obj[channel_id.channel_id] = channel_id;
    });
  }
  dependencyMap[guild_id] = obj;
}
function handleStageInstanceCreateOrUpdate(instance) {
  instance = instance.instance;
  const items = [instance];
  addStageInstancesForGuild(instance.guild_id, items);
}
function doDelete(guild_id, channel_id) {
  delete tmp[tmp2];
  if (null != guild_id) {
    let obj = {};
    obj = dependencyMap[guild_id];
    if (null == obj) {
      obj = {};
    }
    const merged = Object.assign(obj);
    delete tmp[tmp2];
    dependencyMap[guild_id] = obj;
  }
}
let closure_6 = {};
let closure_7 = {};
let tmp2 = ((Store) => {
  class StageInstanceStore {
    constructor() {
      self = this;
      tmp = StageInstanceStore(this, StageInstanceStore);
      obj = outer1_3(StageInstanceStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(StageInstanceStore, Store);
  let obj = {
    key: "getStageInstanceByChannel",
    value(arg0) {
      if (null != arg0) {
        return outer1_7[arg0];
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
      return privacy_level === outer1_5.PUBLIC;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStageInstancesByGuild",
    value(arg0) {
      if (null == arg0) {
        let obj = {};
      } else {
        obj = outer1_6[arg0];
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
      return Object.values(outer1_7);
    }
  };
  return callback(StageInstanceStore, items);
})(require("initialize").Store);
tmp2.displayName = "StageInstanceStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let closure_6 = {};
    let closure_7 = {};
    const item = guilds.forEach((id) => {
      outer1_9(id.id, id.stage_instances);
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    addStageInstancesForGuild(guild.id, guild.stage_instances);
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    let obj = dependencyMap[arg0.guild.id];
    if (null == obj) {
      obj = {};
    }
    delete tmp2[tmp];
    const keys = Object.keys(obj);
    const item = keys.forEach((arg0) => {
      delete tmp2[tmp];
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/stage_channels/StageInstanceStore.tsx");

export default tmp2;
