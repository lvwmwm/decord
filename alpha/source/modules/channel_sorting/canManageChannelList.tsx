// Module ID: 14357
// Function ID: 14358
// Name: canManageChannelList
// Dependencies: [4858, 4941, 1072, 2]
// Exports: canViewChannelList, default, getContainingCategory

// Module 14357 (canManageChannelList)
import Constants from "Constants" /* 1072 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/channel_sorting/canManageChannelList.tsx");

export default function canManageChannelList(arg0, arg1) {
  let tmp = arg0;
  const can = PermissionStore.can;
  const MANAGE_CHANNELS = Permissions.MANAGE_CHANNELS;
  if (arg0 == null) {
    tmp = arg1;
  }
  return can(MANAGE_CHANNELS, tmp);
};
export function getContainingCategory(parent_id) {
  if (null == parent_id.parent_id) {
    return null;
  } else {
    const channel = ChannelStore.getChannel(parent_id.parent_id);
    let tmp2 = null;
    if (null != channel) {
      tmp2 = null;
      if (channel.isCategory()) {
        tmp2 = channel;
      }
    }
    return tmp2;
  }
}
export function canViewChannelList(channel) {
  const canResult = null == channel || PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
  return canResult;
}
