// Module ID: 8402
// Function ID: 66885
// Name: isAdmin
// Dependencies: []
// Exports: canCreatePrivateChannel, extractPermissionOverwrites, getExistingMembersRows, getExistingRolesRowWithPermissionDisabled, getExistingRolesRows, getMembersRows, getPrivateChannelHintText, getRemoveTooltipHint, getRolesRows, getRolesRowsWithPermissionDisabled, getRowTypeLabel, grantUserChannelAccess, isEveryoneRoleId, isPrivateGuildChannel, isPrivateTextChannel, toggleChannelEveryonePermission

// Module 8402 (isAdmin)
function isAdmin(colorString) {
  return callback(colorString, constants.ADMINISTRATOR);
}
function getRoleRowData(colorString) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const tmp2 = isAdmin(colorString) ? RowType.ADMINISTRATOR : RowType.ROLE;
  const obj = { rowType: tmp2 };
  colorString = colorString.colorString;
  if (null == colorString) {
    colorString = closure_13;
  }
  obj.colorString = colorString;
  ({ name: obj.name, id: obj.id } = colorString);
  obj.disabled = isAdmin(colorString) || flag;
  obj.key = "" + tmp2 + ":" + colorString.id;
  obj.tags = colorString.tags;
  return obj;
}
function sortRoles(guildId, id) {
  let num = 1;
  let num2 = 1;
  if (isAdmin(guildId)) {
    num2 = 0;
  }
  if (isAdmin(id)) {
    num = 0;
  }
  if (num2 !== num) {
    let diff = num2 - num;
  } else {
    diff = require(dependencyMap[7]).compareGuildRoles(guildId, id);
    const obj = require(dependencyMap[7]);
  }
  return diff;
}
function getNoRolesRow(intl) {
  let stringResult = intl;
  if (intl === undefined) {
    intl = require(dependencyMap[8]).intl;
    stringResult = intl.string(require(dependencyMap[8]).t.gnsna/);
  }
  const obj = { rowType: RowType.EMPTY_STATE, colorString: closure_13, name: stringResult, disabled: true, id: "EMPTY_STATE" };
  const items = [obj];
  return items;
}
function canAddPermissionInChannel(arg0, arg1, arg2, arg3) {
  const currentUser = authStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else if (null == arg0) {
    return currentUser.id !== arg1;
  } else {
    let tmp2 = arg0.permissionOverwrites[arg1];
    let tmp3;
    if (null != arg3) {
      tmp3 = arg3[arg1];
    }
    if (null != tmp3) {
      tmp2 = arg3[arg1];
    }
    let tmp4 = null == tmp2;
    if (!tmp4) {
      tmp4 = !importAll(dependencyMap[9]).has(tmp2.allow, arg2);
      const obj = importAll(dependencyMap[9]);
    }
    return tmp4;
  }
}
function getExistingRoles(guild, sortedRoles, channel, accessPermissions, arg4) {
  const require = channel;
  const importDefault = accessPermissions;
  const importAll = arg4;
  return sortedRoles.filter((id) => {
    let tmp = callback2(id);
    if (!tmp) {
      const tmp6 = callback3(arg2, id.id, arg3, arg4);
      let tmp7 = !tmp6;
      if (!tmp6) {
        tmp7 = !callback(id);
      }
      tmp = tmp7;
    }
    return tmp;
  });
}
function getAllExistingRolesWithPermission(arg0, arr, channel, MODERATE_STAGE_CHANNEL_PERMISSIONS, arg4) {
  const require = channel;
  const importDefault = MODERATE_STAGE_CHANNEL_PERMISSIONS;
  const importAll = arg4;
  return arr.filter((id) => {
    let hasItem = callback2(id);
    if (!hasItem) {
      const tmp6 = callback3(arg2, id.id, arg3, arg4);
      let tmp7 = !tmp6;
      if (!tmp6) {
        tmp7 = !callback(id);
      }
      hasItem = tmp7;
    }
    if (!hasItem) {
      const obj = arg4(closure_3[9]);
      let allow;
      if (null != arg2.permissionOverwrites[id.id]) {
        allow = tmp12.allow;
      }
      hasItem = obj.has(arg4(closure_3[9]).combine(id.permissions, allow), arg3);
      const obj2 = arg4(closure_3[9]);
    }
    return hasItem;
  });
}
function getDisplayName(id, id2) {
  let nick = nick.getNick(id2.id, id.id);
  if (null == nick) {
    nick = importDefault(dependencyMap[11]).getName(id);
    const obj = importDefault(dependencyMap[11]);
  }
  return nick;
}
function isDefaultMember(id, id2) {
  return isGuildOwner(id2, id);
}
function getMemberRowData(id, id2) {
  const tmp2 = isGuildOwner(id2, id) ? RowType.OWNER : RowType.MEMBER;
  const obj = { rowType: tmp2, name: getDisplayName(id, id2), username: importDefault(dependencyMap[11]).getUserTag(id), id: id.id, avatarURL: id.getAvatarURL(id2.id, 24), bot: id.bot, verifiedBot: id.isVerifiedBot(), disabled: isDefaultMember(id, id2), key: "" + tmp2 + ":" + id.id };
  return obj;
}
function sortMembers(rowType, rowType2) {
  if (rowType.rowType !== rowType2.rowType) {
    let diff = rowType.rowType - rowType2.rowType;
  } else {
    const name = rowType.name;
    const name2 = rowType2.name;
    diff = name.toLocaleLowerCase().localeCompare(name2.toLocaleLowerCase());
    const toLocaleLowerCaseResult = name.toLocaleLowerCase();
  }
  return diff;
}
function getExistingMembers(memberIds, channel, guild, accessPermissions, arg4) {
  const require = channel;
  const importDefault = guild;
  const importAll = accessPermissions;
  const dependencyMap = arg4;
  const mapped = memberIds.map(authStore.getUser);
  const found = mapped.filter(require(dependencyMap[12]).isNotNullish);
  return found.filter((id) => {
    const tmp = callback(arg1, id.id, arg3, arg4);
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = callback2(id, arg2);
    }
    return tmp2;
  });
}
function flipEveryonePermission(guild_id, accessPermissions, result) {
  let everyoneOverwrite = guild_id.permissionOverwrites[guild_id.guild_id];
  if (null == everyoneOverwrite) {
    let obj = importAll(dependencyMap[13]);
    everyoneOverwrite = obj.makeEveryoneOverwrite(guild_id.guild_id);
  }
  obj = {};
  const merged = Object.assign(everyoneOverwrite);
  obj.deny = importAll(dependencyMap[9]).remove(obj.deny, accessPermissions);
  const obj3 = importAll(dependencyMap[9]);
  obj.allow = importAll(dependencyMap[9]).remove(obj.allow, accessPermissions);
  if (!result) {
    obj.deny = importAll(dependencyMap[9]).add(obj.deny, accessPermissions);
    const obj5 = importAll(dependencyMap[9]);
  }
  return obj;
}
const isGuildVocalChannelType = require(dependencyMap[0]).isGuildVocalChannelType;
const isGuildOwner = require(dependencyMap[1]).isGuildOwner;
const _module = require(dependencyMap[2]);
({ hasPermission: closure_6, isEveryoneRole: closure_7 } = _module);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const RowType = require(dependencyMap[5]).RowType;
const _module1 = require(dependencyMap[6]);
({ Permissions: closure_11, ChannelTypes: closure_12, DEFAULT_ROLE_COLOR_HEX: closure_13 } = _module1);
const _module2 = require(dependencyMap[17]);
const result = _module2.fileFinishedImporting("modules/channel_permissions/ChannelPermissionsUtils.tsx");

export { getRoleRowData };
export { sortRoles };
export { getNoRolesRow };
export const isEveryoneRoleId = function isEveryoneRoleId(guildId, roleId) {
  return importDefault(dependencyMap[10]).castGuildIdAsEveryoneGuildRoleId(guildId) === roleId;
};
export const getRolesRows = function getRolesRows(guild, stateFromStores, channel, permission, filterByQuery) {
  let fn = filterByQuery;
  const require = channel;
  const importDefault = permission;
  if (filterByQuery === undefined) {
    fn = function a() {
      return true;
    };
  }
  const importAll = fn;
  const found = stateFromStores.filter((id) => {
    let tmp = !callback2(id);
    if (tmp) {
      tmp = callback4(arg2, id.id, arg3);
    }
    if (tmp) {
      tmp = !callback(id);
    }
    if (tmp) {
      tmp = fn(id.name);
    }
    return tmp;
  });
  const sorted = found.sort(sortRoles);
  return sorted.map((arg0) => callback3(arg0));
};
export const getRolesRowsWithPermissionDisabled = function getRolesRowsWithPermissionDisabled(guild, stateFromStores, channel, permission, filterByQuery) {
  let fn = filterByQuery;
  const require = channel;
  const importDefault = permission;
  if (filterByQuery === undefined) {
    fn = function u() {
      return true;
    };
  }
  const importAll = fn;
  const found = stateFromStores.filter((id) => {
    let tmp = !callback3(id);
    if (tmp) {
      tmp = callback5(arg2, id.id, arg3);
    }
    if (tmp) {
      tmp = !callback2(id);
    }
    if (tmp) {
      tmp = fn(id.name);
    }
    return tmp;
  });
  const sorted = found.sort(sortRoles);
  return sorted.map((arg0) => callback4(arg0, callback(arg0, arg3)));
};
export { getExistingRoles };
export { getAllExistingRolesWithPermission };
export const getExistingRolesRows = function getExistingRolesRows(guild, sortedGuildRoles, channel, accessPermissions) {
  const sorted = getExistingRoles(0, sortedGuildRoles, channel, accessPermissions, arg4).sort(sortRoles);
  let mapped = sorted.map((arg0) => callback(arg0));
  if (0 === mapped.length) {
    const intl = require(dependencyMap[8]).intl;
    mapped = getNoRolesRow(intl.string(require(dependencyMap[8]).t.nZfHsf));
  }
  return mapped;
};
export const getExistingRolesRowWithPermissionDisabled = function getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, MODERATE_STAGE_CHANNEL_PERMISSIONS) {
  const require = MODERATE_STAGE_CHANNEL_PERMISSIONS;
  const sorted = getAllExistingRolesWithPermission(0, sortedGuildRoles, channel, MODERATE_STAGE_CHANNEL_PERMISSIONS, arg4).sort(sortRoles);
  let mapped = sorted.map((arg0) => callback2(arg0, callback(arg0, arg3)));
  if (0 === mapped.length) {
    const intl = require(dependencyMap[8]).intl;
    mapped = getNoRolesRow(intl.string(require(dependencyMap[8]).t.nZfHsf));
  }
  return mapped;
};
export const getMembersRows = function getMembersRows(stateFromStoresArray, channel, guild, permission, filterByQuery) {
  let fn = filterByQuery;
  const require = channel;
  const importDefault = guild;
  const importAll = permission;
  if (filterByQuery === undefined) {
    fn = function a() {
      return true;
    };
  }
  const dependencyMap = fn;
  const mapped = stateFromStoresArray.map(authStore.getUser);
  const found = mapped.filter(require(dependencyMap[12]).isNotNullish);
  const found1 = found.filter((id) => {
    let tmp = !callback(arg2, id);
    if (tmp) {
      tmp = callback2(arg1, id.id, arg3);
    }
    if (tmp) {
      let tmp8 = fn(callback3(id, arg2));
      if (!tmp8) {
        tmp8 = fn(id.username);
      }
      if (!tmp8) {
        tmp8 = fn(id.discriminator);
      }
      tmp = tmp8;
    }
    return tmp;
  });
  const mapped1 = found1.map((arg0) => callback4(arg0, arg2));
  return mapped1.sort(sortMembers);
};
export { getExistingMembers };
export const getExistingMembersRows = function getExistingMembersRows(memberIds, channel, guild, accessPermissions) {
  const require = guild;
  const mapped = getExistingMembers(memberIds, channel, guild, accessPermissions, arg4).map((arg0) => callback(arg0, arg2));
  return mapped.sort(sortMembers);
};
export const getRowTypeLabel = function getRowTypeLabel(rowType) {
  if (RowType.ROLE === rowType) {
    const intl6 = require(dependencyMap[8]).intl;
    return intl6.string(require(dependencyMap[8]).t.ZxoFOG);
  } else if (RowType.OWNER === rowType) {
    const intl5 = require(dependencyMap[8]).intl;
    return intl5.string(require(dependencyMap[8]).t.NWhYJg);
  } else if (RowType.ADMINISTRATOR === rowType) {
    const intl4 = require(dependencyMap[8]).intl;
    return intl4.string(require(dependencyMap[8]).t.dwlcc+);
  } else if (RowType.MEMBER === rowType) {
    let stringResult = null;
    if (arg1) {
      const intl3 = require(dependencyMap[8]).intl;
      stringResult = intl3.string(require(dependencyMap[8]).t.UAJxZi);
    }
    return stringResult;
  } else if (RowType.USER === rowType) {
    const intl2 = require(dependencyMap[8]).intl;
    return intl2.string(require(dependencyMap[8]).t.KD6OJJ);
  } else if (RowType.GUILD === rowType) {
    const intl = require(dependencyMap[8]).intl;
    return intl.string(require(dependencyMap[8]).t.5qyruI);
  } else if (RowType.EMPTY_STATE === rowType) {
    return null;
  }
};
export const getRemoveTooltipHint = function getRemoveTooltipHint(arg0) {
  if (RowType.ROLE === arg0) {
    const intl4 = require(dependencyMap[8]).intl;
    return intl4.string(require(dependencyMap[8]).t.Gzc/a8);
  } else if (RowType.OWNER === arg0) {
    const intl3 = require(dependencyMap[8]).intl;
    return intl3.string(require(dependencyMap[8]).t.icuNBM);
  } else if (RowType.ADMINISTRATOR === arg0) {
    const intl2 = require(dependencyMap[8]).intl;
    return intl2.string(require(dependencyMap[8]).t.eTmN5a);
  } else if (RowType.MEMBER === arg0) {
    const intl = require(dependencyMap[8]).intl;
    return intl.string(require(dependencyMap[8]).t.Gzc/a8);
  } else {
    const EMPTY_STATE = RowType.EMPTY_STATE;
    return null;
  }
};
export { flipEveryonePermission };
export const toggleChannelEveryonePermission = function toggleChannelEveryonePermission(guild_id, accessPermissions, result) {
  const tmp = flipEveryonePermission(guild_id, accessPermissions, result);
  require(dependencyMap[14]).updatePermission(guild_id, tmp.id, tmp.allow, tmp.deny);
};
export const grantUserChannelAccess = function grantUserChannelAccess(id, accessPermissions) {
  let allow;
  let deny;
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    if (null == id.permissionOverwrites[currentUser.id]) {
      let obj = { id: currentUser.id, type: require(dependencyMap[15]).PermissionOverwriteType.MEMBER, allow: importAll(dependencyMap[9]).add(importAll(dependencyMap[13]).NONE, accessPermissions), deny: importAll(dependencyMap[13]).NONE };
      const obj4 = importAll(dependencyMap[9]);
      const items = [obj];
      return require(dependencyMap[14]).savePermissionUpdates(id.id, items, true);
    } else {
      ({ allow, deny } = tmp2);
      obj = importAll(dependencyMap[9]);
      const obj2 = require(dependencyMap[14]);
      return obj2.updatePermission(id, tmp2.id, obj.add(allow, accessPermissions), deny);
    }
  }
};
export const isPrivateGuildChannel = function isPrivateGuildChannel(channel) {
  if (null == channel) {
    return false;
  } else {
    let tmp = channel.permissionOverwrites[channel.guild_id];
    let tmp2;
    if (null != arg1) {
      tmp2 = arg1[channel.guild_id];
    }
    if (null != tmp2) {
      tmp = arg1[channel.guild_id];
    }
    let hasItem = null != tmp;
    if (hasItem) {
      hasItem = importAll(dependencyMap[9]).has(tmp.deny, channel.accessPermissions);
      const obj = importAll(dependencyMap[9]);
    }
    return hasItem;
  }
};
export const isPrivateTextChannel = function isPrivateTextChannel(type) {
  let hasItem = null != tmp;
  if (hasItem) {
    hasItem = type.type === constants2.GUILD_TEXT;
  }
  if (hasItem) {
    hasItem = importAll(dependencyMap[9]).has(tmp.deny, constants.VIEW_CHANNEL);
    const obj = importAll(dependencyMap[9]);
  }
  return hasItem;
};
export const canCreatePrivateChannel = function canCreatePrivateChannel(closure_10, canResult, canResult1) {
  let tmp = canResult;
  if (closure_10 !== constants2.GUILD_TEXT) {
    tmp = canResult;
    if (closure_10 !== constants2.GUILD_ANNOUNCEMENT) {
      let tmp4 = !isGuildVocalChannelType(closure_10);
      if (tmp4) {
        tmp4 = closure_10 !== constants2.GUILD_CATEGORY;
      }
      if (!tmp4) {
        let tmp6 = canResult;
        if (canResult) {
          tmp6 = canResult1;
        }
        tmp4 = tmp6;
      }
      tmp = tmp4;
    }
  }
  return tmp;
};
export const getPrivateChannelHintText = function getPrivateChannelHintText(first1) {
  if (constants2.GUILD_TEXT !== first1) {
    if (constants2.GUILD_ANNOUNCEMENT !== first1) {
      if (constants2.GUILD_VOICE === first1) {
        const intl2 = require(dependencyMap[8]).intl;
        return intl2.format(require(dependencyMap[8]).t.iZAMty, {});
      } else if (constants2.GUILD_CATEGORY === first1) {
        const intl = require(dependencyMap[8]).intl;
        return intl.format(require(dependencyMap[8]).t.PhnARV, {});
      } else {
        return null;
      }
    }
  }
  const intl3 = require(dependencyMap[8]).intl;
  return intl3.format(require(dependencyMap[8]).t.ZDtA0T, {});
};
export const extractPermissionOverwrites = function extractPermissionOverwrites(arg0, arg1) {
  const require = arg1;
  const items = [];
  const importDefault = items;
  const values = Object.values(arg0);
  const item = values.forEach((row) => {
    row = row.row;
    let tmp = null != row.id;
    if (tmp) {
      tmp = "" !== row.id;
    }
    if (tmp) {
      if (row.rowType === constants.ROLE) {
        items.push(arg1(closure_3[16]).permissionOverwriteForRole(row.id, arg1));
        const obj = arg1(closure_3[16]);
      } else if (row.rowType === constants.MEMBER) {
        items.push(arg1(closure_3[16]).permissionOverwriteForUser(row.id, arg1));
        const obj2 = arg1(closure_3[16]);
      }
    }
  });
  return items;
};
