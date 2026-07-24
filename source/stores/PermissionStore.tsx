// Module ID: 3758
// Function ID: 28687
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1909, 3759, 1353, 3760, 1352, 1391, 1857, 1348, 1917, 1838, 1849, 653, 3762, 3763, 22, 3765, 1387, 483, 3766, 566, 686, 2]

// Module 3758 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import MemberSafetyPagePermissions from "MemberSafetyPagePermissions";
import calculateElevatedPermissions from "calculateElevatedPermissions";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import isGuildOwner from "isGuildOwner";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_21 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import { MemberSafetyPagePermissions as closure_23 } from "MemberSafetyPagePermissions";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _getGuildPermissions(guildId) {
  if (null != table[guildId]) {
    return tmp;
  } else {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      return importAll(3763).NONE;
    } else {
      guild = guild.getGuild(guildId);
      if (null == guild) {
        let NONE = importAll(3763).NONE;
      } else {
        let obj = importAll(3763);
        obj = { user: currentUser, context: guild, checkElevated: flag };
        NONE = obj.computePermissions(obj);
        table[guildId] = NONE;
      }
      return NONE;
    }
  }
}
function getUncachedChannelPermissions(id, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const currentUser = authStore.getCurrentUser();
  if (null == currentUser) {
    return importAll(3763).NONE;
  } else {
    const channel = store.getChannel(id);
    if (null == channel) {
      return importAll(3763).NONE;
    } else {
      const guildId = channel.getGuildId();
      let tmp7 = null != guildId;
      if (tmp7) {
        let isLurkingResult = lurking.isLurking(guildId);
        if (!isLurkingResult) {
          const member = closure_19.getMember(guildId, currentUser.id);
          let isPending;
          if (null != member) {
            isPending = member.isPending;
          }
          isLurkingResult = isPending;
        }
        tmp7 = isLurkingResult;
      }
      if (!channel.isScheduledForDeletion()) {
        if (!tmp7) {
          let obj = importDefault(22);
          if (obj.isEmpty(channel.permissionOverwrites)) {
            if (null != guildId) {
              let permissions = _getGuildPermissions(guildId);
            }
            return permissions;
          }
        }
      }
      obj = { user: currentUser, context: channel, checkElevated: flag };
      permissions = importAll(3763).computePermissions(obj);
      const obj2 = importAll(3763);
    }
  }
}
function _getChannelPermissions(id) {
  let tmp = dependencyMap[id];
  if (null == tmp) {
    const tmp4 = getUncachedChannelPermissions(id, flag);
    dependencyMap[id] = tmp4;
    tmp = tmp4;
  }
  return tmp;
}
function updateGuildVersion(guildId) {
  if (null != guildId) {
    let num = 0;
    if (null != dependencyMap2[guildId]) {
      num = tmp2;
    }
    dependencyMap2[guildId] = num + 1;
    const tmp = dependencyMap2;
  }
}
function rebuildPermissions() {
  let closure_24 = {};
  let closure_25 = {};
  for (const key10005 in closure_26) {
    let tmp = key10005;
    let tmp2 = dependencyMap2;
    dependencyMap2[key10005] = dependencyMap2[key10005] + 1;
    continue;
  }
  closure_27 = closure_27 + 1;
}
function handleConnectionOpen() {
  rebuildPermissions();
}
function handleGuild() {
  rebuildPermissions();
}
function handleGuildMemberUpdate(user) {
  const currentUser = authStore.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (user.user.id !== id) {
    return false;
  } else {
    rebuildPermissions();
  }
}
function handleThreadAction() {
  return true;
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  return data.some((messages) => {
    messages = messages.messages;
    return messages.threads.length > 0 || messages.some((arr) => arr.some((thread) => null != thread.thread));
  });
}
function handleGuildRole(guildId) {
  guildId = guildId.guildId;
  delete tmp[tmp2];
  const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(guildId);
  const item = importDefault(22).forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete tmp2[tmp];
  });
  closure_27 = closure_27 + 1;
  updateGuildVersion(guildId);
}
function handleStageInstancesChanged(instance) {
  const channel = store.getChannel(instance.instance.channel_id);
  if (null == channel) {
    return false;
  } else {
    const currentUser = authStore.getCurrentUser();
    let obj = importAll(3763);
    obj = { user: currentUser, context: channel };
    const permissions = obj.computePermissions(obj);
    if (permissions === dependencyMap[channel.id]) {
      return false;
    } else {
      dependencyMap[channel.id] = permissions;
      closure_27 = closure_27 + 1;
    }
  }
}
function handleImpersonateUpdate(guildId) {
  guildId = guildId.guildId;
  delete tmp[tmp2];
  const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(guildId);
  const item = importDefault(22).forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete tmp2[tmp];
  });
  closure_27 = closure_27 + 1;
  updateGuildVersion(guildId);
}
function _computePermissions(channel, overwrites, roles, excludeGuildPermissions) {
  let NONE = importAll(3763).NONE;
  if (channel instanceof closure_13) {
    if (set.has(channel.type)) {
      channel = store.getChannel(channel.parent_id);
      if (null == channel) {
        let NONE2 = importAll(3763).NONE;
      } else {
        const obj4 = importAll(3763);
        const tmp16 = _computePermissions(channel, overwrites, roles, excludeGuildPermissions);
        NONE2 = obj4.applyThreadPermissions(channel, tmp16, closure_12.hasJoined(channel.id), closure_19.isCurrentUserGuest(channel.guild_id));
        const hasJoinedResult = closure_12.hasJoined(channel.id);
      }
      return NONE2;
    } else {
      NONE = _getChannelPermissions(channel.id);
    }
  } else {
    let obj = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
    if (obj.isGuildRecord(channel)) {
      NONE = _getGuildPermissions(channel.id);
    }
  }
  if (undefined === overwrites) {
    return NONE;
  }
  obj = { user: authStore.getCurrentUser(), context: channel, overwrites, roles, checkElevated: true, excludeGuildPermissions };
  NONE = importAll(3763).computePermissions(obj);
}
function resetState() {
  let closure_25 = {};
  let closure_24 = {};
  let closure_26 = {};
  let c27 = 0;
}
({ ChannelRecordBase: closure_13, THREAD_CHANNEL_TYPES: closure_14 } = _callSuper);
({ isGuildOwner: closure_15, isGuildOwnerWithRequiredMfaLevel: closure_16 } = isGuildOwner);
let closure_24 = {};
let closure_25 = {};
let closure_26 = {};
let c27 = 0;
let tmp4 = ((Store) => {
  class PermissionStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, PermissionStore);
      obj = outer1_7(PermissionStore);
      tmp2 = outer1_6;
      if (outer1_28()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PermissionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_18, outer1_19, outer1_20, outer1_9, outer1_12, outer1_10, outer1_11, outer1_21);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "getChannelPermissions",
    value(type) {
      if (outer1_14.has(type.type)) {
        let tmp2 = outer1_32(type.id);
      } else {
        tmp2 = outer1_33(type.id);
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildPermissions",
    value(id) {
      return outer1_31(id.id);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildPermissionProps",
    value(guild) {
      const self = this;
      const currentUser = outer1_21.getCurrentUser();
      const obj = { canManageGuild: this.can(outer1_22.MANAGE_GUILD, guild), canManageChannels: this.can(outer1_22.MANAGE_CHANNELS, guild), canManageRoles: this.can(outer1_22.MANAGE_ROLES, guild), canManageBans: this.can(outer1_22.BAN_MEMBERS, guild), canManageNicknames: this.can(outer1_22.MANAGE_NICKNAMES, guild) };
      let canResult = this.can(outer1_22.MANAGE_GUILD_EXPRESSIONS, guild);
      if (!canResult) {
        canResult = self.can(outer1_22.CREATE_GUILD_EXPRESSIONS, guild);
      }
      obj.canManageGuildExpressions = canResult;
      obj.canViewAuditLog = self.can(outer1_22.VIEW_AUDIT_LOG, guild);
      obj.canViewAuditLogV2 = self.can(outer1_22.VIEW_AUDIT_LOG, guild);
      obj.canManageWebhooks = self.can(outer1_22.MANAGE_WEBHOOKS, guild);
      obj.canViewGuildAnalytics = self.can(outer1_22.VIEW_GUILD_ANALYTICS, guild);
      obj.canAccessMembersPage = self.canAccessMemberSafetyPage(guild);
      obj.isGuildAdmin = self.can(outer1_22.ADMINISTRATOR, guild);
      let tmp4 = null != currentUser;
      if (tmp4) {
        tmp4 = outer1_15(guild, currentUser);
      }
      obj.isOwner = tmp4;
      let tmp6 = null != currentUser;
      if (tmp6) {
        tmp6 = outer1_16(guild, currentUser);
      }
      obj.isOwnerWithRequiredMfaLevel = tmp6;
      obj.guild = guild;
      return obj;
    }
  };
  items[4] = {
    key: "canAccessMemberSafetyPage",
    value(id) {
      return outer1_2(outer1_3[22]).hasAny(outer1_31(id.id), outer1_23);
    }
  };
  items[5] = {
    key: "canAccessGuildSettings",
    value(id) {
      const obj = outer1_2(outer1_3[22]);
      return obj.hasAny(outer1_31(id.id), outer1_2(outer1_3[18]).VIEW_GUILD_SETTINGS);
    }
  };
  items[6] = {
    key: "canWithPartialContext",
    value(VIEW_CHANNEL, channelId) {
      const self = this;
      if ("channelId" in channelId) {
        if ("string" === typeof channelId.channelId) {
          let canResult = self.can(VIEW_CHANNEL, outer1_18.getChannel(channelId.channelId));
        }
        return canResult;
      }
      canResult = "guildId" in channelId;
      if (canResult) {
        canResult = "string" === typeof channelId.guildId;
      }
      if (canResult) {
        canResult = self.can(VIEW_CHANNEL, outer1_20.getGuild(channelId.guildId));
      }
    }
  };
  items[7] = {
    key: "can",
    value(arg0, arg1, arg2, arg3, arg4) {
      const tmp = outer1_36(arg1, arg2, arg3, arg4);
      return outer1_2(outer1_3[22]).has(tmp, arg0);
    }
  };
  items[8] = {
    key: "canBasicChannel",
    value(arg0, basicPermissions) {
      if ("basicPermissions" in basicPermissions) {
        let hasItem = outer1_1(outer1_3[23]).has(basicPermissions.basicPermissions, arg0);
        const obj3 = outer1_1(outer1_3[23]);
      } else {
        const obj = outer1_2(outer1_3[22]);
        const tmp8 = outer1_36(basicPermissions, arg2, arg3, arg4);
        hasItem = obj.has(tmp8, outer1_1(outer1_3[23]).asBigFlag(arg0));
        const obj2 = outer1_1(outer1_3[23]);
      }
      return hasItem;
    }
  };
  items[9] = {
    key: "computePermissions",
    value(arg0, arg1, arg2, arg3) {
      return outer1_36(arg0, arg1, arg2, arg3);
    }
  };
  items[10] = {
    key: "computeBasicPermissions",
    value(basicPermissions) {
      if ("basicPermissions" in basicPermissions) {
        basicPermissions = basicPermissions.basicPermissions;
      } else {
        basicPermissions = outer1_1(outer1_3[23]).asBasicFlag(outer1_36(basicPermissions));
        const obj = outer1_1(outer1_3[23]);
      }
      return basicPermissions;
    }
  };
  items[11] = {
    key: "canManageUser",
    value(VIEW_CHANNEL, id, channel) {
      const self = this;
      if (id instanceof outer1_17) {
        id = id.id;
      }
      if (outer1_15(channel, id)) {
        return false;
      } else {
        const currentUser = outer1_21.getCurrentUser();
        if (self.can(VIEW_CHANNEL, channel)) {
          if (null != currentUser) {
            const highestRole = outer1_2(outer1_3[18]).getHighestRole(channel, currentUser.id);
            const obj = outer1_2(outer1_3[18]);
          }
          const highestRole1 = outer1_2(outer1_3[18]).getHighestRole(channel, id);
          let isRoleHigherResult = null != currentUser;
          if (isRoleHigherResult) {
            const obj3 = outer1_2(outer1_3[18]);
            isRoleHigherResult = obj3.isRoleHigher(channel, currentUser.id, highestRole, highestRole1);
          }
          return isRoleHigherResult;
        } else {
          return false;
        }
      }
    }
  };
  items[12] = {
    key: "getHighestRole",
    value(guild) {
      const currentUser = outer1_21.getCurrentUser();
      let highestRole = null;
      if (null != currentUser) {
        highestRole = outer1_2(outer1_3[18]).getHighestRole(guild, currentUser.id);
        const obj = outer1_2(outer1_3[18]);
      }
      return highestRole;
    }
  };
  items[13] = {
    key: "isRoleHigher",
    value(id, highestRole, role) {
      const currentUser = outer1_21.getCurrentUser();
      const isViewingRolesResult = outer1_9.isViewingRoles(id.id);
      id = undefined;
      if (!isViewingRolesResult) {
        if (null != currentUser) {
          id = currentUser.id;
        }
      }
      return outer1_2(outer1_3[18]).isRoleHigher(id, id, highestRole, role);
    }
  };
  items[14] = {
    key: "canImpersonateRole",
    value(channel, id) {
      const self = this;
      const highestRole = this.getHighestRole(channel);
      let canResult = this.can(outer1_22.MANAGE_GUILD, channel);
      if (canResult) {
        canResult = self.can(outer1_22.MANAGE_ROLES, channel);
      }
      let isRoleHigherResult = self.isRoleHigher(channel, highestRole, id);
      if (canResult) {
        if (!isRoleHigherResult) {
          id = undefined;
          if (null != highestRole) {
            id = highestRole.id;
          }
          isRoleHigherResult = id.id === id;
        }
        canResult = isRoleHigherResult;
      }
      return canResult;
    }
  };
  items[15] = {
    key: "getGuildVersion",
    value(arg0) {
      let num = 0;
      if (null != outer1_26[arg0]) {
        num = tmp;
      }
      return num;
    }
  };
  items[16] = {
    key: "getChannelsVersion",
    value() {
      return outer1_27;
    }
  };
  return callback(PermissionStore, items);
})(require("initialize").Store);
tmp4.displayName = "PermissionStore";
tmp4 = new tmp4(require("dispatcher"), {
  BACKGROUND_SYNC: handleConnectionOpen,
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: handleConnectionOpen,
  CACHE_LOADED_LAZY: handleConnectionOpen,
  CONNECTION_CLOSED: function handleConnectionClose() {
    resetState();
  },
  GUILD_CREATE: handleGuild,
  GUILD_UPDATE: handleGuild,
  GUILD_DELETE: handleGuild,
  GUILD_MEMBER_ADD: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  CURRENT_USER_UPDATE: handleGuildMemberUpdate,
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = store.getChannel(channel.channel.id);
    if (null != channel) {
      if (!channel.isPrivate()) {
        const currentUser = authStore.getCurrentUser();
        const obj = { user: currentUser, context: channel };
        const permissions = importAll(3763).computePermissions(obj);
        if (dependencyMap[channel.id] === permissions) {
          return false;
        } else {
          dependencyMap[channel.id] = permissions;
          closure_27 = closure_27 + 1;
          updateGuildVersion(channel.getGuildId());
        }
        const obj2 = importAll(3763);
      }
    }
    return false;
  },
  THREAD_CREATE: handleThreadAction,
  THREAD_UPDATE: handleThreadAction,
  THREAD_LIST_SYNC: handleThreadAction,
  LOAD_THREADS_SUCCESS: handleThreadAction,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleThreadAction,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let flag = false;
    let iter2 = iter;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp3 = store;
        let channel = store.getChannel(iter2.value.id);
        let flag3 = flag;
        let tmp4 = tmp2;
        if (null != channel) {
          flag3 = flag;
          tmp4 = tmp2;
          if (!channel.isPrivate()) {
            let tmp5 = authStore;
            let tmp7 = importAll;
            let tmp8 = dependencyMap;
            let currentUser = authStore.getCurrentUser();
            let obj2 = importAll(3763);
            let obj = { user: currentUser, context: channel };
            let permissions = obj2.computePermissions(obj);
            let tmp10 = dependencyMap;
            flag3 = flag;
            tmp4 = permissions;
            if (dependencyMap[channel.id] !== permissions) {
              let tmp11 = dependencyMap;
              dependencyMap[channel.id] = permissions;
              let tmp12 = updateGuildVersion;
              let tmp13 = updateGuildVersion(channel.getGuildId());
              flag3 = true;
              tmp4 = permissions;
            }
          }
        }
        iter3 = tmp();
        flag = flag3;
        tmp2 = tmp4;
        iter2 = iter3;
        flag2 = flag3;
      } while (!iter3.done);
    }
    let tmp14 = flag2;
    if (flag2) {
      closure_27 = closure_27 + 1;
      tmp14 = flag2;
    }
    return tmp14;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(messages) {
    messages = messages.messages;
    return messages.some((thread) => null != thread.thread);
  },
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_MEMBER_UPDATE: function handleThreadMemberUpdate(userId) {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    let flag = id === userId.userId;
    if (flag) {
      updateGuildVersion(userId.guildId);
      flag = true;
    }
    return flag;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(guildId) {
    const tmp = !require(3765) /* doesThreadMembersActionAffectMe */.doesThreadMembersActionAffectMe(guildId);
    let flag = !tmp;
    if (!tmp) {
      updateGuildVersion(guildId.guildId);
      flag = true;
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    delete tmp2[tmp];
    closure_27 = closure_27 + 1;
    updateGuildVersion(channel.channel.guild_id);
    return false;
  },
  GUILD_ROLE_CREATE: handleGuildRole,
  GUILD_ROLE_UPDATE: handleGuildRole,
  GUILD_ROLE_DELETE: handleGuildRole,
  LOGOUT: resetState,
  STAGE_INSTANCE_CREATE: handleStageInstancesChanged,
  STAGE_INSTANCE_UPDATE: handleStageInstancesChanged,
  STAGE_INSTANCE_DELETE: handleStageInstancesChanged,
  IMPERSONATE_UPDATE: handleImpersonateUpdate,
  IMPERSONATE_STOP: handleImpersonateUpdate
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/PermissionStore.tsx");

export default tmp4;
