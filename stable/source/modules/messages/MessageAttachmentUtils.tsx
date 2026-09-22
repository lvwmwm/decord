// Module ID: 12145
// Function ID: 12146
// Name: MessageAttachmentUtils
// Dependencies: [4275, 1074, 7395, 7400, 7399, 8001, 563, 1935, 8389, 1114, 2]
// Exports: getObscureReasonForAttachment, getObscureReasonForEmbed, getObscureReasonForUnfurledMediaItem, getObscuredAlt, useShouldObscure

// Module 12145 (MessageAttachmentUtils)
import util from "util" /* 1114 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7395 */;
import ObscureMediaModels from "ObscureMediaModels" /* 7399 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7400 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 8001 */;
import computeGlobalSpoilerDisplayDefault from "computeGlobalSpoilerDisplay" /* 8389 */;
import PermissionStore from "PermissionStore" /* 4275 */;

require = fn;
function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    const type = media.type;
    if (ForumPostMediaUtils.ForumPostMediaTypes.EMBED === type) {
      const obj2 = { type: tmp4(7400).ObscuredMediaTypes.Embed, media };
      let tmp = obj2;
    } else if (tmp4(8001).ForumPostMediaTypes.ATTACHMENT === type) {
      const obj = { type: tmp4(7400).ObscuredMediaTypes.Attachment, media };
      tmp = obj;
    } else {
      tmp = null;
      if (tmp4(8001).ForumPostMediaTypes.COMPONENT === type) {
        const obj3 = { type: tmp4(7400).ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
        tmp = obj3;
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      const mediaObscuredReasonFromBitmask = tmp4(7395).getMediaObscuredReasonFromBitmask(tmp, enabledHarmTypesBitmaskForChannelType);
      tmp4(7395);
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp2 = items2;
      } else {
        const items3 = [, ];
        if (tmp8) {
          items3[0] = true;
          items3[1] = tmp4(7399).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp2 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = tmp4(7399).ObscureReason.SPOILER;
          tmp2 = items3;
        } else {
          items3[0] = false;
          items3[1] = undefined;
          tmp2 = items3;
        }
      }
      return tmp2;
    }
  }
}
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2) {
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  const obj = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment }, enabledHarmTypesBitmaskForChannelAndAuthorId);
  ObscuredMediaUtils;
  { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp4) {
    first = tmp(7399).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag) {
      first = tmp(7399).ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(embed, message, flag2, enabledContentHarmTypeFlags) {
  const obj = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed }, enabledContentHarmTypeFlags);
  const bot = message.author.bot;
  let isMediaScanPendingResult = !bot;
  if (!bot) {
    const obj3 = { type: tmp(7400).ObscuredMediaTypes.Embed, media: embed };
    isMediaScanPendingResult = tmp(7395).isMediaScanPending(obj3, enabledContentHarmTypeFlags);
    const tmpResult = tmp(7395);
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = tmp(7399).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag2) {
      first = tmp(7399).ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForUnfurledMediaItem = function getObscureReasonForUnfurledMediaItem(unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, arg2, isBot) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = isBot;
  if (isBot === undefined) {
    flag2 = false;
  }
  const obj = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem }, enabledHarmTypesBitmaskForChannelAndAuthorId);
  let isMediaScanPendingResult = !flag2;
  if (!flag2) {
    const obj3 = { type: tmp(7400).ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem };
    isMediaScanPendingResult = tmp(7395).isMediaScanPending(obj3, enabledHarmTypesBitmaskForChannelAndAuthorId);
    const tmpResult = tmp(7395);
  }
  if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT)) {
    let EXPLICIT_CONTENT = tmp(7399).ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(7399).ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = tmp(7399).ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(7399).ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = tmp(7399).ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = tmp(7399).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = tmp(7399).ObscureReason.SPOILER;
    }
  }
  return EXPLICIT_CONTENT;
};
export { getForumPostShouldObscure };
export const useShouldObscure = function useShouldObscure(channel) {
  channel = channel.channel;
  const items = [PermissionStore];
  const stateFromStores = channel(563).useStateFromStores(items, () => {
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_MESSAGES, tmp);
    }
    return canResult;
  });
  const RenderSpoilers = channel(1935).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj = channel(563);
  const enabledHarmTypesBitmaskForChannelType = channel(7395).getEnabledHarmTypesBitmaskForChannelType(channel(7400).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(channel.media, !computeGlobalSpoilerDisplayDefault(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
};
export const getObscuredAlt = function getObscuredAlt(arg0) {
  if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== arg0) {
    if (tmp(7399).ObscureReason.GORE_CONTENT !== arg0) {
      if (tmp(7399).ObscureReason.SELF_HARM_CONTENT !== arg0) {
        if (tmp(7399).ObscureReason.SPOILER === arg0) {
          const intl = tmp(1114).intl;
          return intl.string(tmp(1114).t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = tmp(1114).intl;
  return intl2.string(util.t.SEgHFh);
};
