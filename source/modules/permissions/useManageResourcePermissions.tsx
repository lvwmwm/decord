// Module ID: 8396
// Function ID: 66827
// Name: canManageResource
// Dependencies: []
// Exports: getManageResourcePermissions, useManageResourcePermissions

// Module 8396 (canManageResource)
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
    const items1 = [importAll(dependencyMap[6]).combine(tmp, Permissions.CREATE_EVENTS), ];
    const obj = importAll(dependencyMap[6]);
    items1[1] = importAll(dependencyMap[6]).combine(tmp, Permissions.MANAGE_EVENTS);
    return items1;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ CREATE_GUILD_EVENT_CORE_PERMISSIONS: closure_7, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: closure_8, CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: closure_9 } = arg1(dependencyMap[4]));
const Permissions = arg1(dependencyMap[5]).Permissions;
const obj = {
  0: false,
  338690917: null,
  9223372036854775807: false,
  9223372036854775807: false,
  canManageGuildExpression() {
    return false;
  },
  canManageGuildEvent() {
    return false;
  }
};
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/permissions/useManageResourcePermissions.tsx");

export { attachChannelPermissions };
export const useManageResourcePermissions = function useManageResourcePermissions(channel) {
  const arg1 = channel;
  let obj = arg1(closure_2[7]);
  if (obj.isGuildRecord(channel)) {
    const items = [Permissions.CREATE_EVENTS, Permissions.MANAGE_EVENTS];
    let tmp2 = items;
  } else {
    tmp2 = attachChannelPermissions(channel);
  }
  const tmp5 = callback(tmp2, 2);
  let closure_1 = tmp5[0];
  closure_2 = tmp5[1];
  const items1 = [closure_5];
  const tmp6 = callback(arg1(closure_2[8]).useStateFromStoresArray(items1, () => {
    const items = [tmp9.can(constants.CREATE_GUILD_EXPRESSIONS, arg0), tmp9.can(constants.MANAGE_GUILD_EXPRESSIONS, arg0), tmp9.can(closure_1, arg0), tmp9.can(closure_2, arg0)];
    return items;
  }), 4);
  const first = tmp6[0];
  let callback = first;
  const React = tmp8;
  closure_5 = tmp9;
  let closure_6 = tmp10;
  const obj2 = arg1(closure_2[8]);
  const items2 = [closure_6];
  const stateFromStores = arg1(closure_2[8]).useStateFromStores(items2, () => tmp10.getCurrentUser());
  const items3 = [first, tmp6[1], stateFromStores];
  const items4 = [tmp6[3], tmp6[2], stateFromStores];
  callback = React.useCallback((arg0) => callback(arg0, stateFromStores, tmp8, first), items3);
  if (null != channel) {
    obj = { canCreateExpressions: first, canCreateGuildEvent: tmp9, canManageAllExpressions: tmp8, canManageAllEvents: tmp10, canManageGuildExpression: callback, canManageGuildEvent: tmp13 };
  }
  return obj;
};
export const getManageResourcePermissions = function getManageResourcePermissions(guild, closure_6, closure_7) {
  let tmp6;
  let tmp7;
  let obj = closure_6;
  let obj2 = closure_7;
  if (closure_6 === undefined) {
    obj = closure_5;
  }
  if (obj2 === undefined) {
    obj2 = closure_6;
  }
  closure_6 = undefined;
  let importAll;
  let dependencyMap;
  let callback;
  let currentUser;
  if (obj3.isGuildRecord(guild)) {
    const items = [Permissions.CREATE_EVENTS, Permissions.MANAGE_EVENTS];
    let tmp2 = items;
  } else {
    tmp2 = attachChannelPermissions(guild);
  }
  const obj3 = closure_6(dependencyMap[7]);
  [tmp6, tmp7] = callback(tmp2, 2);
  const canResult = obj.can(Permissions.CREATE_GUILD_EXPRESSIONS, guild);
  closure_6 = canResult;
  const canResult1 = obj.can(Permissions.MANAGE_GUILD_EXPRESSIONS, guild);
  importAll = canResult1;
  const canResult2 = obj.can(tmp6, guild);
  dependencyMap = canResult2;
  const canResult3 = obj.can(tmp7, guild);
  callback = canResult3;
  currentUser = obj2.getCurrentUser();
  if (null != guild) {
    obj = {
      canCreateExpressions: canResult,
      canCreateGuildEvent: canResult2,
      canManageAllExpressions: canResult1,
      canManageAllEvents: canResult3,
      canManageGuildExpression(arg0) {
          return callback(arg0, closure_4, canResult1, canResult);
        },
      canManageGuildEvent(arg0) {
          return callback(arg0, closure_4, canResult3, canResult2);
        }
    };
  }
  return obj;
};
