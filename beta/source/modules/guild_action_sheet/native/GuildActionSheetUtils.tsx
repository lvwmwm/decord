// Module ID: 14233
// Function ID: 14234
// Name: GuildActionSheetUtils
// Dependencies: [4399, 1078, 558, 568, 504, 2]

// Module 14233 (GuildActionSheetUtils)
import PermissionStore from "PermissionStore" /* 4399 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1078).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export const useGuildActionSheetPermissions = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class A {
      constructor() {
        tmp = closure_0;
        if (null == closure_0) {
          obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
        } else {
          obj = { canAccessSettings: null, canEditNickname: null, canManageChannels: null };
          obj2 = closure_2;
          obj.canAccessSettings = closure_2.canAccessGuildSettings(tmp);
          tmp2 = Permissions;
          tmp3 = closure_2.can(Permissions.CHANGE_NICKNAME, tmp) || obj2.can(tmp2.MANAGE_NICKNAMES, tmp);
          obj.canEditNickname = tmp3;
          obj.canManageChannels = obj2.can(tmp2.MANAGE_CHANNELS, tmp);
        }
        return obj;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = A;
    cResult[3] = items1;
    let tmp7 = items1;
    const tmp6 = A;
  } else {
    class A {
      constructor() {
        tmp = closure_0;
        if (null == closure_0) {
          obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
        } else {
          obj = { canAccessSettings: null, canEditNickname: null, canManageChannels: null };
          obj2 = closure_2;
          obj.canAccessSettings = closure_2.canAccessGuildSettings(tmp);
          tmp2 = Permissions;
          tmp3 = closure_2.can(Permissions.CHANGE_NICKNAME, tmp) || obj2.can(tmp2.MANAGE_NICKNAMES, tmp);
          obj.canEditNickname = tmp3;
          obj.canManageChannels = obj2.can(tmp2.MANAGE_CHANNELS, tmp);
        }
        return obj;
      }
    }
    tmp7 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      let obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
    } else {
      obj = { canAccessSettings: PermissionStore.canAccessGuildSettings(tmp), canEditNickname: PermissionStore.can(Permissions.CHANGE_NICKNAME, tmp) || PermissionStore.can(Permissions.MANAGE_NICKNAMES, tmp), canManageChannels: PermissionStore.can(Permissions.MANAGE_CHANNELS, tmp) };
      const tmp3 = PermissionStore.can(Permissions.CHANGE_NICKNAME, tmp) || PermissionStore.can(Permissions.MANAGE_NICKNAMES, tmp);
    }
    return obj;
  }, items1);
});
