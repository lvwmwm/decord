// Module ID: 13404
// Function ID: 13405
// Name: useHasAllocateBoostPermission
// Dependencies: [4784, 4845, 1082, 504, 2]
// Exports: default, getHasAllocateBoostPermission

// Module 13404 (useHasAllocateBoostPermission)
import Constants from "Constants" /* 1082 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx");

export default function useHasAllocateBoostPermission(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  const items = [PermissionStore, GuildStore];
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let canResult = null;
    if (null != guild) {
      canResult = null;
      if (null != PermissionStore.getGuildPermissions(guild)) {
        canResult = obj.can(Permissions.ADMINISTRATOR, guild);
      }
    }
    return canResult;
  });
};
export function getHasAllocateBoostPermission(PermissionStore, guild) {
  let canResult = null;
  if (null != guild) {
    canResult = null;
    if (null != PermissionStore.getGuildPermissions(guild)) {
      canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
    }
  }
  return canResult;
}
