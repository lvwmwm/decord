// Module ID: 11879
// Function ID: 11880
// Name: useCanSearchForumPostsByChannelId
// Dependencies: [4762, 4845, 1071, 504, 2]
// Exports: useCanSearchForumPostsByChannelId

// Module 11879 (useCanSearchForumPostsByChannelId)
import Constants from "Constants" /* 1071 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export function useCanSearchForumPostsByChannelId(channelId) {
  _require = channelId;
  const items = [ChannelStore, PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    const canResult = null != channel && PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, channel);
    return canResult;
  });
}
