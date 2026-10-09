// Module ID: 12203
// Function ID: 12204
// Name: useHasAllocateBoostPermission
// Dependencies: [2086, 4709, 1096, 558, 576, 504, 2]
// Exports: getHasAllocateBoostPermission

// Module 12203 (useHasAllocateBoostPermission)
import Constants from "Constants" /* 1096 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
function getHasAllocateBoostPermission(PermissionStore, guild) {
  let canResult = null;
  if (null != guild) {
    canResult = null;
    if (null != PermissionStore.getGuildPermissions(guild)) {
      canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
    }
  }
  return canResult;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasAllocateBoostPermission(arg0) {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const guild = GuildStore.getGuild(closure_0);
      let canResult = null;
      if (null != guild) {
        canResult = null;
        if (null != PermissionStore.getGuildPermissions(guild)) {
          canResult = obj.can(Permissions.ADMINISTRATOR, guild);
        }
      }
      return canResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : (function useHasAllocateBoostPermission(arg0) {
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
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx");

export default tmp2;
export { getHasAllocateBoostPermission };
