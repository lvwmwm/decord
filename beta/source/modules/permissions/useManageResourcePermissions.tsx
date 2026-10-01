// Module ID: 8952
// Function ID: 8953
// Name: useManageResourcePermissions
// Dependencies: [32, 19, 4469, 1372, 8953, 1085, 1086, 2059, 504, 2]
// Exports: attachChannelPermissions, getManageResourcePermissions, useManageResourcePermissions

// Module 8952 (useManageResourcePermissions)
import Constants from "Constants" /* 1085 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import PermissionsConstants from "PermissionsConstants" /* 8953 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5;

let c9;
let metroImportAll;
let metroImportDefault;
function canManageResource(creator_id, stateFromStores, canResult1, c0) {
  let tmp = null != creator_id;
  if (tmp) {
    let tmp3 = canResult1;
    if (!tmp3) {
      let tmp6;
      let tmp5 = c0;
      if ("creator_id" in creator_id) {
        if (tmp5) {
          tmp5 = null != stateFromStores;
        }
        if (tmp5) {
          tmp5 = creator_id.creator_id === stateFromStores.id;
        }
        tmp6 = tmp5;
      } else if ("userId" in creator_id) {
        tmp6 = tmp5 && null != stateFromStores && creator_id.userId === stateFromStores.id;
      } else {
        tmp6 = "user" in creator_id;
        if (tmp6) {
          let tmp7 = tmp5 && null != stateFromStores;
          if (tmp7) {
            const user = creator_id.user;
            let id;
            if (user != null) {
              id = user.id;
            }
            tmp7 = id === stateFromStores.id;
          }
          tmp6 = tmp7;
        }
      }
      tmp3 = tmp6;
    }
    tmp = tmp3;
  }
  return tmp;
}
let react = react_mod;
({ CREATE_GUILD_EVENT_CORE_PERMISSIONS: metroImportDefault, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: metroImportAll, CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: c9 } = PermissionsConstants);
const Permissions = Constants.Permissions;
let closure_11 = {
  canCreateExpressions: false,
  canCreateGuildEvent: false,
  canManageAllExpressions: false,
  canManageAllEvents: false,
  canManageGuildExpression() {
    return false;
  },
  canManageGuildEvent() {
    return false;
  }
};
const result = size.fileFinishedImporting("modules/permissions/useManageResourcePermissions.tsx");

export const attachChannelPermissions = function attachChannelPermissions(channel) {
  if (null == channel) {
    const items = [, ];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    return items;
  } else {
    let tmp = metroImportDefault;
    if (channel.isGuildStageVoice()) {
      tmp = metroImportAll;
    } else if (channel.isGuildVoice()) {
      tmp = React4;
    }
    const items1 = [, ];
    const obj = BigFlagUtilsAll;
    items1[0] = obj.combine(tmp, Permissions.CREATE_EVENTS);
    const obj2 = BigFlagUtilsAll;
    items1[1] = obj2.combine(tmp, Permissions.MANAGE_EVENTS);
    return items1;
  }
};
export const useManageResourcePermissions = function useManageResourcePermissions(channel) {
  let canCreateExpressions;
  let closure_4;
  let items2;
  let obj4;
  let stateFromStores;
  _require = channel;
  const obj = require("GuildRecordUtils");
  if (obj.isGuildRecord(channel)) {
    let items = [, ];
    ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
    items2 = items;
  } else if (null == channel) {
    const items1 = [, ];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    items2 = items1;
  } else {
    let tmp4 = stateFromStores;
    if (channel.isGuildStageVoice()) {
      tmp4 = closure_8;
    } else if (channel.isGuildVoice()) {
      tmp4 = closure_9;
    }
    items2 = [, ];
    const obj2 = BigFlagUtilsAll;
    items2[0] = obj2.combine(tmp4, Permissions.CREATE_EVENTS);
    const obj3 = BigFlagUtilsAll;
    items2[1] = obj3.combine(tmp4, Permissions.MANAGE_EVENTS);
  }
  [importAll, dependencyMap] = canCreateExpressions(items2, 2);
  canCreateExpressions(items2, 2);
  const items3 = [closure_5];
  const tmpResult = require("get initialized");
  const tmp10 = canCreateExpressions(tmpResult.useStateFromStoresArray(items3, () => {
    const items = [PermissionStore.can(Permissions.CREATE_GUILD_EXPRESSIONS, channel), PermissionStore.can(Permissions.MANAGE_GUILD_EXPRESSIONS, channel), PermissionStore.can(importAll, channel), PermissionStore.can(dependencyMap, channel)];
    return items;
  }), 4);
  canCreateExpressions = tmp10[0];
  react = tmp12;
  closure_5 = tmp13;
  const currentUser = tmp14;
  const items4 = [currentUser];
  const tmpResult2 = require("get initialized");
  stateFromStores = tmpResult2.useStateFromStores(items4, () => currentUser.getCurrentUser());
  const items5 = [canCreateExpressions, tmp10[1], stateFromStores];
  const items6 = [tmp10[3], tmp10[2], stateFromStores];
  const callback = react.useCallback((creator_id) => canManageResource(creator_id, stateFromStores, closure_4, first), items5);
  if (null == channel) {
    obj4 = closure_11;
  } else {
    obj4 = { canCreateExpressions, canCreateGuildEvent: tmp10[2], canManageAllExpressions: tmp10[1], canManageAllEvents: tmp10[3], canManageGuildExpression: callback, canManageGuildEvent: tmp17 };
  }
  return obj4;
};
export const getManageResourcePermissions = function getManageResourcePermissions(guild, c6, UserStore) {
  let c0;
  let closure_4;
  let items2;
  let obj6;
  let tmp10;
  let tmp5;
  let tmp9;
  let obj = c6;
  if (c6 === undefined) {
    obj = PermissionStore;
  }
  let obj2 = UserStore;
  if (UserStore === undefined) {
    obj2 = UserStore;
  }
  _require = undefined;
  let canResult1;
  let canResult2;
  let canResult3;
  let currentUser;
  const obj3 = require("GuildRecordUtils");
  if (obj3.isGuildRecord(guild)) {
    const items = [, ];
    ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
    tmp5 = Permissions;
    items2 = items;
  } else if (null == guild) {
    const items1 = [, ];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    tmp5 = Permissions;
    items2 = items1;
  } else {
    let tmp3 = closure_7;
    if (guild.isGuildStageVoice()) {
      tmp3 = closure_8;
    } else if (guild.isGuildVoice()) {
      tmp3 = closure_9;
    }
    tmp5 = Permissions;
    items2 = [, ];
    const obj4 = canResult1(canResult2[6]);
    items2[0] = obj4.combine(tmp3, Permissions.CREATE_EVENTS);
    const obj5 = canResult1(canResult2[6]);
    items2[1] = obj5.combine(tmp3, Permissions.MANAGE_EVENTS);
  }
  [tmp9, tmp10] = canResult3(items2, 2);
  canResult3(items2, 2);
  const canResult = obj.can(tmp5.CREATE_GUILD_EXPRESSIONS, guild);
  _require = canResult;
  canResult1 = obj.can(tmp5.MANAGE_GUILD_EXPRESSIONS, guild);
  canResult2 = obj.can(tmp9, guild);
  canResult3 = obj.can(tmp10, guild);
  currentUser = obj2.getCurrentUser();
  if (null == guild) {
    obj6 = closure_11;
  } else {
    obj6 = {
      canCreateExpressions: canResult,
      canCreateGuildEvent: canResult2,
      canManageAllExpressions: canResult1,
      canManageAllEvents: canResult3,
      canManageGuildExpression(creator_id) {
          return canManageResource(creator_id, closure_4, canResult1, c0);
        },
      canManageGuildEvent(creator_id) {
          return canManageResource(creator_id, closure_4, canResult3, canResult2);
        }
    };
  }
  return obj6;
};
