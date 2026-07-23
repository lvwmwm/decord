// Module ID: 8402
// Function ID: 66864
// Name: canManageResource
// Dependencies: [57, 31, 3758, 1849, 8401, 482, 483, 1387, 566, 2]
// Exports: getManageResourcePermissions, useManageResourcePermissions

// Module 8402 (canManageResource)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import VIEW_CHANNEL from "VIEW_CHANNEL";
import { Permissions } from "sum";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function canManageResource(arg0, arg1, arg2, arg3) {
  let creator_id = arg0;
  let id = arg1;
  let tmp = arg3;
  let tmp2 = null != arg0;
  if (tmp2) {
    if (!!arg2) {
      tmp2 = !tmp4;
    } else if ("creator_id" in creator_id) {
      if (tmp) {
        tmp = null != id;
      }
      if (tmp) {
        creator_id = creator_id.creator_id;
        id = id.id;
        tmp = creator_id === id;
      }
      let tmp5 = tmp;
    } else if ("userId" in creator_id) {
      let tmp8 = tmp;
      if (tmp) {
        tmp8 = null != id;
      }
      if (tmp8) {
        tmp8 = creator_id.userId === id.id;
      }
      tmp5 = tmp8;
    } else {
      tmp5 = "user" in creator_id;
      if (tmp5) {
        let tmp6 = tmp;
        if (tmp) {
          tmp6 = null != id;
        }
        if (tmp6) {
          const user = creator_id.user;
          id = undefined;
          if (null != user) {
            id = user.id;
          }
          tmp6 = id === id.id;
        }
        tmp5 = tmp6;
      }
    }
  }
  return tmp2;
}
function attachChannelPermissions(channel) {
  if (null == channel) {
    const items = [Permissions.CREATE_EVENTS, Permissions.MANAGE_EVENTS];
    return items;
  } else {
    let tmp = closure_7;
    if (channel.isGuildStageVoice()) {
      tmp = closure_8;
    } else if (channel.isGuildVoice()) {
      tmp = closure_9;
    }
    const items1 = [importAll(483).combine(tmp, Permissions.CREATE_EVENTS), ];
    const obj = importAll(483);
    items1[1] = importAll(483).combine(tmp, Permissions.MANAGE_EVENTS);
    return items1;
  }
}
({ CREATE_GUILD_EVENT_CORE_PERMISSIONS: closure_7, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: closure_8, CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: closure_9 } = VIEW_CHANNEL);
let obj = {
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/permissions/useManageResourcePermissions.tsx");

export { attachChannelPermissions };
export const useManageResourcePermissions = function useManageResourcePermissions(channel) {
  const _require = channel;
  let obj = _require(1387);
  if (obj.isGuildRecord(channel)) {
    let items = [Permissions.CREATE_EVENTS, Permissions.MANAGE_EVENTS];
    let tmp2 = items;
  } else {
    tmp2 = attachChannelPermissions(channel);
  }
  const tmp5 = first(tmp2, 2);
  let closure_1 = tmp5[0];
  const dependencyMap = tmp5[1];
  const items1 = [_isNativeReflectConstruct];
  const tmp6 = first(_require(566).useStateFromStoresArray(items1, () => {
    const items = [tmp9.can(outer1_10.CREATE_GUILD_EXPRESSIONS, closure_0), tmp9.can(outer1_10.MANAGE_GUILD_EXPRESSIONS, closure_0), tmp9.can(closure_1, closure_0), tmp9.can(closure_2, closure_0)];
    return items;
  }), 4);
  first = tmp6[0];
  const React = tmp8;
  _isNativeReflectConstruct = tmp9;
  let closure_6 = tmp10;
  const obj2 = _require(566);
  const items2 = [closure_6];
  const stateFromStores = _require(566).useStateFromStores(items2, () => tmp10.getCurrentUser());
  const items3 = [first, tmp6[1], stateFromStores];
  const items4 = [tmp6[3], tmp6[2], stateFromStores];
  const callback = React.useCallback((arg0) => outer1_12(arg0, stateFromStores, result, first), items3);
  if (null != channel) {
    obj = { canCreateExpressions: first, canCreateGuildEvent: tmp9, canManageAllExpressions: tmp8, canManageAllEvents: tmp10, canManageGuildExpression: callback, canManageGuildEvent: tmp13 };
  }
  return obj;
};
export const getManageResourcePermissions = function getManageResourcePermissions(guild, c6, closure_7) {
  let tmp6;
  let tmp7;
  let obj = c6;
  let obj2 = closure_7;
  if (c6 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  if (obj2 === undefined) {
    obj2 = closure_6;
  }
  let _require;
  let canResult1;
  let canResult2;
  let canResult3;
  let currentUser;
  if (obj3.isGuildRecord(guild)) {
    const items = [Permissions.CREATE_EVENTS, Permissions.MANAGE_EVENTS];
    let tmp2 = items;
  } else {
    tmp2 = attachChannelPermissions(guild);
  }
  obj3 = _require(canResult2[7]);
  [tmp6, tmp7] = canResult3(tmp2, 2);
  const canResult = obj.can(Permissions.CREATE_GUILD_EXPRESSIONS, guild);
  _require = canResult;
  canResult1 = obj.can(Permissions.MANAGE_GUILD_EXPRESSIONS, guild);
  canResult2 = obj.can(tmp6, guild);
  canResult3 = obj.can(tmp7, guild);
  currentUser = obj2.getCurrentUser();
  if (null != guild) {
    obj = {
      canCreateExpressions: canResult,
      canCreateGuildEvent: canResult2,
      canManageAllExpressions: canResult1,
      canManageAllEvents: canResult3,
      canManageGuildExpression(arg0) {
          return outer1_12(arg0, result, canResult1, c0);
        },
      canManageGuildEvent(arg0) {
          return outer1_12(arg0, result, canResult3, canResult2);
        }
    };
  }
  return obj;
};
