// Module ID: 12111
// Function ID: 12112
// Name: useHasVideoPermission
// Dependencies: [5012, 5073, 504, 6859, 2]
// Exports: default, getVideoPermission

// Module 12111 (useHasVideoPermission)
import StreamPermissionUtils from "StreamPermissionUtils" /* 6859 */;
import GuildStore from "GuildStore" /* 5012 */;
import PermissionStore from "PermissionStore" /* 5073 */;
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
