// Module ID: 3761
// Function ID: 28810
// Name: calculateElevatedPermissions
// Dependencies: []
// Exports: areChannelsLocked, canEveryone, canEveryoneRole, canManageACategory, getGuildVisualOwnerId, getHighestHoistedRole, getHighestRole, isRoleHigher

// Module 3761 (calculateElevatedPermissions)
import deserializeResult from "module_0";

function calculateElevatedPermissions(applyResult, guild, id, checkElevated) {
  let flag = checkElevated;
  if (checkElevated === undefined) {
    flag = true;
  }
  if (flag) {
    flag = guild.mfaLevel === constants.ELEVATED;
  }
  if (flag) {
    flag = id === id.getId();
  }
  let tmp5 = applyResult;
  if (flag) {
    const currentUser = authStore2.getCurrentUser();
    let removeResult = applyResult;
    if (!tmp9) {
      removeResult = importAll(dependencyMap[13]).remove(applyResult, closure_19);
      const obj = importAll(dependencyMap[13]);
    }
    tmp5 = removeResult;
    const tmp9 = null != currentUser && currentUser.mfaEnabled;
  }
  return tmp5;
}
function applyOverwrites(id, member, deserializeResult, overwrites) {
  let addResult = deserializeResult;
  if (null != overwrites[id]) {
    const obj = importAll(dependencyMap[13]);
    const removeResult = importAll(dependencyMap[13]).remove(deserializeResult, tmp.deny);
    addResult = importAll(dependencyMap[13]).add(removeResult, tmp.allow);
    const obj2 = importAll(dependencyMap[13]);
  }
  let found1 = addResult;
  if (null != member) {
    let tmp12 = deserializeResult;
    let num2 = 0;
    let tmp13 = deserializeResult;
    let tmp14 = deserializeResult;
    let tmp15 = deserializeResult;
    if (0 < member.roles.length) {
      do {
        let tmp7 = overwrites[member.roles[num2]];
        let addResult1 = tmp12;
        let addResult2 = tmp13;
        if (null != tmp7) {
          let tmp10 = closure_2;
          let tmp11 = closure_3;
          let obj3 = closure_2(closure_3[13]);
          addResult1 = obj3.add(tmp12, tmp7.allow);
          let obj4 = closure_2(closure_3[13]);
          addResult2 = obj4.add(tmp13, tmp7.deny);
        }
        num2 = num2 + 1;
        tmp12 = addResult1;
        tmp13 = addResult2;
        tmp14 = addResult1;
        tmp15 = addResult2;
      } while (num2 < member.roles.length);
    }
    const obj5 = importAll(dependencyMap[13]);
    const removeResult1 = importAll(dependencyMap[13]).remove(addResult, tmp15);
    const addResult3 = importAll(dependencyMap[13]).add(removeResult1, tmp14);
    let addResult4 = addResult3;
    if (null != overwrites[member.userId]) {
      const obj7 = importAll(dependencyMap[13]);
      const removeResult2 = importAll(dependencyMap[13]).remove(addResult3, tmp20.deny);
      addResult4 = importAll(dependencyMap[13]).add(removeResult2, tmp20.allow);
      const obj8 = importAll(dependencyMap[13]);
    }
    const obj6 = importAll(dependencyMap[13]);
    const hasItem = importAll(dependencyMap[13]).has(addResult4, Permissions.ADMINISTRATOR);
    const obj9 = importAll(dependencyMap[13]);
    let result = member(dependencyMap[15]).hasAutomodQuarantinedProfile(member);
    if (result) {
      result = !hasItem;
    }
    let found = addResult4;
    if (result) {
      found = importAll(dependencyMap[13]).filter(addResult4, closure_29);
      const arr = importAll(dependencyMap[13]);
    }
    const obj10 = member(dependencyMap[15]);
    const obj11 = member(dependencyMap[16]);
    found1 = found;
    if (tmp38) {
      found1 = importAll(dependencyMap[13]).filter(found, closure_28);
      const arr2 = importAll(dependencyMap[13]);
    }
    const tmp38 = member(dependencyMap[16]).isMemberCommunicationDisabled(member) && !hasItem;
  }
  return found1;
}
function computePermissionsForMember(excludeGuildPermissions) {
  let checkElevated;
  let guild;
  let member;
  let overwrites;
  let roles;
  let userId;
  ({ userId, member, guild, overwrites, roles, checkElevated } = excludeGuildPermissions);
  if (checkElevated === undefined) {
    checkElevated = true;
  }
  let flag = excludeGuildPermissions.excludeGuildPermissions;
  if (flag === undefined) {
    flag = false;
  }
  let lurkerPermissionsMask = excludeGuildPermissions.lurkerPermissionsMask;
  if (lurkerPermissionsMask === undefined) {
    lurkerPermissionsMask = closure_26;
  }
  if (flag) {
    return applyOverwrites(guild.id, member, deserializeResult, overwrites);
  } else {
    if (null != roles) {
      const obj = {};
      const merged = Object.assign(store2.getUnsafeMutableRoles(guild.id));
      const merged1 = Object.assign(roles);
      let unsafeMutableRoles = obj;
    } else {
      unsafeMutableRoles = store2.getUnsafeMutableRoles(guild.id);
    }
    const tmp12 = null != unsafeMutableRoles[closure_9(undefined, guild)] ? unsafeMutableRoles[closure_9(undefined, guild)].permissions : combineResult;
    let tmp13 = tmp12;
    if (null != member) {
      let num = 0;
      let tmp14 = tmp12;
      tmp13 = tmp12;
      if (0 < member.roles.length) {
        do {
          let tmp15 = unsafeMutableRoles[member.roles[num]];
          let addResult = tmp14;
          if (undefined !== tmp15) {
            let tmp17 = closure_2;
            let tmp18 = closure_3;
            let obj2 = closure_2(closure_3[13]);
            addResult = obj2.add(tmp14, tmp15.permissions);
          }
          num = num + 1;
          tmp14 = addResult;
          tmp13 = addResult;
        } while (num < member.roles.length);
      }
    }
    if (obj3.has(tmp13, Permissions.ADMINISTRATOR)) {
      let tmp27 = applyResult;
    } else {
      tmp27 = applyOverwrites(guild.id, member, tmp22, overwrites);
    }
    let isLurkingResult = lurking.isLurking(guild.id);
    if (!isLurkingResult) {
      isLurkingResult = null != member && member.isPending;
      const tmp30 = null != member && member.isPending;
    }
    let found = tmp27;
    if (isLurkingResult) {
      found = importAll(dependencyMap[13]).filter(tmp27, lurkerPermissionsMask);
      const arr = importAll(dependencyMap[13]);
    }
    let found1 = found;
    if (authStore.isCurrentUserGuest(guild.id)) {
      found1 = importAll(dependencyMap[13]).filter(found, closure_27);
      const arr2 = importAll(dependencyMap[13]);
    }
    return calculateElevatedPermissions(found1, guild, userId, checkElevated);
  }
}
function computePermissions(excludeGuildPermissions) {
  let checkElevated;
  let context;
  let overwrites;
  let roles;
  let user;
  ({ user, context, overwrites, roles, checkElevated } = excludeGuildPermissions);
  if (checkElevated === undefined) {
    checkElevated = true;
  }
  let flag = excludeGuildPermissions.excludeGuildPermissions;
  if (flag === undefined) {
    flag = false;
  }
  if (null == user) {
    return deserializeResult;
  } else {
    let id = user;
    if ("string" !== typeof user) {
      id = user.id;
    }
    let tmp = closure_26;
    if (context instanceof closure_8) {
      if (context.isScheduledForDeletion()) {
        return deserializeResult;
      } else if (set.has(context.type)) {
        const channel = store.getChannel(context.parent_id);
        if (null != channel) {
          if (!channel.isScheduledForDeletion()) {
            const currentUser = authStore2.getCurrentUser();
            id = undefined;
            if (null != currentUser) {
              id = currentUser.id;
            }
            let hasJoinedResult = id === id;
            if (hasJoinedResult) {
              hasJoinedResult = closure_6.hasJoined(context.id);
            }
            let obj = { user, context: channel, overwrites, roles, checkElevated, excludeGuildPermissions: flag };
            return applyThreadPermissions(context, computePermissions(obj), hasJoinedResult, authStore.isCurrentUserGuest(context.guild_id));
          }
        }
        return deserializeResult;
      } else {
        const lurkerPermissionsAllowList = context.computeLurkerPermissionsAllowList();
        if (null != lurkerPermissionsAllowList) {
          tmp = lurkerPermissionsAllowList;
        }
        if (null != overwrites) {
          obj = {};
          const merged = Object.assign(context.permissionOverwrites);
          const merged1 = Object.assign(overwrites);
          let permissionOverwrites = obj;
        } else {
          permissionOverwrites = context.permissionOverwrites;
        }
        const guildId = context.getGuildId();
        let guild = null;
        if (null != guildId) {
          guild = store3.getGuild(guildId);
        }
        let tmp3 = guild;
        obj = permissionOverwrites;
        let tmp4 = tmp;
      }
    } else {
      obj = overwrites;
      if (null == overwrites) {
        obj = {};
      }
      tmp3 = context;
      tmp4 = tmp;
    }
    if (null == tmp3) {
      let tmp23 = deserializeResult;
    } else {
      const currentUser1 = authStore2.getCurrentUser();
      let id1;
      if (null != currentUser1) {
        id1 = currentUser1.id;
      }
      if (id !== id1) {
        if (callback(tmp3, id)) {
          tmp23 = calculateElevatedPermissions(applyResult, tmp3, id, checkElevated);
        }
      }
      const obj1 = { userId: id, member: authStore.getMember(tmp3.id, id), guild: tmp3, overwrites: obj, roles, checkElevated, excludeGuildPermissions: flag, lurkerPermissionsMask: tmp4 };
      tmp23 = computePermissionsForMember(obj1);
    }
    return tmp23;
  }
}
function applyThreadPermissions(context, permissionsForRoles, hasJoinedResult, closure_14) {
  if (context.type === constants2.MEDIA_THREAD) {
    let combineResult = importAll(dependencyMap[13]).combine(Permissions.READ_MESSAGE_HISTORY, Permissions.VIEW_CHANNEL);
    const obj6 = importAll(dependencyMap[13]);
  } else {
    if (context.type === constants2.PRIVATE_THREAD) {
      if (!hasJoinedResult) {
        if (!closure_14) {
          if (!obj.has(permissionsForRoles, Permissions.MANAGE_THREADS)) {
            combineResult = deserializeResult;
          }
          const obj = importAll(dependencyMap[13]);
        }
      }
    }
    let tmp9;
    if (!obj2.has(permissionsForRoles, Permissions.SEND_MESSAGES_IN_THREADS)) {
      importAll(dependencyMap[13]).remove(permissionsForRoles, Permissions.SEND_MESSAGES);
      const obj3 = importAll(dependencyMap[13]);
    }
    if (context.isLockedThread()) {
      if (!obj4.has(permissionsForRoles, Permissions.MANAGE_THREADS)) {
        let removeResult1 = importAll(dependencyMap[13]).remove(permissionsForRoles, Permissions.SEND_MESSAGES);
        const obj5 = importAll(dependencyMap[13]);
      }
      const obj4 = importAll(dependencyMap[13]);
    }
    tmp9 = importAll(dependencyMap[13]);
    removeResult1 = tmp9.combine(permissionsForRoles, Permissions.SEND_MESSAGES);
    const obj2 = importAll(dependencyMap[13]);
  }
  return combineResult;
}
function makeEveryoneOverwrite(guild_id) {
  return { id: guild_id, type: arg1(dependencyMap[19]).PermissionOverwriteType.ROLE, allow: deserializeResult, deny: deserializeResult };
}
function can(VIEW_CHANNEL, channel, arg2, arg3, arg4) {
  let context;
  let excludeGuildPermissions;
  let overwrites;
  let permission;
  let roles;
  let user;
  ({ permission, user, context, overwrites, roles, excludeGuildPermissions } = VIEW_CHANNEL);
  return importAll(dependencyMap[13]).has(computePermissions({ user, context, overwrites, roles, checkElevated: true, excludeGuildPermissions }), permission);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ THREAD_CHANNEL_TYPES: closure_7, ChannelRecordBase: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ getGuildEveryoneRoleId: closure_9, isGuildOwner: closure_10 } = arg1(dependencyMap[4]));
const hasPermission = arg1(dependencyMap[5]).hasPermission;
let closure_12 = importDefault(dependencyMap[6]);
let closure_13 = importDefault(dependencyMap[7]);
let closure_14 = importDefault(dependencyMap[8]);
let closure_15 = importDefault(dependencyMap[9]);
let closure_16 = importDefault(dependencyMap[10]);
let closure_17 = importDefault(dependencyMap[11]);
const tmp4 = arg1(dependencyMap[12]);
const Permissions = tmp4.Permissions;
({ ElevatedPermissions: closure_19, MFALevels: closure_20, ChannelTypes: closure_21, EMPTY_STRING_SNOWFLAKE_ID: closure_22 } = tmp4);
const tmp3 = arg1(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[13]);
const importAllResult1 = importAll(dependencyMap[13]);
const items = [...importDefault(dependencyMap[14]).values(Permissions)];
const applyResult = importAllResult1.combine.apply(items);
const importDefaultResult = importDefault(dependencyMap[14]);
const combineResult = importAll(dependencyMap[13]).combine(Permissions.CREATE_INSTANT_INVITE, Permissions.CHANGE_NICKNAME, Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.READ_MESSAGE_HISTORY, Permissions.MENTION_EVERYONE, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_STICKERS, Permissions.ADD_REACTIONS, Permissions.CREATE_PUBLIC_THREADS, Permissions.CREATE_PRIVATE_THREADS, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.SEND_POLLS, Permissions.CONNECT, Permissions.SPEAK, Permissions.USE_VAD, Permissions.STREAM, Permissions.USE_EMBEDDED_ACTIVITIES, Permissions.USE_SOUNDBOARD, Permissions.REQUEST_TO_SPEAK, Permissions.USE_APPLICATION_COMMANDS, Permissions.CREATE_GUILD_EXPRESSIONS, Permissions.CREATE_EVENTS, Permissions.USE_EXTERNAL_APPS);
const importAllResult2 = importAll(dependencyMap[13]);
let closure_26 = importAll(dependencyMap[13]).combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY);
const importAllResult3 = importAll(dependencyMap[13]);
let closure_27 = importAll(dependencyMap[13]).combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES, Permissions.CONNECT, Permissions.SPEAK, Permissions.STREAM, Permissions.USE_EMBEDDED_ACTIVITIES, Permissions.USE_EXTERNAL_APPS, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_SOUNDS, Permissions.USE_EXTERNAL_STICKERS, Permissions.USE_SOUNDBOARD, Permissions.USE_VAD, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.ADD_REACTIONS);
const importAllResult4 = importAll(dependencyMap[13]);
let closure_28 = importAll(dependencyMap[13]).combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY);
const importAllResult5 = importAll(dependencyMap[13]);
let closure_29 = importAll(dependencyMap[13]).combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY, Permissions.CHANGE_NICKNAME);
const importAllResult6 = importAll(dependencyMap[13]);
const importAllResult7 = importAll(dependencyMap[13]);
const combineResult1 = importAll(dependencyMap[13]).combine(Permissions.MANAGE_GUILD, Permissions.MANAGE_ROLES, Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.MANAGE_NICKNAMES, Permissions.CREATE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MANAGE_WEBHOOKS, Permissions.VIEW_AUDIT_LOG, Permissions.VIEW_GUILD_ANALYTICS);
const result = arg1(dependencyMap[20]).fileFinishedImporting("utils/PermissionUtils.tsx");
function computePermissionsForRoles(excludeGuildPermissions) {
  let checkElevated;
  let context;
  let forceRoles;
  let overwrites;
  let roles;
  ({ forceRoles, context, overwrites, roles, checkElevated } = excludeGuildPermissions);
  if (checkElevated === undefined) {
    checkElevated = true;
  }
  excludeGuildPermissions = excludeGuildPermissions.excludeGuildPermissions;
  let tmp = closure_26;
  if (context instanceof closure_8) {
    if (context.isScheduledForDeletion()) {
      return deserializeResult;
    } else if (set.has(context.type)) {
      const channel = store.getChannel(context.parent_id);
      if (null == channel) {
        let tmp23 = deserializeResult;
      } else {
        let obj = { forceRoles, context: channel, overwrites, roles, checkElevated, excludeGuildPermissions };
        tmp23 = applyThreadPermissions(context, computePermissionsForRoles(obj), false, false);
      }
      return tmp23;
    } else {
      const lurkerPermissionsAllowList = context.computeLurkerPermissionsAllowList();
      if (null != lurkerPermissionsAllowList) {
        tmp = lurkerPermissionsAllowList;
      }
      if (null != overwrites) {
        obj = {};
        const merged = Object.assign(context.permissionOverwrites);
        const merged1 = Object.assign(overwrites);
        let permissionOverwrites = obj;
      } else {
        permissionOverwrites = context.permissionOverwrites;
      }
      const guildId = context.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = store3.getGuild(guildId);
      }
      let tmp3 = guild;
      obj = permissionOverwrites;
      let tmp4 = tmp;
    }
  } else {
    obj = overwrites;
    if (null == overwrites) {
      obj = {};
    }
    tmp3 = context;
    tmp4 = tmp;
  }
  if (null == tmp3) {
    return deserializeResult;
  } else {
    const obj1 = { userId: closure_22, guildId: tmp3.id, roles: importDefault(dependencyMap[17]).keys(forceRoles) };
    const _Date = Date;
    const date = new Date();
    obj1.joinedAt = date.toISOString();
    obj1.communicationDisabledUntil = null;
    const obj2 = { userId: closure_22, member: obj1, guild: tmp3, overwrites: obj, roles, checkElevated, excludeGuildPermissions, lurkerPermissionsMask: tmp4 };
    return computePermissionsForMember(obj2);
  }
}

export const NONE = deserializeResult;
export const ALL = applyResult;
export const DEFAULT = combineResult;
export const VIEW_GUILD_SETTINGS = combineResult1;
export { computePermissionsForRoles };
export { computePermissions };
export { applyThreadPermissions };
export const areChannelsLocked = function areChannelsLocked(closure_21, channel) {
  if (set.has(closure_21.type)) {
    return true;
  } else {
    const guild_id = closure_21.guild_id;
    if (null != channel) {
      if (null != guild_id) {
        if (guild_id === channel.guild_id) {
          let obj = {};
          const merged = Object.assign(closure_21.permissionOverwrites);
          channel = obj;
          obj = {};
          const merged1 = Object.assign(channel.permissionOverwrites);
          const importDefault = obj;
          if (null == obj[guild_id]) {
            obj[guild_id] = makeEveryoneOverwrite(guild_id);
          }
          if (null == obj[guild_id]) {
            obj[guild_id] = makeEveryoneOverwrite(guild_id);
          }
          const _Object = Object;
          const _Object2 = Object;
          let tmp5 = Object.keys(obj).length === Object.keys(obj).length;
          if (tmp5) {
            const _Object3 = Object;
            const keys = Object.keys(obj);
            tmp5 = !keys.some((arg0) => {
              let tmp3 = null == tmp2;
              if (!tmp3) {
                const obj = callback(closure_3[13]);
                tmp3 = !obj.equals(tmp2.deny, tmp.deny);
              }
              if (!tmp3) {
                tmp3 = !callback(closure_3[13]).equals(tmp2.allow, tmp.allow);
                const obj2 = callback(closure_3[13]);
              }
              return tmp3;
            });
          }
          return tmp5;
        }
      }
    }
    return false;
  }
};
export const getGuildVisualOwnerId = function getGuildVisualOwnerId(guild) {
  let tmp;
  if (!obj.some(store2.getUnsafeMutableRoles(guild.id), (hoist) => {
    hoist = hoist.hoist;
    if (hoist) {
      hoist = callback(hoist, constants.ADMINISTRATOR);
    }
    return hoist;
  })) {
    const ownerId = guild.ownerId;
    let tmp3;
    if (null != ownerId) {
      tmp3 = ownerId;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isRoleHigher = function isRoleHigher(guild, id, highestRole, role) {
  let tmp = null == id;
  if (!tmp) {
    tmp = !callback(guild, id);
  }
  let tmp4 = !tmp;
  if (tmp) {
    let tmp5 = null != highestRole;
    if (tmp5) {
      let doesRoleSortHigherResult = null == role;
      if (!doesRoleSortHigherResult) {
        doesRoleSortHigherResult = id(dependencyMap[18]).doesRoleSortHigher(highestRole, role);
        const obj = id(dependencyMap[18]);
      }
      tmp5 = doesRoleSortHigherResult;
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
export const getHighestRole = function getHighestRole(guild, id) {
  const member = authStore.getMember(guild.id, id);
  id = member;
  if (null != member) {
    const sortedRoles = store2.getSortedRoles(guild.id);
    return sortedRoles.find((id) => {
      const roles = member.roles;
      return roles.includes(id.id);
    });
  }
};
export const getHighestHoistedRole = function getHighestHoistedRole(id, hoistRoleId) {
  let role = null;
  if (null != hoistRoleId.hoistRoleId) {
    role = store2.getRole(id.id, hoistRoleId.hoistRoleId);
  }
  return role;
};
export { makeEveryoneOverwrite };
export const canManageACategory = function canManageACategory(currentUser, guild, _categories) {
  guild = currentUser;
  const tmp = !can({ permission: Permissions.MANAGE_CHANNELS, user: currentUser, context: guild });
  let someResult = !tmp;
  if (tmp) {
    someResult = _categories.some((channel) => {
      channel = channel.channel;
      let tmp = "null" !== channel.id;
      if (tmp) {
        const obj = { permission: constants.MANAGE_CHANNELS, user: channel, context: channel };
        tmp = callback(obj);
      }
      return tmp;
    });
  }
  return someResult;
};
export { can };
export const ALLOW = "ALLOW";
export const DENY = "DENY";
export const PASSTHROUGH = "PASSTHROUGH";
export const canEveryoneRole = function canEveryoneRole(VIEW_CHANNEL, channel) {
  let tmp = channel;
  if (channel instanceof closure_8) {
    if (channel.type === constants2.PRIVATE_THREAD) {
      return false;
    } else {
      if (set.has(channel.type)) {
        channel = store.getChannel(channel.parent_id);
        if (null == channel) {
          return false;
        }
      }
      const guildId = channel.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = store3.getGuild(guildId);
      }
      tmp = guild;
      const permissionOverwrites = channel.permissionOverwrites;
    }
  }
  if (null == tmp) {
    return false;
  } else {
    const permissions = store2.getEveryoneRole(tmp).permissions;
    const tmp17 = {}[tmp.id];
    let addResult = permissions;
    if (null != tmp17) {
      const obj2 = importAll(dependencyMap[13]);
      const removeResult = importAll(dependencyMap[13]).remove(permissions, tmp17.deny);
      addResult = importAll(dependencyMap[13]).add(removeResult, tmp17.allow);
      const obj3 = importAll(dependencyMap[13]);
    }
    return importAll(dependencyMap[13]).has(addResult, VIEW_CHANNEL);
  }
};
export const canEveryone = function canEveryone(VIEW_CHANNEL, channel) {
  channel = VIEW_CHANNEL;
  let tmp = channel;
  if (channel instanceof closure_8) {
    if (channel.type === constants2.PRIVATE_THREAD) {
      return false;
    } else {
      if (set.has(channel.type)) {
        channel = store.getChannel(channel.parent_id);
        if (null == channel) {
          return false;
        }
      }
      const guildId = channel.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = store3.getGuild(guildId);
      }
      tmp = guild;
      const permissionOverwrites = channel.permissionOverwrites;
    }
  }
  if (null == tmp) {
    return false;
  } else {
    const tmp10 = !hasPermission(store2.getEveryoneRole(tmp), VIEW_CHANNEL);
    let tmp11 = !tmp10;
    if (!tmp10) {
      tmp11 = !importDefault(dependencyMap[14]).some({}, (deny) => callback(closure_3[13]).has(deny.deny, deny));
      const obj2 = importDefault(dependencyMap[14]);
    }
    return tmp11;
  }
};
