// Module ID: 5655
// Function ID: 48385
// Name: isModeratorReportOrPostChannelId
// Dependencies: [5656, 1348, 1838, 4349, 1849, 5666, 5667, 5647, 5668, 5646, 483, 3763, 5669, 5670, 5673, 5680, 2]
// Exports: canAccessReportsChannel, canReportMessageToMods, getReportToModChannelId, isModeratorReportChannelId, isModeratorReportMessage, isModeratorReportPostChannelId, isModeratorReportThreadStarterMessage, isSafeToTransitionToReportForCurrentUser, isUserAuthorOfReportedMessage, sortedModeratorReportTags

// Module 5655 (isModeratorReportOrPostChannelId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { ReportToModPermissions } from "ReportToModPermissions";

const require = arg1;
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
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/report_to_mod/ReportToModUtils.tsx");

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
        let tmp8 = importDefault(5647)(guild);
        if (tmp8) {
          tmp8 = null != importDefault(5668)(guild);
        }
        return tmp8;
      }
    }
  } else {
    return false;
  }
  obj = require(5667) /* canReportUser */;
};
export const canAccessReportsChannel = function canAccessReportsChannel(guildId) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [_createForOfIteratorHelperLoose, closure_8];
    tmp = items;
  }
  let obj = require(5646) /* getContextForPermission */;
  const contextForPermission = obj.getContextForPermission(guildId, tmp);
  if (null == contextForPermission) {
    return false;
  } else {
    const guild = contextForPermission.guild;
    let tmp7 = null == guild;
    if (!tmp7) {
      tmp7 = !importDefault(5647)(guild);
    }
    if (!tmp7) {
      tmp7 = null == importDefault(5668)(guild);
    }
    let hasAnyResult = !tmp7;
    if (!tmp7) {
      const obj2 = importAll(483);
      obj = { user: contextForPermission.user, context: guild, checkElevated: false };
      hasAnyResult = obj2.hasAny(importAll(3763).computePermissions(obj), ReportToModPermissions);
      const obj3 = importAll(3763);
    }
    return hasAnyResult;
  }
};
export const getReportToModChannelId = function getReportToModChannelId(guildId) {
  const guild = store2.getGuild(guildId);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = importDefault(5668)(guild);
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
        message = message.getMessage(channelId);
        const firstMessage = message.firstMessage;
        let tmp4 = !message.loaded || null == firstMessage;
        if (!tmp4) {
          tmp4 = !require(5670) /* _createForOfIteratorHelperLoose */.messageHasObscurableMediaForBitmask(firstMessage, require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.EXPLICIT);
          const obj = require(5670) /* _createForOfIteratorHelperLoose */;
        }
        return tmp4;
      } else {
        return true;
      }
    } else {
      return true;
    }
    obj2 = require(5669) /* isCurrentUserTeen */;
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
    if (id.id != outer1_0(outer1_3[15]).ReservedTagIds.MULTIPLE_REPORTS) {
      let num2 = 0;
      if (id2.id == outer1_0(outer1_3[15]).ReservedTagIds.MULTIPLE_REPORTS) {
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
      messages = messages.getMessages(channelId);
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
