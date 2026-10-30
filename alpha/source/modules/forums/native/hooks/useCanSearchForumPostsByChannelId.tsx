// Module ID: 11311
// Function ID: 11312
// Name: useCanSearchForumPostsByChannelId
// Dependencies: [4858, 4941, 1072, 504, 2]
// Exports: useCanSearchForumPostsByChannelId

// Module 11311 (useCanSearchForumPostsByChannelId)
import Constants from "Constants" /* 1072 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
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
