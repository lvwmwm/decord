// Module ID: 12864
// Function ID: 98306
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12864 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function maybeCreateState(guildId) {
  if (null == obj[guildId]) {
    const obj = { activeChannelsCount: undefined, onlineCount: undefined, memberCount: undefined };
    obj[guildId] = obj;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = importDefault(dependencyMap[7]);
let closure_8 = importDefault(dependencyMap[8]);
let closure_9 = importDefault(dependencyMap[9]);
let obj = {};
let tmp2 = (PersistedStore) => {
  class GuildHeaderCountsStore {
    constructor() {
      self = this;
      tmp = GuildHeaderCountsStore(this, GuildHeaderCountsStore);
      obj = closure_3(GuildHeaderCountsStore);
      tmp2 = closure_2;
      if (closure_12()) {
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
  let closure_0 = GuildHeaderCountsStore;
  callback2(GuildHeaderCountsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value() {
      let tmp = arg0;
      const self = this;
      if (arg0 === undefined) {
        tmp = closure_10;
      }
      self.waitFor(closure_7, closure_5, closure_8, closure_6, closure_9, closure_5);
      if (null == tmp) {
        tmp = closure_10;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveChannelsCount",
    value(arg0) {
      let activeChannelsCount;
      if (null != closure_11[arg0]) {
        activeChannelsCount = tmp.activeChannelsCount;
      }
      return activeChannelsCount;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getOnlineCount",
    value(arg0) {
      let onlineCount;
      if (null != closure_11[arg0]) {
        onlineCount = tmp.onlineCount;
      }
      return onlineCount;
    }
  };
  items[4] = {
    key: "getMemberCount",
    value(arg0) {
      let memberCount;
      if (null != closure_11[arg0]) {
        memberCount = tmp.memberCount;
      }
      return memberCount;
    }
  };
  return callback(GuildHeaderCountsStore, items);
}(importDefault(dependencyMap[10]).PersistedStore);
tmp2.displayName = "GuildHeaderCountsStore";
tmp2.persistKey = "GuildHeaderCountsStore";
obj = {
  GUILD_HEADER_MEMBER_COUNT: function handleMemberCount(guildId) {
    guildId = guildId.guildId;
    maybeCreateState(guildId);
    obj[guildId].memberCount = guildId.count;
  },
  GUILD_HEADER_ONLINE_COUNT: function handleOnlineCount(guildId) {
    guildId = guildId.guildId;
    maybeCreateState(guildId);
    obj[guildId].onlineCount = guildId.count;
  },
  GUILD_HEADER_ACTIVE_CHANNELS_COUNT: function handleActiveChannelsCount(guildId) {
    guildId = guildId.guildId;
    maybeCreateState(guildId);
    obj[guildId].activeChannelsCount = guildId.count;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[11]), obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_action_sheet/native/GuildHeaderCountsStore.tsx");

export default tmp2;
