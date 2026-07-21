// Module ID: 5416
// Function ID: 46457
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5416 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let closure_6 = {};
let tmp2 = (Store) => {
  class GuildRoleMemberCountStore {
    constructor() {
      self = this;
      tmp = GuildRoleMemberCountStore(this, GuildRoleMemberCountStore);
      obj = closure_3(GuildRoleMemberCountStore);
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
  let closure_0 = GuildRoleMemberCountStore;
  callback2(GuildRoleMemberCountStore, Store);
  let obj = {
    key: "getRoleMemberCount",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = closure_5[arg0];
      }
      return tmp;
    }
  };
  const items = [obj, ];
  obj = {
    key: "shouldFetch",
    value(arg0) {
      if (null == arg0) {
        return false;
      } else {
        let tmp3 = null == tmp2;
        if (!tmp3) {
          const _Date = Date;
          tmp3 = Date.now() - tmp2 > 120000;
        }
        return tmp3;
      }
    }
  };
  items[1] = obj;
  return callback(GuildRoleMemberCountStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "GuildRoleMemberCountStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function handleGuildRoleMemberCountFetchSuccess(guildId) {
    guildId = guildId.guildId;
    closure_5[guildId] = guildId.roleMemberCount;
    closure_6[guildId] = Date.now();
  },
  GUILD_ROLE_MEMBER_COUNT_UPDATE: function handleGuildRoleMemberCountUpdate(arg0) {
    if (null == closure_5[arg0.guildId]) {
      return false;
    } else {
      tmp3[tmp] = tmp2;
    }
  },
  GUILD_ROLE_MEMBER_BULK_ADD: function handleGuildRoleMemberBulkAdd(roleId) {
    roleId = roleId.roleId;
    if (null == closure_5[roleId.guildId]) {
      return false;
    } else if (null == tmp2[roleId]) {
      return false;
    } else {
      const _Object = Object;
      tmp2[roleId] = tmp2[roleId] + Object.keys(tmp).length;
    }
  },
  GUILD_ROLE_MEMBER_ADD: function handleGuildRoleMemberAdd(roleId) {
    roleId = roleId.roleId;
    let tmp2 = null != tmp;
    if (tmp2) {
      if (null != tmp[roleId]) {
        tmp[roleId] = tmp[roleId] + 1;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  GUILD_ROLE_MEMBER_REMOVE: function handleGuildRoleMemberRemove(roleId) {
    roleId = roleId.roleId;
    let tmp2 = null != tmp;
    if (tmp2) {
      if (null != tmp[roleId]) {
        const _Math = Math;
        tmp[roleId] = Math.max(tmp[roleId] - 1, 0);
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  GUILD_ROLE_CREATE: function handleGuildRoleCreate(guildId) {
    guildId = guildId.guildId;
    if (null == closure_5[guildId]) {
      closure_5[guildId] = {};
    }
    closure_5[guildId][guildId.role.id] = 0;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete r3[r2];
    delete r1[r0];
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_settings/GuildRoleMemberCountStore.tsx");

export default tmp2;
