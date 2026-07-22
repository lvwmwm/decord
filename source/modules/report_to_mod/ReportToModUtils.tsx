// Module ID: 5650
// Function ID: 48348
// Name: isModeratorReportOrPostChannelId
// Dependencies: []
// Exports: canAccessReportsChannel, canReportMessageToMods, getReportToModChannelId, isModeratorReportChannelId, isModeratorReportMessage, isModeratorReportPostChannelId, isModeratorReportThreadStarterMessage, isSafeToTransitionToReportForCurrentUser, isUserAuthorOfReportedMessage, sortedModeratorReportTags

// Module 5650 (isModeratorReportOrPostChannelId)
function isModeratorReportOrPostChannelId(channelId) {
  return isModeratorReportOrPostChannel(store.getChannel(channelId));
}
function isModeratorReportChannel(channel) {
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.isModeratorReportChannel() && channel.isForumChannel();
    const tmp2 = channel.isModeratorReportChannel() && channel.isForumChannel();
  }
  return tmp;
}
function isModeratorReportPostChannel(channel) {
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.isModeratorReportChannel() && channel.isForumPost();
    const tmp2 = channel.isModeratorReportChannel() && channel.isForumPost();
  }
  return tmp;
}
function isModeratorReportOrPostChannel(channel) {
  let tmp = null != channel;
  if (tmp) {
    let tmp3 = isModeratorReportChannel(channel);
    if (!tmp3) {
      tmp3 = isModeratorReportPostChannel(channel);
    }
    tmp = tmp3;
  }
  return tmp;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const ReportToModPermissions = arg1(dependencyMap[5]).ReportToModPermissions;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/report_to_mod/ReportToModUtils.tsx");

export const canReportMessageToMods = function canReportMessageToMods(message) {
  if (obj.canReportUser(message.author)) {
    const channel = store.getChannel(message.channel_id);
    if (null == channel) {
      return false;
    } else {
      const guild = store2.getGuild(channel.guild_id);
      if (null == guild) {
        return false;
      } else {
        let tmp8 = importDefault(dependencyMap[7])(guild);
        if (tmp8) {
          tmp8 = null != importDefault(dependencyMap[8])(guild);
        }
        return tmp8;
      }
    }
  } else {
    return false;
  }
  const obj = arg1(dependencyMap[6]);
};
export const canAccessReportsChannel = function canAccessReportsChannel(guildId) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_6, closure_8];
    tmp = items;
  }
  let obj = arg1(dependencyMap[9]);
  const contextForPermission = obj.getContextForPermission(guildId, tmp);
  if (null == contextForPermission) {
    return false;
  } else {
    const guild = contextForPermission.guild;
    let tmp7 = null == guild;
    if (!tmp7) {
      tmp7 = !importDefault(dependencyMap[7])(guild);
    }
    if (!tmp7) {
      tmp7 = null == importDefault(dependencyMap[8])(guild);
    }
    let hasAnyResult = !tmp7;
    if (!tmp7) {
      const obj2 = importAll(dependencyMap[10]);
      obj = { user: contextForPermission.user, context: guild, checkElevated: false };
      hasAnyResult = obj2.hasAny(importAll(dependencyMap[11]).computePermissions(obj), ReportToModPermissions);
      const obj3 = importAll(dependencyMap[11]);
    }
    return hasAnyResult;
  }
};
export const getReportToModChannelId = function getReportToModChannelId(guildId) {
  const guild = store2.getGuild(guildId);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = importDefault(dependencyMap[8])(guild);
  }
  return tmp2;
};
export { isModeratorReportOrPostChannelId };
export const isModeratorReportChannelId = function isModeratorReportChannelId(channelId) {
  return isModeratorReportChannel(store.getChannel(channelId));
};
export { isModeratorReportChannel };
export const isModeratorReportPostChannelId = function isModeratorReportPostChannelId(channelId) {
  return isModeratorReportPostChannel(store.getChannel(channelId));
};
export { isModeratorReportPostChannel };
export { isModeratorReportOrPostChannel };
export const isSafeToTransitionToReportForCurrentUser = function isSafeToTransitionToReportForCurrentUser(channelId) {
  if (null == channelId) {
    return true;
  } else {
    if (obj2.isCurrentUserTeen()) {
      if (isModeratorReportOrPostChannelId(channelId)) {
        const message = message.getMessage(channelId);
        const firstMessage = message.firstMessage;
        let tmp4 = !message.loaded || null == firstMessage;
        if (!tmp4) {
          tmp4 = !arg1(dependencyMap[13]).messageHasObscurableMediaForBitmask(firstMessage, arg1(dependencyMap[14]).ContentHarmTypeBitMask.EXPLICIT);
          const obj = arg1(dependencyMap[13]);
        }
        return tmp4;
      } else {
        return true;
      }
    } else {
      return true;
    }
    const obj2 = arg1(dependencyMap[12]);
  }
};
export const isModeratorReportThreadStarterMessage = function isModeratorReportThreadStarterMessage(isFirstMessageInForumPost, channel) {
  const tmp = !isFirstMessageInForumPost.isFirstMessageInForumPost(channel) || !isFirstMessageInForumPost.isSystemDM();
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = isModeratorReportPostChannel(channel);
  }
  return tmp2;
};
export const sortedModeratorReportTags = function sortedModeratorReportTags(found) {
  return found.sort((id, id2) => {
    let num = -1;
    if (id.id != callback(closure_3[15]).ReservedTagIds.MULTIPLE_REPORTS) {
      let num2 = 0;
      if (id2.id == callback(closure_3[15]).ReservedTagIds.MULTIPLE_REPORTS) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  });
};
export const isModeratorReportMessage = function isModeratorReportMessage(messageSnapshots) {
  messageSnapshots = messageSnapshots.messageSnapshots;
  return messageSnapshots.some((moderatorReport) => null != moderatorReport.moderatorReport);
};
export const isUserAuthorOfReportedMessage = function isUserAuthorOfReportedMessage(channelId) {
  const channel = store.getChannel(channelId);
  if (null != channel) {
    if (channel.isModeratorReportChannel()) {
      const messages = messages.getMessages(channelId);
      const firstResult = messages.first();
      let reported_user_id;
      if (null != firstResult) {
        const messageSnapshots = firstResult.messageSnapshots;
        if (null != messageSnapshots) {
          const first = messageSnapshots[0];
          if (null != first) {
            const moderatorReport = first.moderatorReport;
            if (null != moderatorReport) {
              reported_user_id = moderatorReport.reported_user_id;
            }
          }
        }
      }
      return reported_user_id === arg1;
    }
  }
  return false;
};
