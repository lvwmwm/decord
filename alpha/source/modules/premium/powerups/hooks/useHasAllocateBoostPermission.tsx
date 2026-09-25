// Module ID: 11991
// Function ID: 11992
// Name: useHasAllocateBoostPermission
// Dependencies: [2066, 4466, 1085, 504, 2]
// Exports: default, getHasAllocateBoostPermission

// Module 11991 (useHasAllocateBoostPermission)
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4466 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx");

export default function useHasAllocateBoostPermission(arg0) {
  _require = arg0;
  const items = [PermissionStore, GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let canResult = null;
    if (null != guild) {
      canResult = null;
      if (null != obj.getGuildPermissions(guild)) {
        canResult = obj.can(Permissions.ADMINISTRATOR, guild);
      }
    }
    return canResult;
  });
};
export const getHasAllocateBoostPermission = function getHasAllocateBoostPermission(PermissionStore, guild) {
  let canResult = null;
  if (null != guild) {
    canResult = null;
    if (null != PermissionStore.getGuildPermissions(guild)) {
      canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
    }
  }
  return canResult;
};
