// Module ID: 19157
// Function ID: 19158
// Name: useCanInviteMembers
// Dependencies: [4858, 4941, 1083, 563, 2]
// Exports: useCanInviteMembers

// Module 19157 (useCanInviteMembers)
import Constants from "Constants" /* 1083 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export function useCanInviteMembers(channelId) {
  _require = channelId;
  const items = [ChannelStore, PermissionStore];
  const items1 = [channelId];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    const canResult = null != channel && PermissionStore.can(Permissions.CONNECT, channel) && PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel);
    return canResult;
  }, items1);
}
