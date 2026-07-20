// Module ID: 5661
// Function ID: 48591
// Name: canReportUser
// Dependencies: []
// Exports: canDeleteAndReportMessage

// Module 5661 (canReportUser)
function canReportUser(author) {
  if (null == author) {
    return false;
  } else {
    const currentUser = currentUser.getCurrentUser();
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
  const channel = channel.getChannel(channelId);
  if (null == channel) {
    return false;
  } else {
    if (channel.type !== constants.DM) {
      if (channel.type !== constants.GROUP_DM) {
        const obj = { channelId };
        if (closure_2.canWithPartialContext(constants2.MANAGE_MESSAGES, obj)) {
          const memberCount = memberCount.getMemberCount(channel.getGuildId());
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
({ ChannelTypes: closure_4, Permissions: closure_5 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("utils/ReportUtils.tsx");

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
