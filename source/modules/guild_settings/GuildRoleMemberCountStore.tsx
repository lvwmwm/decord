// Module ID: 5149
// Function ID: 44897
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 5149 (_isNativeReflectConstruct)
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
let closure_5 = {};
let closure_6 = {};
let tmp2 = ((Store) => {
  class GuildRoleMemberCountStore {
    constructor() {
      self = this;
      tmp = GuildRoleMemberCountStore(this, GuildRoleMemberCountStore);
      obj = outer1_3(GuildRoleMemberCountStore);
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
  callback2(GuildRoleMemberCountStore, Store);
  let obj = {
    key: "getRoleMemberCount",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = outer1_5[arg0];
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
})(require("initialize").Store);
tmp2.displayName = "GuildRoleMemberCountStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function handleGuildRoleMemberCountFetchSuccess(guildId) {
    guildId = guildId.guildId;
    closure_5[guildId] = guildId.roleMemberCount;
    closure_6[guildId] = Date.now();
  },
  GUILD_ROLE_MEMBER_COUNT_UPDATE: function handleGuildRoleMemberCountUpdate(arg0) {
    if (null == dependencyMap[arg0.guildId]) {
      return false;
    } else {
      tmp3[tmp] = tmp2;
    }
  },
  GUILD_ROLE_MEMBER_BULK_ADD: function handleGuildRoleMemberBulkAdd(roleId) {
    roleId = roleId.roleId;
    if (null == dependencyMap[roleId.guildId]) {
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
    if (null == dependencyMap[guildId]) {
      dependencyMap[guildId] = {};
    }
    dependencyMap[guildId][guildId.role.id] = 0;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete tmp4[tmp3];
    delete tmp2[tmp];
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/GuildRoleMemberCountStore.tsx");

export default tmp2;
