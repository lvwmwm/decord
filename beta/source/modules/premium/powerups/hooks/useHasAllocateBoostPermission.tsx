// Module ID: 14362
// Function ID: 14363
// Name: useHasAllocateBoostPermission
// Dependencies: [5041, 5102, 1083, 504, 2]
// Exports: default, getHasAllocateBoostPermission

// Module 14362 (useHasAllocateBoostPermission)
import Constants from "Constants" /* 1083 */;
import GuildStore from "GuildStore" /* 5041 */;
import PermissionStore from "PermissionStore" /* 5102 */;
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
