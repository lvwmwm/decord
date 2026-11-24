// Module ID: 8277
// Function ID: 8278
// Name: isReadableChannel
// Dependencies: [4766, 4762, 4845, 1071, 2]
// Exports: isReadableChannel, isReadableChannelId

// Module 8277 (isReadableChannel)
import ChannelRecord from "ChannelRecord" /* 4766 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let BasicPermissions;
let c3;
const isTextChannel = ChannelRecord.isTextChannel;
({ ChannelTypes: c3, BasicPermissions } = Constants);
let closure_4 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
const result = size.fileFinishedImporting("modules/app_database/modules/messages/isReadableChannel.tsx");

export function isReadableChannel(basicChannel) {
  let tmp = null != basicChannel;
  if (tmp) {
    let tmp3 = basicChannel.type === constants.DM || basicChannel.type === tmp2.GROUP_DM;
    if (!tmp3) {
      tmp3 = isTextChannel(basicChannel.type) && PermissionStore.canBasicChannel(closure_4, basicChannel);
      const canBasicChannelResult = isTextChannel(basicChannel.type) && PermissionStore.canBasicChannel(closure_4, basicChannel);
    }
    tmp = tmp3;
  }
  return tmp;
}
export function isReadableChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    let tmp4 = null != basicChannel;
    if (tmp4) {
      let tmp6 = basicChannel.type === constants.DM || basicChannel.type === tmp5.GROUP_DM;
      if (!tmp6) {
        tmp6 = isTextChannel(basicChannel.type) && PermissionStore.canBasicChannel(closure_4, basicChannel);
        const canBasicChannelResult = isTextChannel(basicChannel.type) && PermissionStore.canBasicChannel(closure_4, basicChannel);
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
}
