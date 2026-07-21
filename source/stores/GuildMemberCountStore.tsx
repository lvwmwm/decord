// Module ID: 4049
// Function ID: 33778
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4049 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let closure_6 = {};
let tmp2 = (Store) => {
  class GuildMemberCountStore {
    constructor() {
      self = this;
      tmp = GuildMemberCountStore(this, GuildMemberCountStore);
      obj = closure_3(GuildMemberCountStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = GuildMemberCountStore;
  callback2(GuildMemberCountStore, Store);
  let obj = {
    key: "getMemberCounts",
    value() {
      return closure_5;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getMemberCount",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = closure_5[arg0];
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
        tmp = closure_6[arg0];
      }
      return tmp;
    }
  };
  items[2] = obj;
  return callback(GuildMemberCountStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "GuildMemberCountStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let closure_5 = {};
    const item = guilds.forEach((id) => {
      closure_5[id.id] = id.member_count;
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(guildMemberCounts) {
    const merged = Object.assign(guildMemberCounts.guildMemberCounts);
    let closure_5 = {};
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    closure_5[guild.id] = guild.member_count;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == closure_5[guild.id]) {
      if (null == closure_6[guild.id]) {
        return false;
      }
    }
    delete r3[r2];
    delete r1[r0];
  },
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(arg0) {
    let guildId;
    let memberCount;
    let onlineCount;
    ({ guildId, memberCount, onlineCount } = arg0);
    let flag = false;
    if (closure_5[guildId] !== memberCount) {
      closure_5[guildId] = memberCount;
      flag = true;
    }
    if (closure_6[guildId] !== onlineCount) {
      closure_6[guildId] = onlineCount;
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
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/GuildMemberCountStore.tsx");

export default tmp2;
