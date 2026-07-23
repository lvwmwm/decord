// Module ID: 6716
// Function ID: 52207
// Name: isReadableChannel
// Dependencies: [1352, 1348, 3758, 653, 2]
// Exports: isReadableChannelId

// Module 6716 (isReadableChannel)
import { isTextChannel } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_2 from "_isNativeReflectConstruct";
import ME from "ME";

let BasicPermissions;
let closure_3;
function isReadableChannel(basicChannel) {
  let tmp = null != basicChannel;
  if (tmp) {
    let tmp3 = basicChannel.type === constants.DM;
    if (!tmp3) {
      tmp3 = basicChannel.type === constants.GROUP_DM;
    }
    if (!tmp3) {
      let canBasicChannelResult = isTextChannel(basicChannel.type);
      if (canBasicChannelResult) {
        canBasicChannelResult = closure_2.canBasicChannel(closure_4, basicChannel);
      }
      tmp3 = canBasicChannelResult;
    }
    tmp = tmp3;
  }
  return tmp;
}
({ ChannelTypes: closure_3, BasicPermissions } = ME);
let closure_4 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_database/modules/messages/isReadableChannel.tsx");

export { isReadableChannel };
export const isReadableChannelId = function isReadableChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isReadableChannel(basicChannel.getBasicChannel(channelId));
  }
  return tmp;
};
