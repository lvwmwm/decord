// Module ID: 11324
// Function ID: 11325
// Name: useCanMessageInPinotChannel
// Dependencies: [4946, 1072, 504, 2]
// Exports: useCanMessageInPinotChannel

// Module 11324 (useCanMessageInPinotChannel)
import Constants from "Constants" /* 1072 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/pinot/useCanMessageInPinotChannel.tsx");

export function useCanMessageInPinotChannel(guild_id) {
  _require = guild_id;
  const obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [guild_id];
  return obj.useStateFromStores(items, () => {
    let tmp = null != guild_id;
    if (tmp) {
      let canResult2;
      const can = PermissionStore.can;
      if (guild_id.isThread()) {
        let canResult = can(tmp3.SEND_MESSAGES_IN_THREADS, obj);
        if (canResult) {
          const isLockedThreadResult = guild_id.isLockedThread();
          let canResult1 = !isLockedThreadResult;
          if (isLockedThreadResult) {
            canResult1 = PermissionStore.can(Permissions.MANAGE_THREADS, obj);
          }
          canResult = canResult1;
        }
        canResult2 = canResult;
      } else {
        canResult2 = can(tmp3.SEND_MESSAGES, obj);
      }
      tmp = canResult2;
    }
    return tmp;
  }, items1);
}
