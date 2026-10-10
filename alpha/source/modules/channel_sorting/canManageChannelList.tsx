// Module ID: 12698
// Function ID: 12699
// Name: canManageChannelList
// Dependencies: [2065, 4750, 1085, 2]
// Exports: canViewChannelList, default, getContainingCategory

// Module 12698 (canManageChannelList)
import Constants from "Constants" /* 1085 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4750 */;
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
export const getContainingCategory = function getContainingCategory(parent_id) {
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
};
export const canViewChannelList = function canViewChannelList(channel) {
  const canResult = null == channel || PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
  return canResult;
};
