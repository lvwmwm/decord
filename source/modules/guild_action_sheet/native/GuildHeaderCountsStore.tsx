// Module ID: 13030
// Function ID: 100785
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5658, 1348, 4051, 1849, 4146, 566, 686, 2]

// Module 13030 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function maybeCreateState(guildId) {
  if (null == obj[guildId]) {
    obj = { activeChannelsCount: undefined, onlineCount: undefined, memberCount: undefined };
    obj[guildId] = obj;
  }
}
let obj = {};
let tmp2 = ((PersistedStore) => {
  class GuildHeaderCountsStore {
    constructor() {
      self = this;
      tmp = GuildHeaderCountsStore(this, GuildHeaderCountsStore);
      obj = outer1_3(GuildHeaderCountsStore);
      tmp2 = outer1_2;
      if (outer1_12()) {
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
  callback2(GuildHeaderCountsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value() {
      let tmp = arg0;
      const self = this;
      if (arg0 === undefined) {
        tmp = outer1_10;
      }
      self.waitFor(outer1_7, outer1_5, outer1_8, outer1_6, outer1_9, outer1_5);
      if (null == tmp) {
        tmp = outer1_10;
      }
      const outer1_11 = tmp;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveChannelsCount",
    value(arg0) {
      let activeChannelsCount;
      if (null != outer1_11[arg0]) {
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
      if (null != outer1_11[arg0]) {
        onlineCount = tmp.onlineCount;
      }
      return onlineCount;
    }
  };
  items[4] = {
    key: "getMemberCount",
    value(arg0) {
      let memberCount;
      if (null != outer1_11[arg0]) {
        memberCount = tmp.memberCount;
      }
      return memberCount;
    }
  };
  return callback(GuildHeaderCountsStore, items);
})(require("initialize").PersistedStore);
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
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_action_sheet/native/GuildHeaderCountsStore.tsx");

export default tmp2;
