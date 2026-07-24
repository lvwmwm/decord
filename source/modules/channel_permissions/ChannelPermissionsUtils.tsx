// Module ID: 8457
// Function ID: 67185
// Name: isAdmin
// Dependencies: [1352, 1391, 1911, 1917, 1849, 7565, 653, 1912, 1212, 483, 21, 3969, 1327, 3763, 8458, 1881, 4312, 2]
// Exports: canCreatePrivateChannel, extractPermissionOverwrites, getExistingMembersRows, getExistingRolesRowWithPermissionDisabled, getExistingRolesRows, getMembersRows, getPrivateChannelHintText, getRemoveTooltipHint, getRolesRows, getRolesRowsWithPermissionDisabled, getRowTypeLabel, grantUserChannelAccess, isEveryoneRoleId, isPrivateGuildChannel, isPrivateTextChannel, toggleChannelEveryonePermission

// Module 8457 (isAdmin)
import { isGuildVocalChannelType } from "_callSuper";
import { isGuildOwner } from "isGuildOwner";
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { RowType } from "RowType";
import ME from "ME";

let closure_11;
let closure_12;
let closure_13;
let closure_6;
let closure_7;
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
    diff = require(1912) /* _createForOfIteratorHelperLoose */.compareGuildRoles(guildId, id);
    const obj = require(1912) /* _createForOfIteratorHelperLoose */;
  }
  return diff;
}
function getNoRolesRow(intl) {
  let stringResult = intl;
  if (intl === undefined) {
    intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t["gnsna/"]);
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
      tmp4 = !importAll(483).has(tmp2.allow, arg2);
      const obj = importAll(483);
    }
    return tmp4;
  }
}
function getExistingRoles(guild, sortedRoles, channel, accessPermissions, arg4) {
  let closure_0 = channel;
  let closure_1 = accessPermissions;
  let closure_2 = arg4;
  return sortedRoles.filter((id) => {
    let tmp = outer1_14(id);
    if (!tmp) {
      const tmp6 = outer1_18(closure_0, id.id, closure_1, closure_2);
      let tmp7 = !tmp6;
      if (!tmp6) {
        tmp7 = !outer1_7(id);
      }
      tmp = tmp7;
    }
    return tmp;
  });
}
function getAllExistingRolesWithPermission(arg0, arr, channel, MODERATE_STAGE_CHANNEL_PERMISSIONS, arg4) {
  let closure_0 = channel;
  let closure_1 = MODERATE_STAGE_CHANNEL_PERMISSIONS;
  let closure_2 = arg4;
  return arr.filter((id) => {
    let hasItem = outer1_14(id);
    if (!hasItem) {
      const tmp6 = outer1_18(permissionOverwrites, id.id, closure_1, callback);
      let tmp7 = !tmp6;
      if (!tmp6) {
        tmp7 = !outer1_7(id);
      }
      hasItem = tmp7;
    }
    if (!hasItem) {
      const obj = callback(outer1_3[9]);
      let allow;
      if (null != permissionOverwrites.permissionOverwrites[id.id]) {
        allow = tmp12.allow;
      }
      hasItem = obj.has(callback(outer1_3[9]).combine(id.permissions, allow), closure_1);
      const obj2 = callback(outer1_3[9]);
    }
    return hasItem;
  });
}
function getDisplayName(id, id2) {
  nick = nick.getNick(id2.id, id.id);
  if (null == nick) {
    nick = importDefault(3969).getName(id);
    const obj = importDefault(3969);
  }
  return nick;
}
function isDefaultMember(id, id2) {
  return isGuildOwner(id2, id);
}
function getMemberRowData(id, id2) {
  const tmp2 = isGuildOwner(id2, id) ? RowType.OWNER : RowType.MEMBER;
  const obj = { rowType: tmp2, name: getDisplayName(id, id2), username: importDefault(3969).getUserTag(id), id: id.id, avatarURL: id.getAvatarURL(id2.id, 24), bot: id.bot, verifiedBot: id.isVerifiedBot(), disabled: isDefaultMember(id, id2), key: "" + tmp2 + ":" + id.id };
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
  const _require = channel;
  let closure_1 = guild;
  let closure_2 = accessPermissions;
  const dependencyMap = arg4;
  const mapped = memberIds.map(authStore.getUser);
  const found = mapped.filter(_require(1327).isNotNullish);
  return found.filter((id) => {
    const tmp = outer1_18(closure_0, id.id, closure_2, closure_3);
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = outer1_22(id, closure_1);
    }
    return tmp2;
  });
}
function flipEveryonePermission(guild_id, accessPermissions, result) {
  let everyoneOverwrite = guild_id.permissionOverwrites[guild_id.guild_id];
  if (null == everyoneOverwrite) {
    let obj = importAll(3763);
    everyoneOverwrite = obj.makeEveryoneOverwrite(guild_id.guild_id);
  }
  obj = {};
  const merged = Object.assign(everyoneOverwrite);
  obj.deny = importAll(483).remove(obj.deny, accessPermissions);
  const obj3 = importAll(483);
  obj.allow = importAll(483).remove(obj.allow, accessPermissions);
  if (!result) {
    obj.deny = importAll(483).add(obj.deny, accessPermissions);
    const obj5 = importAll(483);
  }
  return obj;
}
({ hasPermission: closure_6, isEveryoneRole: closure_7 } = GuildRoleRecordTypeTag);
({ Permissions: closure_11, ChannelTypes: closure_12, DEFAULT_ROLE_COLOR_HEX: closure_13 } = ME);
const result = require("GuildRoleRecordTypeTag").fileFinishedImporting("modules/channel_permissions/ChannelPermissionsUtils.tsx");

export { getRoleRowData };
export { sortRoles };
export { getNoRolesRow };
export const isEveryoneRoleId = function isEveryoneRoleId(guildId, roleId) {
  return importDefault(21).castGuildIdAsEveryoneGuildRoleId(guildId) === roleId;
};
export const getRolesRows = function getRolesRows(guild, stateFromStores, channel, permission, filterByQuery) {
  let fn = filterByQuery;
  let closure_0 = channel;
  let closure_1 = permission;
  if (filterByQuery === undefined) {
    fn = function a() {
      return true;
    };
  }
  const found = stateFromStores.filter((id) => {
    let tmp = !outer1_14(id);
    if (tmp) {
      tmp = outer1_18(closure_0, id.id, closure_1);
    }
    if (tmp) {
      tmp = !outer1_7(id);
    }
    if (tmp) {
      tmp = fn(id.name);
    }
    return tmp;
  });
  const sorted = found.sort(sortRoles);
  return sorted.map((arg0) => outer1_15(arg0));
};
export const getRolesRowsWithPermissionDisabled = function getRolesRowsWithPermissionDisabled(guild, stateFromStores, channel, permission, filterByQuery) {
  let fn = filterByQuery;
  let closure_0 = channel;
  let closure_1 = permission;
  if (filterByQuery === undefined) {
    fn = function u() {
      return true;
    };
  }
  const found = stateFromStores.filter((id) => {
    let tmp = !outer1_14(id);
    if (tmp) {
      tmp = outer1_18(closure_0, id.id, closure_1);
    }
    if (tmp) {
      tmp = !outer1_7(id);
    }
    if (tmp) {
      tmp = fn(id.name);
    }
    return tmp;
  });
  const sorted = found.sort(sortRoles);
  return sorted.map((arg0) => outer1_15(arg0, outer1_6(arg0, closure_1)));
};
export { getExistingRoles };
export { getAllExistingRolesWithPermission };
export const getExistingRolesRows = function getExistingRolesRows(guild, sortedGuildRoles, channel, accessPermissions) {
  const sorted = getExistingRoles(0, sortedGuildRoles, channel, accessPermissions, arg4).sort(sortRoles);
  let mapped = sorted.map((arg0) => outer1_15(arg0));
  if (0 === mapped.length) {
    const intl = require(1212) /* getSystemLocale */.intl;
    mapped = getNoRolesRow(intl.string(require(1212) /* getSystemLocale */.t.nZfHsf));
  }
  return mapped;
};
export const getExistingRolesRowWithPermissionDisabled = function getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, MODERATE_STAGE_CHANNEL_PERMISSIONS) {
  const _require = MODERATE_STAGE_CHANNEL_PERMISSIONS;
  const sorted = getAllExistingRolesWithPermission(0, sortedGuildRoles, channel, MODERATE_STAGE_CHANNEL_PERMISSIONS, arg4).sort(sortRoles);
  let mapped = sorted.map((arg0) => outer1_15(arg0, outer1_6(arg0, closure_0)));
  if (0 === mapped.length) {
    const intl = _require(1212).intl;
    mapped = getNoRolesRow(intl.string(_require(1212).t.nZfHsf));
  }
  return mapped;
};
export const getMembersRows = function getMembersRows(stateFromStoresArray, channel, guild, permission, filterByQuery) {
  let fn = filterByQuery;
  const _require = channel;
  let closure_1 = guild;
  let closure_2 = permission;
  if (filterByQuery === undefined) {
    fn = function a() {
      return true;
    };
  }
  const mapped = stateFromStoresArray.map(authStore.getUser);
  const found = mapped.filter(_require(1327).isNotNullish);
  const found1 = found.filter((id) => {
    let tmp = !outer1_5(closure_1, id);
    if (tmp) {
      tmp = outer1_18(closure_0, id.id, closure_2);
    }
    if (tmp) {
      let tmp8 = fn(outer1_21(id, closure_1));
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
  const mapped1 = found1.map((arg0) => outer1_23(arg0, closure_1));
  return mapped1.sort(sortMembers);
};
export { getExistingMembers };
export const getExistingMembersRows = function getExistingMembersRows(memberIds, channel, guild, accessPermissions) {
  let closure_0 = guild;
  const mapped = getExistingMembers(memberIds, channel, guild, accessPermissions, arg4).map((arg0) => outer1_23(arg0, closure_0));
  return mapped.sort(sortMembers);
};
export const getRowTypeLabel = function getRowTypeLabel(rowType) {
  if (RowType.ROLE === rowType) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.ZxoFOG);
  } else if (RowType.OWNER === rowType) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.NWhYJg);
  } else if (RowType.ADMINISTRATOR === rowType) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t["dwlcc+"]);
  } else if (RowType.MEMBER === rowType) {
    let stringResult = null;
    if (arg1) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl3.string(require(1212) /* getSystemLocale */.t.UAJxZi);
    }
    return stringResult;
  } else if (RowType.USER === rowType) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.KD6OJJ);
  } else if (RowType.GUILD === rowType) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["5qyruI"]);
  } else if (RowType.EMPTY_STATE === rowType) {
    return null;
  }
};
export const getRemoveTooltipHint = function getRemoveTooltipHint(arg0) {
  if (RowType.ROLE === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t["Gzc/a8"]);
  } else if (RowType.OWNER === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.icuNBM);
  } else if (RowType.ADMINISTRATOR === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.eTmN5a);
  } else if (RowType.MEMBER === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["Gzc/a8"]);
  } else {
    const EMPTY_STATE = RowType.EMPTY_STATE;
    return null;
  }
};
export { flipEveryonePermission };
export const toggleChannelEveryonePermission = function toggleChannelEveryonePermission(guild_id, accessPermissions, result) {
  const tmp = flipEveryonePermission(guild_id, accessPermissions, result);
  require(8458) /* _updatePermission */.updatePermission(guild_id, tmp.id, tmp.allow, tmp.deny);
};
export const grantUserChannelAccess = function grantUserChannelAccess(id, accessPermissions) {
  let allow;
  let deny;
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    if (null == id.permissionOverwrites[currentUser.id]) {
      let obj = { id: currentUser.id, type: require(1881) /* PermissionOverwriteType */.PermissionOverwriteType.MEMBER, allow: importAll(483).add(importAll(3763).NONE, accessPermissions), deny: importAll(3763).NONE };
      const obj4 = importAll(483);
      const items = [obj];
      return require(8458) /* _updatePermission */.savePermissionUpdates(id.id, items, true);
    } else {
      ({ allow, deny } = tmp2);
      obj = importAll(483);
      const obj2 = require(8458) /* _updatePermission */;
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
      hasItem = importAll(483).has(tmp.deny, channel.accessPermissions);
      const obj = importAll(483);
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
    hasItem = importAll(483).has(tmp.deny, constants.VIEW_CHANNEL);
    const obj = importAll(483);
  }
  return hasItem;
};
export const canCreatePrivateChannel = function canCreatePrivateChannel(first1, canResult, canResult1) {
  let tmp = canResult;
  if (first1 !== constants2.GUILD_TEXT) {
    tmp = canResult;
    if (first1 !== constants2.GUILD_ANNOUNCEMENT) {
      let tmp4 = !isGuildVocalChannelType(first1);
      if (tmp4) {
        tmp4 = first1 !== constants2.GUILD_CATEGORY;
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
        const intl2 = require(1212) /* getSystemLocale */.intl;
        return intl2.format(require(1212) /* getSystemLocale */.t.iZAMty, {});
      } else if (constants2.GUILD_CATEGORY === first1) {
        const intl = require(1212) /* getSystemLocale */.intl;
        return intl.format(require(1212) /* getSystemLocale */.t.PhnARV, {});
      } else {
        return null;
      }
    }
  }
  const intl3 = require(1212) /* getSystemLocale */.intl;
  return intl3.format(require(1212) /* getSystemLocale */.t.ZDtA0T, {});
};
export const extractPermissionOverwrites = function extractPermissionOverwrites(arg0, arg1) {
  let closure_0 = arg1;
  const items = [];
  const values = Object.values(arg0);
  const item = values.forEach((row) => {
    row = row.row;
    let tmp = null != row.id;
    if (tmp) {
      tmp = "" !== row.id;
    }
    if (tmp) {
      if (row.rowType === outer1_10.ROLE) {
        items.push(callback(outer1_3[16]).permissionOverwriteForRole(row.id, callback));
        const obj = callback(outer1_3[16]);
      } else if (row.rowType === outer1_10.MEMBER) {
        items.push(callback(outer1_3[16]).permissionOverwriteForUser(row.id, callback));
        const obj2 = callback(outer1_3[16]);
      }
    }
  });
  return items;
};
