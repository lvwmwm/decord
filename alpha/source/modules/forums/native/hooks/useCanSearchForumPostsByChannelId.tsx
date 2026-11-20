// Module ID: 11759
// Function ID: 11760
// Name: useCanSearchForumPostsByChannelId
// Dependencies: [4643, 4726, 1071, 504, 2]
// Exports: useCanSearchForumPostsByChannelId

// Module 11759 (useCanSearchForumPostsByChannelId)
import Constants from "Constants" /* 1071 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import PermissionStore from "PermissionStore" /* 4726 */;
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
