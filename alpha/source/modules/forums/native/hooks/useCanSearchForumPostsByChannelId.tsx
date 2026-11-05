// Module ID: 11544
// Function ID: 11545
// Name: useCanSearchForumPostsByChannelId
// Dependencies: [4992, 5075, 1072, 504, 2]
// Exports: useCanSearchForumPostsByChannelId

// Module 11544 (useCanSearchForumPostsByChannelId)
import Constants from "Constants" /* 1072 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import PermissionStore from "PermissionStore" /* 5075 */;
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
