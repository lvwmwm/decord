// Module ID: 13859
// Function ID: 13860
// Name: canManageChannelList
// Dependencies: [4823, 4903, 1087, 2]
// Exports: canViewChannelList, default, getContainingCategory

// Module 13859 (canManageChannelList)
import Constants from "Constants" /* 1087 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import PermissionStore from "PermissionStore" /* 4903 */;
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
