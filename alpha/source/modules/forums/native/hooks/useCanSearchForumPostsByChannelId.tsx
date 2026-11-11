// Module ID: 12263
// Function ID: 12264
// Name: useCanSearchForumPostsByChannelId
// Dependencies: [5092, 5175, 1072, 504, 2]
// Exports: useCanSearchForumPostsByChannelId

// Module 12263 (useCanSearchForumPostsByChannelId)
import Constants from "Constants" /* 1072 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import PermissionStore from "PermissionStore" /* 5175 */;
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
