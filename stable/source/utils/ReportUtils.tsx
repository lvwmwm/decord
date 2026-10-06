// Module ID: 6708
// Function ID: 6709
// Name: ReportUtils
// Dependencies: [2051, 4756, 4472, 1378, 1086, 2]
// Exports: canDeleteAndReportMessage, canReportAndDeleteInChannel, canReportMessage, canReportUser

// Module 6708 (ReportUtils)
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4756 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import UserStore from "UserStore" /* 1378 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ ChannelTypes: closure_4, Permissions: hasOwnProperty, MessageTypesSets: metroRequire } = Constants);
const result = size.fileFinishedImporting("utils/ReportUtils.tsx");

export const canReportUser = function canReportUser(user) {
  if (null == user) {
    return false;
  } else {
    const id = user.id;
    const currentUser = UserStore.getCurrentUser();
    let tmp3 = null != currentUser;
    if (tmp3) {
      tmp3 = currentUser.id !== id && true !== user.system;
      const tmp4 = currentUser.id !== id && true !== user.system;
    }
    return tmp3;
  }
};
export const canReportMessage = function canReportMessage(message) {
  let tmp = null != message;
  if (tmp) {
    const NON_REPORTABLE = metroRequire.NON_REPORTABLE;
    tmp = !NON_REPORTABLE.has(message.type);
  }
  if (tmp) {
    const author = message.author;
    let flag = false;
    if (null != author) {
      const id = author.id;
      const currentUser = UserStore.getCurrentUser();
      let tmp5 = null != currentUser;
      if (tmp5) {
        tmp5 = currentUser.id !== id && true !== author.system;
        const tmp6 = currentUser.id !== id && true !== author.system;
      }
      flag = tmp5;
    }
    tmp = flag;
  }
  return tmp;
};
export const canReportAndDeleteInChannel = function canReportAndDeleteInChannel(channelId) {
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return false;
  } else {
    if (channel.type !== constants.DM) {
      if (channel.type !== tmp6.GROUP_DM) {
        const obj = { channelId };
        if (PermissionStore.canWithPartialContext(hasOwnProperty.MANAGE_MESSAGES, obj)) {
          const memberCount = GuildMemberCountStore.getMemberCount(channel.getGuildId());
          return null != memberCount && memberCount >= 50;
        } else {
          return false;
        }
      }
    }
    return true;
  }
};
export const canDeleteAndReportMessage = function canDeleteAndReportMessage(type) {
  let tmp = null != type;
  if (tmp) {
    let tmp2 = null != type;
    if (tmp2) {
      const NON_REPORTABLE = metroRequire.NON_REPORTABLE;
      tmp2 = !NON_REPORTABLE.has(type.type);
    }
    if (tmp2) {
      const author = type.author;
      let flag = false;
      if (null != author) {
        const id = author.id;
        const currentUser = UserStore.getCurrentUser();
        let tmp6 = null != currentUser;
        if (tmp6) {
          tmp6 = currentUser.id !== id && true !== author.system;
          const tmp7 = currentUser.id !== id && true !== author.system;
        }
        flag = tmp6;
      }
      tmp2 = flag;
    }
    tmp = tmp2;
  }
  if (tmp) {
    const channelId = type.getChannelId();
    const channel = ChannelStore.getChannel(channelId);
    let flag3 = false;
    if (null != channel) {
      flag3 = true;
      if (channel.type !== constants.DM) {
        flag3 = true;
        if (channel.type !== tmp10.GROUP_DM) {
          flag3 = false;
          const obj = { channelId };
          if (PermissionStore.canWithPartialContext(hasOwnProperty.MANAGE_MESSAGES, obj)) {
            const memberCount = GuildMemberCountStore.getMemberCount(channel.getGuildId());
            flag3 = null != memberCount && memberCount >= 50;
            const tmp15 = null != memberCount && memberCount >= 50;
          }
        }
      }
    }
    tmp = flag3;
  }
  return tmp;
};
