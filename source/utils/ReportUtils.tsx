// Module ID: 5667
// Function ID: 48677
// Name: canReportUser
// Dependencies: [1348, 4051, 3758, 1849, 653, 2]
// Exports: canDeleteAndReportMessage

// Module 5667 (canReportUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import closure_2 from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
function canReportUser(author) {
  if (null == author) {
    return false;
  } else {
    currentUser = currentUser.getCurrentUser();
    let tmp3 = null != currentUser;
    if (tmp3) {
      let tmp4 = currentUser.id !== author.id;
      if (tmp4) {
        tmp4 = true !== author.system;
      }
      tmp3 = tmp4;
    }
    return tmp3;
  }
}
function canReportMessage(message) {
  let tmp = null != message;
  if (tmp) {
    tmp = canReportUser(message.author);
  }
  return tmp;
}
function canReportAndDeleteInChannel(channelId) {
  channel = channel.getChannel(channelId);
  if (null == channel) {
    return false;
  } else {
    if (channel.type !== constants.DM) {
      if (channel.type !== constants.GROUP_DM) {
        const obj = { channelId };
        if (closure_2.canWithPartialContext(constants2.MANAGE_MESSAGES, obj)) {
          memberCount = memberCount.getMemberCount(channel.getGuildId());
          let tmp6 = null != memberCount;
          if (tmp6) {
            tmp6 = memberCount >= 50;
          }
          return tmp6;
        } else {
          return false;
        }
      }
    }
    return true;
  }
}
({ ChannelTypes: closure_4, Permissions: closure_5 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/ReportUtils.tsx");

export { canReportUser };
export { canReportMessage };
export { canReportAndDeleteInChannel };
export const canDeleteAndReportMessage = function canDeleteAndReportMessage(getChannelId) {
  let tmp = null != getChannelId;
  if (tmp) {
    tmp = canReportMessage(getChannelId);
  }
  if (tmp) {
    tmp = canReportAndDeleteInChannel(getChannelId.getChannelId());
  }
  return tmp;
};
