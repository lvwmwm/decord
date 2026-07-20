// Module ID: 3756
// Function ID: 28676
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3756 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  if (null != closure_24[guildId]) {
    return tmp;
  } else {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      return importAll(dependencyMap[18]).NONE;
    } else {
      const guild = guild.getGuild(guildId);
      if (null == guild) {
        let NONE = importAll(dependencyMap[18]).NONE;
      } else {
        let obj = importAll(dependencyMap[18]);
        obj = { user: currentUser, context: guild, checkElevated: flag };
        NONE = obj.computePermissions(obj);
        closure_24[guildId] = NONE;
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
    return importAll(dependencyMap[18]).NONE;
  } else {
    const channel = store.getChannel(id);
    if (null == channel) {
      return importAll(dependencyMap[18]).NONE;
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
          let obj = importDefault(dependencyMap[19]);
          if (obj.isEmpty(channel.permissionOverwrites)) {
            if (null != guildId) {
              let permissions = _getGuildPermissions(guildId);
            }
            return permissions;
          }
        }
      }
      obj = { user: currentUser, context: channel, checkElevated: flag };
      permissions = importAll(dependencyMap[18]).computePermissions(obj);
      const obj2 = importAll(dependencyMap[18]);
    }
  }
}
function _getChannelPermissions(id) {
  let tmp = closure_25[id];
  if (null == tmp) {
    const tmp4 = getUncachedChannelPermissions(id, flag);
    closure_25[id] = tmp4;
    tmp = tmp4;
  }
  return tmp;
}
function updateGuildVersion(guildId) {
  if (null != guildId) {
    let num = 0;
    if (null != closure_26[guildId]) {
      num = tmp2;
    }
    closure_26[guildId] = num + 1;
    const tmp = closure_26;
  }
}
function rebuildPermissions() {
  let closure_24 = {};
  let closure_25 = {};
  for (const key10005 in closure_26) {
    let tmp = key10005;
    let tmp2 = closure_26;
    closure_26[key10005] = closure_26[key10005] + 1;
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
  delete r0[r2];
  const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(guildId);
  const item = importDefault(dependencyMap[19]).forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete r1[r0];
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
    let obj = importAll(dependencyMap[18]);
    obj = { user: currentUser, context: channel };
    const permissions = obj.computePermissions(obj);
    if (permissions === closure_25[channel.id]) {
      return false;
    } else {
      closure_25[channel.id] = permissions;
      closure_27 = closure_27 + 1;
    }
  }
}
function handleImpersonateUpdate(guildId) {
  guildId = guildId.guildId;
  delete r0[r2];
  const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(guildId);
  const item = importDefault(dependencyMap[19]).forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete r1[r0];
  });
  closure_27 = closure_27 + 1;
  updateGuildVersion(guildId);
}
function _computePermissions(channel, overwrites, roles, excludeGuildPermissions) {
  let NONE = importAll(dependencyMap[18]).NONE;
  if (channel instanceof closure_13) {
    if (set.has(channel.type)) {
      channel = store.getChannel(channel.parent_id);
      if (null == channel) {
        let NONE2 = importAll(dependencyMap[18]).NONE;
      } else {
        const obj4 = importAll(dependencyMap[18]);
        const tmp16 = _computePermissions(channel, overwrites, roles, excludeGuildPermissions);
        NONE2 = obj4.applyThreadPermissions(channel, tmp16, closure_12.hasJoined(channel.id), closure_19.isCurrentUserGuest(channel.guild_id));
        const hasJoinedResult = closure_12.hasJoined(channel.id);
      }
      return NONE2;
    } else {
      NONE = _getChannelPermissions(channel.id);
    }
  } else {
    let obj = overwrites(dependencyMap[21]);
    if (obj.isGuildRecord(channel)) {
      NONE = _getGuildPermissions(channel.id);
    }
  }
  if (undefined === overwrites) {
    return NONE;
  }
  obj = { user: authStore.getCurrentUser(), context: channel, overwrites, roles, checkElevated: true, excludeGuildPermissions };
  NONE = importAll(dependencyMap[18]).computePermissions(obj);
}
function resetState() {
  let closure_25 = {};
  let closure_24 = {};
  let closure_26 = {};
  let closure_27 = 0;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
({ ChannelRecordBase: closure_13, THREAD_CHANNEL_TYPES: closure_14 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
({ isGuildOwner: closure_15, isGuildOwnerWithRequiredMfaLevel: closure_16 } = arg1(dependencyMap[10]));
let closure_17 = importDefault(dependencyMap[11]);
let closure_18 = importDefault(dependencyMap[12]);
let closure_19 = importDefault(dependencyMap[13]);
let closure_20 = importDefault(dependencyMap[14]);
let closure_21 = importDefault(dependencyMap[15]);
const Permissions = arg1(dependencyMap[16]).Permissions;
let closure_23 = arg1(dependencyMap[17]).MemberSafetyPagePermissions;
let closure_24 = {};
let closure_25 = {};
let closure_26 = {};
let closure_27 = 0;
let tmp4 = (Store) => {
  class PermissionStore {
    constructor() {
      self = this;
      tmp = closure_4(this, PermissionStore);
      obj = closure_7(PermissionStore);
      tmp2 = closure_6;
      if (closure_28()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PermissionStore;
  callback2(PermissionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_18, closure_19, closure_20, closure_9, closure_12, closure_10, closure_11, closure_21);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "getChannelPermissions",
    value(type) {
      if (set.has(type.type)) {
        let tmp2 = callback9(type.id);
      } else {
        tmp2 = callback10(type.id);
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildPermissions",
    value(id) {
      return callback8(id.id);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildPermissionProps",
    value(guild) {
      const self = this;
      const currentUser = authStore.getCurrentUser();
      const obj = { canManageGuild: this.can(constants.MANAGE_GUILD, guild), canManageChannels: this.can(constants.MANAGE_CHANNELS, guild), canManageRoles: this.can(constants.MANAGE_ROLES, guild), canManageBans: this.can(constants.BAN_MEMBERS, guild), canManageNicknames: this.can(constants.MANAGE_NICKNAMES, guild) };
      let canResult = this.can(constants.MANAGE_GUILD_EXPRESSIONS, guild);
      if (!canResult) {
        canResult = self.can(constants.CREATE_GUILD_EXPRESSIONS, guild);
      }
      obj.canManageGuildExpressions = canResult;
      obj.canViewAuditLog = self.can(constants.VIEW_AUDIT_LOG, guild);
      obj.canViewAuditLogV2 = self.can(constants.VIEW_AUDIT_LOG, guild);
      obj.canManageWebhooks = self.can(constants.MANAGE_WEBHOOKS, guild);
      obj.canViewGuildAnalytics = self.can(constants.VIEW_GUILD_ANALYTICS, guild);
      obj.canAccessMembersPage = self.canAccessMemberSafetyPage(guild);
      obj.isGuildAdmin = self.can(constants.ADMINISTRATOR, guild);
      let tmp4 = null != currentUser;
      if (tmp4) {
        tmp4 = callback5(guild, currentUser);
      }
      obj.isOwner = tmp4;
      let tmp6 = null != currentUser;
      if (tmp6) {
        tmp6 = callback6(guild, currentUser);
      }
      obj.isOwnerWithRequiredMfaLevel = tmp6;
      obj.guild = guild;
      return obj;
    }
  };
  items[4] = {
    key: "canAccessMemberSafetyPage",
    value(id) {
      return callback2(closure_3[22]).hasAny(callback8(id.id), closure_23);
    }
  };
  items[5] = {
    key: "canAccessGuildSettings",
    value(id) {
      const obj = callback2(closure_3[22]);
      return obj.hasAny(callback8(id.id), callback2(closure_3[18]).VIEW_GUILD_SETTINGS);
    }
  };
  items[6] = {
    key: "canWithPartialContext",
    value(VIEW_CHANNEL, channelId) {
      const self = this;
      if ("channelId" in channelId) {
        if ("string" === typeof channelId.channelId) {
          let canResult = self.can(VIEW_CHANNEL, channel.getChannel(channelId.channelId));
        }
        return canResult;
      }
      canResult = "guildId" in channelId;
      if (canResult) {
        canResult = "string" === typeof channelId.guildId;
      }
      if (canResult) {
        canResult = self.can(VIEW_CHANNEL, guild.getGuild(channelId.guildId));
      }
    }
  };
  items[7] = {
    key: "can",
    value(arg0, arg1, arg2, arg3, arg4) {
      const tmp = callback11(arg1, arg2, arg3, arg4);
      return callback2(closure_3[22]).has(tmp, arg0);
    }
  };
  items[8] = {
    key: "canBasicChannel",
    value(arg0, basicPermissions) {
      if ("basicPermissions" in basicPermissions) {
        let hasItem = callback(closure_3[23]).has(basicPermissions.basicPermissions, arg0);
        const obj3 = callback(closure_3[23]);
      } else {
        const obj = callback2(closure_3[22]);
        const tmp8 = callback11(basicPermissions, arg2, arg3, arg4);
        hasItem = obj.has(tmp8, callback(closure_3[23]).asBigFlag(arg0));
        const obj2 = callback(closure_3[23]);
      }
      return hasItem;
    }
  };
  items[9] = {
    key: "computePermissions",
    value(arg0, arg1, arg2, arg3) {
      return callback11(arg0, arg1, arg2, arg3);
    }
  };
  items[10] = {
    key: "computeBasicPermissions",
    value(basicPermissions) {
      if ("basicPermissions" in basicPermissions) {
        basicPermissions = basicPermissions.basicPermissions;
      } else {
        basicPermissions = callback(closure_3[23]).asBasicFlag(callback11(basicPermissions));
        const obj = callback(closure_3[23]);
      }
      return basicPermissions;
    }
  };
  items[11] = {
    key: "canManageUser",
    value(VIEW_CHANNEL, id, channel) {
      const self = this;
      if (id instanceof closure_17) {
        id = id.id;
      }
      if (callback5(channel, id)) {
        return false;
      } else {
        const currentUser = authStore.getCurrentUser();
        if (self.can(VIEW_CHANNEL, channel)) {
          if (null != currentUser) {
            const highestRole = callback2(closure_3[18]).getHighestRole(channel, currentUser.id);
            const obj = callback2(closure_3[18]);
          }
          const highestRole1 = callback2(closure_3[18]).getHighestRole(channel, id);
          let isRoleHigherResult = null != currentUser;
          if (isRoleHigherResult) {
            const obj3 = callback2(closure_3[18]);
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
      const currentUser = authStore.getCurrentUser();
      let highestRole = null;
      if (null != currentUser) {
        highestRole = callback2(closure_3[18]).getHighestRole(guild, currentUser.id);
        const obj = callback2(closure_3[18]);
      }
      return highestRole;
    }
  };
  items[13] = {
    key: "isRoleHigher",
    value(id, highestRole, role) {
      const currentUser = authStore.getCurrentUser();
      const isViewingRolesResult = viewingRoles.isViewingRoles(id.id);
      id = undefined;
      if (!isViewingRolesResult) {
        if (null != currentUser) {
          id = currentUser.id;
        }
      }
      return callback2(closure_3[18]).isRoleHigher(id, id, highestRole, role);
    }
  };
  items[14] = {
    key: "canImpersonateRole",
    value(channel, id) {
      const self = this;
      const highestRole = this.getHighestRole(channel);
      let canResult = this.can(constants.MANAGE_GUILD, channel);
      if (canResult) {
        canResult = self.can(constants.MANAGE_ROLES, channel);
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
      if (null != closure_26[arg0]) {
        num = tmp;
      }
      return num;
    }
  };
  items[16] = {
    key: "getChannelsVersion",
    value() {
      return closure_27;
    }
  };
  return callback(PermissionStore, items);
}(importDefault(dependencyMap[24]).Store);
tmp4.displayName = "PermissionStore";
tmp4 = new tmp4(importDefault(dependencyMap[25]), {
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
        const permissions = importAll(dependencyMap[18]).computePermissions(obj);
        if (closure_25[channel.id] === permissions) {
          return false;
        } else {
          closure_25[channel.id] = permissions;
          closure_27 = closure_27 + 1;
          updateGuildVersion(channel.getGuildId());
        }
        const obj2 = importAll(dependencyMap[18]);
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
        let tmp3 = closure_18;
        let channel = closure_18.getChannel(iter2.value.id);
        let flag3 = flag;
        let tmp4 = tmp2;
        if (null != channel) {
          flag3 = flag;
          tmp4 = tmp2;
          if (!channel.isPrivate()) {
            let tmp5 = closure_21;
            let tmp7 = closure_2;
            let tmp8 = closure_3;
            let currentUser = closure_21.getCurrentUser();
            let obj2 = closure_2(closure_3[18]);
            let obj = { user: currentUser, context: channel };
            let permissions = obj2.computePermissions(obj);
            let tmp10 = closure_25;
            flag3 = flag;
            tmp4 = permissions;
            if (closure_25[channel.id] !== permissions) {
              let tmp11 = closure_25;
              closure_25[channel.id] = permissions;
              let tmp12 = closure_34;
              let tmp13 = closure_34(channel.getGuildId());
              flag3 = true;
              tmp4 = permissions;
            }
          }
        }
        iter3 = tmp();
        flag = flag3;
        let tmp2 = tmp4;
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
    const tmp = !arg1(dependencyMap[20]).doesThreadMembersActionAffectMe(guildId);
    let flag = !tmp;
    if (!tmp) {
      updateGuildVersion(guildId.guildId);
      flag = true;
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    delete r3[r2];
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
const obj = {
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
        const permissions = importAll(dependencyMap[18]).computePermissions(obj);
        if (closure_25[channel.id] === permissions) {
          return false;
        } else {
          closure_25[channel.id] = permissions;
          closure_27 = closure_27 + 1;
          updateGuildVersion(channel.getGuildId());
        }
        const obj2 = importAll(dependencyMap[18]);
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
        let tmp3 = closure_18;
        let channel = closure_18.getChannel(iter2.value.id);
        let flag3 = flag;
        let tmp4 = tmp2;
        if (null != channel) {
          flag3 = flag;
          tmp4 = tmp2;
          if (!channel.isPrivate()) {
            let tmp5 = closure_21;
            let tmp7 = closure_2;
            let tmp8 = closure_3;
            let currentUser = closure_21.getCurrentUser();
            let obj2 = closure_2(closure_3[18]);
            let obj = { user: currentUser, context: channel };
            let permissions = obj2.computePermissions(obj);
            let tmp10 = closure_25;
            flag3 = flag;
            tmp4 = permissions;
            if (closure_25[channel.id] !== permissions) {
              let tmp11 = closure_25;
              closure_25[channel.id] = permissions;
              let tmp12 = closure_34;
              let tmp13 = closure_34(channel.getGuildId());
              flag3 = true;
              tmp4 = permissions;
            }
          }
        }
        iter3 = tmp();
        flag = flag3;
        let tmp2 = tmp4;
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
    const tmp = !arg1(dependencyMap[20]).doesThreadMembersActionAffectMe(guildId);
    let flag = !tmp;
    if (!tmp) {
      updateGuildVersion(guildId.guildId);
      flag = true;
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    delete r3[r2];
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
};
const tmp3 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("stores/PermissionStore.tsx");

export default tmp4;
