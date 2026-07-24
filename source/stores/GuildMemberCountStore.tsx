// Module ID: 4051
// Function ID: 33790
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 4051 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function handleInviteData(invite) {
  let approximate_presence_count;
  let guild;
  ({ guild, approximate_presence_count } = invite.invite);
  let id;
  if (null != guild) {
    id = guild.id;
  }
  if (null != id) {
    if (null != approximate_presence_count) {
      closure_6[guild.id] = approximate_presence_count;
    }
  }
  return false;
}
let closure_5 = {};
let closure_6 = {};
let tmp2 = ((Store) => {
  class GuildMemberCountStore {
    constructor() {
      self = this;
      tmp = GuildMemberCountStore(this, GuildMemberCountStore);
      obj = outer1_3(GuildMemberCountStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(GuildMemberCountStore, Store);
  let obj = {
    key: "getMemberCounts",
    value() {
      return outer1_5;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getMemberCount",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = outer1_5[arg0];
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getOnlineCount",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = outer1_6[arg0];
      }
      return tmp;
    }
  };
  items[2] = obj;
  return callback(GuildMemberCountStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildMemberCountStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let closure_5 = {};
    const item = guilds.forEach((id) => {
      closure_5[id.id] = id.member_count;
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(guildMemberCounts) {
    const obj = {};
    const merged = Object.assign(guildMemberCounts.guildMemberCounts);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    closure_5[guild.id] = guild.member_count;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == dependencyMap[guild.id]) {
      if (null == dependencyMap2[guild.id]) {
        return false;
      }
    }
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(arg0) {
    let guildId;
    let memberCount;
    let onlineCount;
    ({ guildId, memberCount, onlineCount } = arg0);
    let flag = false;
    if (dependencyMap[guildId] !== memberCount) {
      dependencyMap[guildId] = memberCount;
      flag = true;
    }
    if (dependencyMap2[guildId] !== onlineCount) {
      dependencyMap2[guildId] = onlineCount;
      flag = true;
    }
    return flag;
  },
  INVITE_ACCEPT_SUCCESS: handleInviteData,
  INVITE_RESOLVE_SUCCESS: handleInviteData,
  ONLINE_GUILD_MEMBER_COUNT_UPDATE: function handleOnlineCountUpdate(arg0) {
    let count;
    let guildId;
    ({ guildId, count } = arg0);
    if (null != guildId) {
      if (null != count) {
        closure_6[guildId] = count;
      }
    }
    return false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GuildMemberCountStore.tsx");

export default tmp2;
