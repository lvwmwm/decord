// Module ID: 10812
// Function ID: 10813
// Name: useHasVideoPermission
// Dependencies: [4665, 4726, 504, 6289, 2]
// Exports: default, getVideoPermission

// Module 10812 (useHasVideoPermission)
import StreamPermissionUtils from "StreamPermissionUtils" /* 6289 */;
import GuildStore from "GuildStore" /* 4665 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/video_calls/useHasVideoPermission.tsx");

export default function useHasVideoPermission(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      let isPrivateResult = obj.isPrivate();
      if (!isPrivateResult) {
        const obj2 = StreamPermissionUtils;
        isPrivateResult = obj2.canStreamInChannel(obj, GuildStore, PermissionStore, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  }, items1);
};
export function getVideoPermission(channel) {
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    const obj = StreamPermissionUtils;
    isPrivateResult = obj.canStreamInChannel(channel, GuildStore, PermissionStore, false);
  }
  return isPrivateResult;
}
